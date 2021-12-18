import React, { ReactNode, FC } from 'react';

import Nav from '../layout/Nav'
import Footer from '../layout/Footer'

type IMainProps = {
  meta: ReactNode;
  footerProps?: { dark?: boolean; }
  footer?: FC | JSX.Element;
  children: ReactNode;
};

const Main = ({ meta, footerProps, footer, children }: IMainProps) => (
  <div className="flex flex-col w-full h-full antialiased font-inter">
    <Nav meta={meta} />
    <main className="h-full global-padding">{children}</main>
    <Footer {...footerProps}>
      {footer && footer}
    </Footer>
  </div>
);

export { Main };
