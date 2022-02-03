import ActionItem from './components/ActionItem';

import CustomCalendarIcon from 'icons/CustomCalendarIcon';
import TodayCalendarIcon from 'icons/TodayCalendarIcon';
import TomorrowCalendarIcon from 'icons/TomorrowCalendarIcon';
import NextWeekCalendarIcon from 'icons/NextWeekCalendarIcon';
import NextOpenCalendarIcon from 'icons/NextOpenCalendarIcon';

const Actions = () => {
  return (
    <>
      <div className="flex h-12 items-center px-4">
        <h1 className="font-bold text-neutral-700">Actions</h1>
      </div>

      <div>
        <ActionItem
          title="Later today"
          time="16:00"
          icon={
            <TodayCalendarIcon
              className="mr-2 h-5 w-5 text-neutral-700"
              aria-hidden="true"
            />
          }
        />
        <ActionItem
          title="Tomorrow"
          time="Fri 09:00"
          icon={
            <TomorrowCalendarIcon
              className="mr-2 h-5 w-5 text-neutral-700"
              aria-hidden="true"
            />
          }
        />
        <ActionItem
          title="Next week"
          time="Mon 09:00"
          icon={
            <NextWeekCalendarIcon
              className="mr-2 h-5 w-5 text-neutral-700"
              aria-hidden="true"
            />
          }
        />
        <ActionItem
          title="Next open"
          noAction
          icon={
            <NextOpenCalendarIcon
              className="mr-2 h-5 w-5 text-neutral-700"
              aria-hidden="true"
            />
          }
        />
      </div>

      <div className="my-2 mx-4 border-t text-neutral-200" />

      <div className="mb-4">
        <ActionItem
          title="Custom date & time"
          icon={
            <CustomCalendarIcon
              className="mr-2 h-5 w-5 text-neutral-700"
              aria-hidden="true"
            />
          }
        />
      </div>
    </>
  );
};

export default Actions;
