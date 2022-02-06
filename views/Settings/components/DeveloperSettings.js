import { ChevronLeftIcon } from '@heroicons/react/solid';

const DeveloperSettings = ({ setSubPage }) => {
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
        <h1 className="mb-2 font-bold text-neutral-700">Developer</h1>
        <p className="text-sm font-medium text-neutral-400">
          Customize how Acme looks in your browser.
        </p>
      </div>

      <div className="mb-2">
        <p>Developer</p>
      </div>
    </>
  );
};

export default DeveloperSettings;
