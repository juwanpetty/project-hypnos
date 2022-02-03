import { ChevronRightIcon } from '@heroicons/react/solid';
import TimeMetric from 'components/TimeMetric';

const ActionItem = ({ title, time, icon, noAction }) => {
  let xMarkup = null;

  if (time) {
    xMarkup = <TimeMetric metric={time} />;
  } else if (!time && !noAction) {
    xMarkup = (
      <div className="flex items-center">
        <ChevronRightIcon
          className="h-5 w-5 text-neutral-700"
          aria-hidden="true"
        />
      </div>
    );
  } else {
    xMarkup = null;
  }

  return (
    <div className="mx-2 flex h-10 cursor-pointer items-center justify-between rounded-md p-2 hover:bg-neutral-100">
      <div className="flex items-center">
        <div className="flex items-center">{icon}</div>
        <h3 className="text-sm font-medium  text-neutral-700">{title}</h3>
      </div>
      {xMarkup}
    </div>
  );
};

export default ActionItem;
