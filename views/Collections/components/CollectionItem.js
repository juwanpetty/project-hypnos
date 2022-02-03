import Image from 'next/image';

import { GlobeAltIcon } from '@heroicons/react/solid';

const FAVICON_SIZE = 20;

const CollectionItem = ({ title, url, favicon }) => {
  return (
    <div className="mx-2 mb-2 flex cursor-pointer items-center rounded-md p-2 last:mb-4 hover:bg-neutral-100">
      <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 bg-white p-2.5">
        {favicon ? (
          <Image
            alt={title}
            src={favicon}
            width={FAVICON_SIZE}
            height={FAVICON_SIZE}
          />
        ) : (
          <GlobeAltIcon
            className="h-5 w-5 text-neutral-700"
            aria-hidden="true"
          />
        )}
      </div>

      <div>
        <h2 className="text-sm font-medium text-neutral-700">{title}</h2>
        <p className="text-xs font-medium text-neutral-400">{url}</p>
      </div>
    </div>
  );
};

export default CollectionItem;
