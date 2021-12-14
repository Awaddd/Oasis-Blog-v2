import { AppConfig } from '../utils/AppConfig';

const Footer = () => (
  <footer className="self-end w-full">
    <div className="text-center text-gray-200 bg-gray-900 py-md">
      <span className="text-sm"> © Copyright {new Date().getFullYear()} {AppConfig.title}</span>
    </div>
  </footer>
);

export default Footer;


{/* <a className="font-bold text-blue-600 dark:text-blue-400" href="#">@BakaTeam</a> */ }