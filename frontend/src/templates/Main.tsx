import React, { ReactNode } from 'react';

import Nav from '../layout/Nav'
import Footer from '../layout/Footer'

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = ({ meta, children }: IMainProps) => (
  <div className="flex flex-col w-full h-full antialiased font-inter">
    <Nav meta={meta} />
    <main className="h-full global-padding">{children}</main>
    <Footer />
  </div>
);

export { Main };
