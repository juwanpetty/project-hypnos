import CollectionItem from './components/CollectionItem';

import { SearchIcon } from '@heroicons/react/outline';

const Collections = () => {
  return (
    <>
      <div className="flex h-12 items-center px-4">
        <h1 className="font-bold text-neutral-700">Scheduled</h1>
      </div>

      <div className="mx-2 pb-4">
        <div className="relative mt-1 rounded-md">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <SearchIcon
              className="h-5 w-5 text-neutral-400"
              aria-hidden="true"
            />
          </div>
          <input
            type="search"
            name="search"
            id="search"
            className="block w-full rounded-md border border-neutral-100 bg-neutral-100 py-2 pl-10 pr-2 text-sm placeholder:text-neutral-500 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Search by domain and title"
          />
        </div>
      </div>

      <div>
        <CollectionItem title="Home / Twitter" url="https://twitter.com/home" />
        <CollectionItem
          title="Popular shots on Dribbble"
          url="https://dribbble.com/shots/popular"
        />
        <CollectionItem
          title="Subscriptions - YouTube"
          url="https://www.youtube.com/feed/subscr..."
        />
        <CollectionItem
          title="juwanpetty (Juwan Petty)"
          url="https://github.com/juwanpetty"
        />
      </div>
    </>
  );
};

export default Collections;
