import { ReactNode } from 'react';
import Link from 'next/link';

const Nav = ({ meta }: { meta: ReactNode }) => (
  <nav className="grid w-full grid-cols-2 p-4 antialiased md:py-7">
    {meta}
    <div className=" brand">
      Omar Dini<span className="text-primary">.</span>
    </div>
    <div className="flex items-end justify-end gap-4">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </div>
  </nav>
);

export default Nav;
