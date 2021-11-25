import React, { ReactNode } from 'react';

import Nav from '../layout/Nav'
import Footer from '../layout/Footer'

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = ({ meta, children }: IMainProps) => (
  <div className="flex flex-col w-full h-screen antialiased">
    <div className="">
      <Nav meta={meta} />
      <main className="h-full px-4 py-7">{children}</main>
      <Footer />
    </div>
  </div>
);

export { Main };
