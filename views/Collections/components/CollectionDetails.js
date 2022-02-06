import {
  ChevronLeftIcon,
  GlobeAltIcon,
  PencilAltIcon
} from '@heroicons/react/solid';

const CollectionDetails = ({ setDetailsId }) => {
  return (
    <>
      <div
        className="flex h-12 cursor-pointer items-center px-4"
        onClick={() => setDetailsId(null)}>
        <div className="flex items-center">
          <ChevronLeftIcon
            className="h-5 w-5 text-neutral-700"
            aria-hidden="true"
          />
        </div>
        <h1 className="text-sm font-medium text-neutral-700">Settings</h1>
      </div>

      <div className="mb-4 flex items-start justify-between px-4">
        <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-md border border-neutral-200 bg-white p-2.5">
          <GlobeAltIcon
            className="h-6 w-6 text-neutral-700"
            aria-hidden="true"
          />
        </div>

        <div className="flex cursor-pointer items-center justify-between rounded-md border border-neutral-200 p-[6px] px-3">
          <div className="mr-2 flex h-4 w-4 items-center justify-center">
            <PencilAltIcon
              className="h-4 w-4 text-neutral-700"
              aria-hidden="true"
            />
          </div>
          <p className="text-sm font-medium text-neutral-700">Edit</p>
        </div>
      </div>

      <div className="mx-4 mb-6">
        <h2 className="text-sm font-medium text-neutral-700">
          Subscriptions - YouTube
        </h2>
        <p className="text-xs font-medium text-neutral-400">
          https://www.youtube.com/feed/subscriptions
        </p>
      </div>

      <div className="mx-4 mb-6 border-t text-neutral-200" />

      <div className="mx-4 mb-6 flex items-center justify-between">
        <p className="text-sm font-medium text-neutral-400">Snoozed for</p>
        <p className="text-sm font-medium text-neutral-700">Fr 09:00</p>
      </div>

      <div className="mx-2 mb-2 flex h-10 cursor-pointer items-center justify-center rounded-md bg-neutral-100">
        <p className="text-sm font-medium text-neutral-500">Delete</p>
      </div>
    </>
  );
};

export default CollectionDetails;
