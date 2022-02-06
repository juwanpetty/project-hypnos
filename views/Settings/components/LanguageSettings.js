import { CheckCircleIcon, ChevronLeftIcon } from '@heroicons/react/solid';

const LanguageSettings = ({ setSubPage }) => {
  return (
    <>
      <div
        className="flex h-12 cursor-pointer items-center px-4"
        onClick={() => setSubPage(null)}>
        <div className="flex items-center">
          <ChevronLeftIcon
            className="h-5 w-5 text-neutral-700"
            aria-hidden="true"
          />
        </div>
        <h1 className="text-sm font-medium text-neutral-700">Settings</h1>
      </div>

      <div className="mb-3 px-4">
        <h1 className="mb-2 font-bold text-neutral-700">Languages</h1>
        <p className="text-sm font-medium text-neutral-400">
          Customize how Acme looks in your browser.
        </p>
      </div>

      <div className="mb-2">
        <div className="mx-2 flex h-10 cursor-pointer items-center justify-between rounded-md p-2 hover:bg-neutral-100">
          <div className="flex items-center">
            <h3 className="text-sm font-medium  text-neutral-700">English</h3>
          </div>
          <div className="flex items-center">
            <CheckCircleIcon
              className="h-5 w-5 text-neutral-700"
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="mx-2 flex h-10 cursor-pointer items-center justify-between rounded-md p-2 hover:bg-neutral-100">
          <div className="flex items-center">
            <h3 className="text-sm font-medium  text-neutral-700">Spanish</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default LanguageSettings;
