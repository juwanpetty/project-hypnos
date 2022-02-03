import Actions from 'views/Actions/Actions';
import Collections from 'views/Collections/Collections';

import { Tab } from '@headlessui/react';
import {
  AdjustmentsIcon,
  ClockIcon,
  CollectionIcon
} from '@heroicons/react/outline';

export default function Index() {
  return (
    <Tab.Group as="div" className="w-80 rounded-lg bg-white shadow-xl">
      <Tab.Panels>
        <Tab.Panel>
          <Actions />
        </Tab.Panel>
        <Tab.Panel>
          <Collections />
        </Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>

      <Tab.List className="flex h-14 items-center justify-around border-t border-neutral-200">
        <Tab
          className={({ selected }) =>
            selected ? 'text-blue-500' : 'text-gray-700'
          }>
          <div className="flex items-center">
            <ClockIcon className="h-5 w-5" aria-hidden="true" />
          </div>
        </Tab>
        <Tab
          className={({ selected }) =>
            selected ? 'text-blue-500' : 'text-gray-700'
          }>
          <div className="flex items-center">
            <CollectionIcon className="h-5 w-5 " aria-hidden="true" />
          </div>
        </Tab>
        <Tab
          className={({ selected }) =>
            selected ? 'text-blue-500' : 'text-gray-700'
          }>
          <div className="flex items-center">
            <AdjustmentsIcon className="h-5 w-5 " aria-hidden="true" />
          </div>
        </Tab>
      </Tab.List>
    </Tab.Group>
  );
}
