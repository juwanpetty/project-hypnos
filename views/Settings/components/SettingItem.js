import { ChevronRightIcon } from "@heroicons/react/solid";

const SettingItem = ({ title }) => {
  return (
    <div className="mx-2 flex h-10 cursor-pointer items-center justify-between rounded-md p-2 hover:bg-neutral-100">
      <h3 className="text-sm font-medium  text-neutral-700">{title}</h3>
      <div className="flex items-center">
        <ChevronRightIcon
          className="h-5 w-5 text-neutral-700"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default SettingItem;
