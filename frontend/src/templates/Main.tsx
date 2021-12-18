import React, { ReactNode } from 'react';

import Nav from '../layout/Nav'
import Footer from '../layout/Footer'

type IMainProps = {
  meta: ReactNode;
  darkFooter?: boolean;
  children: ReactNode;
};

const Main = ({ meta, darkFooter, children }: IMainProps) => (
  <div className="flex flex-col w-full h-full antialiased font-inter">
    <Nav meta={meta} />
    <main className="h-full global-padding">{children}</main>
    <Footer dark={darkFooter} />
  </div>
);

export { Main };
