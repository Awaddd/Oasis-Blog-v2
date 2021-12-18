import { FC } from 'react';
import SocialIconBar from './SocialIconBar';

const ArticleFooter: FC = () => (
  <footer className="flex flex-col text-center mt-md md:mt-lg footer py-[24px] md:py-lg px-lg">
    <p className="text-sm text-gray-900">Thanks for reading, make sure to check back for weekly updates!</p>
    <div className="flex self-center mt-md">
      <SocialIconBar dark={true} />
    </div>
  </footer>
)

export default ArticleFooter;