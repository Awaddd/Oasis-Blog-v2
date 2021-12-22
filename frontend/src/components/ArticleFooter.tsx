import { FC } from 'react';
import SocialIconBar from './SocialIconBar';

const ArticleFooter: FC = () => (
  <footer className="flex flex-col text-center footer py-[24px] md:py-lg md:pb-[45px] px-lg bg-slate-50">
    <h4 className="font-bold text-gray-900">Thanks for reading</h4>
    <p className="text-sm">Make sure to check back for weekly updates!</p>
    <div className="flex self-center mt-[16px]">
      <SocialIconBar dark={true} />
    </div>
  </footer>
)

export default ArticleFooter;