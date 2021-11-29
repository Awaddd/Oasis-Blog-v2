import { useRouter } from 'next/router';
import { Key, ReactNode, useState } from 'react';
import Link from 'next/link';
import { Burger } from '@mantine/core';
import { gql } from 'graphql-request';
import { useQuery } from 'react-query';
import { client } from '../services/api';

const Nav = ({ meta }: { meta: ReactNode }) => {

  const router = useRouter()
  const category = router.query.category

  const [open, setOpen] = useState(false)

  const { error, isLoading, data } = useQuery('categories', async () => await client.request(CATEGORIES));

  if (error) return <p>Error...</p>

  return (
    <nav className={`grid items-end w-full grid-flow-col-dense py-4 lg:py-7 md:py-5 antialiased global-padding ${open && "bg-gray-900 text-gray-200 md:bg-white md:text-black"}`}>

      {meta}

      <div className="brand justify-self-start">
        Omar Dini<span className={`${open ? "text-pink-500" : "text-primary"}`}>.</span>
      </div>

      <div className="relative justify-self-end md:hidden burger">
        <Burger opened={open} onClick={() => setOpen(open => !open)} size="md" color={`${open ? "white" : "black"}`} />
      </div>

      {!isLoading && !error && data && (
        <>
          {open && (
            <div className="flex flex-col col-start-1 col-end-3 row-start-2 gap-2 py-4 text-right md:hidden mr-sm">
              <Link href="/">
                <a className={`${router.pathname === '/' && 'text-pink-500'}`}>Home</a>
              </Link>

              {data.categories.map(({ pluralName }: Category, key: Key | null | undefined) => (
                <Link href={`/${pluralName}`} key={key}>
                  <a className={`${category === pluralName && 'text-pink-500'}`}>{pluralName}</a>
                </Link>
              ))}
            </div>
          )}

          <div className="justify-end hidden gap-6 justify-self-end md:flex">
            <Link href="/">
              <a className={`${router.pathname === '/' && 'text-primary'}`}>Home</a>
            </Link>

            {data.categories.map(({ pluralName }: Category, key: Key | null | undefined) => (
              <Link href={`/${pluralName}`} key={key}>
                <a className={`${category === pluralName && 'text-primary'}`}>{pluralName}</a>
              </Link>
            ))}
          </div>
        </>
      )}

    </nav>
  );
}

type Category = {
  id: number;
  name: string;
  pluralName: string;
}

const CATEGORIES = gql`
  query GetCategories {
    categories {
      name,
      pluralName,
      id
    }
  }
`

export default Nav;
