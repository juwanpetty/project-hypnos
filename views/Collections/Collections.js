import { useState } from 'react';

import CollectionItem from './components/CollectionItem';

import { SearchIcon } from '@heroicons/react/outline';
import CollectionDetails from './components/CollectionDetails';

const Collections = () => {
  const [detailsId, setDetailsId] = useState(null);

  return (
    <>
      {!detailsId && (
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
                type="text"
                name="search"
                id="search"
                className="block w-full rounded-md border border-neutral-100 bg-neutral-100 py-2 pl-10 pr-2 text-sm placeholder:text-neutral-500 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Search by domain and title"
              />
            </div>
          </div>
          <div>
            <CollectionItem
              title="Home / Twitter"
              url="https://twitter.com/home"
              setDetailsId={setDetailsId}
              id={2}
            />
            <CollectionItem
              title="Popular shots on Dribbble"
              url="https://dribbble.com/shots/popular"
              setDetailsId={setDetailsId}
              id={2}
            />
            <CollectionItem
              title="Subscriptions - YouTube"
              url="https://www.youtube.com/feed/subscr..."
              setDetailsId={setDetailsId}
              id={3}
            />
            <CollectionItem
              title="juwanpetty (Juwan Petty)"
              url="https://github.com/juwanpetty"
              setDetailsId={setDetailsId}
              id={4}
            />
          </div>
        </>
      )}

      {detailsId && (
        <CollectionDetails id={detailsId} setDetailsId={setDetailsId} />
      )}
    </>
  );
};

export default Collections;
