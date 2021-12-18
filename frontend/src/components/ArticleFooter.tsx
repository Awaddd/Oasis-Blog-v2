import { FC } from 'react';
import SocialIconBar from './SocialIconBar';

const ArticleFooter: FC = () => (
  <footer className="flex flex-col text-center mt-md md:mt-lg footer py-md md:py-lg">
    <p className="text-sm text-gray-900">Thanks for reading, make sure to check back for weekly updates!</p>
    <div className="flex self-center md:mt-[11px]">
      <SocialIconBar />
    </div>
  </footer>
)

export default ArticleFooter;