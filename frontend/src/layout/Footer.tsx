import { AppConfig } from '../utils/AppConfig';

const Footer = ({ dark }: { dark?: boolean }) => {

  const classes = dark ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-900';

  return (
    <footer className="self-end w-full">
      <div className={`text-center text-gray-200 py-md ${classes}`}>
        <span className="text-sm"> © Copyright {new Date().getFullYear()} {AppConfig.title}</span>
      </div>
    </footer>
  );
}

export default Footer;


{/* <a className="font-bold text-blue-600 dark:text-blue-400" href="#">@BakaTeam</a> */ }