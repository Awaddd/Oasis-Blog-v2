import { AppConfig } from '../utils/AppConfig';

const Footer = () => (
  <footer className="self-end w-full py-4 antialiased border-t border-gray-300 global-padding md:py-7 mt-lg md:mt-xl">
    <div className="text-sm text-center">
      © Copyright {new Date().getFullYear()} {AppConfig.title}
    </div>
  </footer>
);

export default Footer;


