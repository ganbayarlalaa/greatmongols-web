import {
  FacebookGray,
  GmailGray,
  InstagramGray,
  PhoneGray,
} from "./ContactIcons";

const Foot = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            © 2024{" "}
            <a href="#" className="hover:underline">
              GREAT MONGOLS TOASTMASTERS CLUB
            </a>
            . All Rights Reserved.
          </span>
          <div className="mt-4 flex sm:mt-0 sm:justify-center">
            <FacebookGray />
            <InstagramGray />
            <GmailGray />
            <PhoneGray />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Foot;
