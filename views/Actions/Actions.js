import ActionItem from './components/ActionItem';

const Actions = () => {
  return (
    <>
      <div className="flex h-12 items-center px-4">
        <h1 className="font-bold text-neutral-700">Actions</h1>
      </div>

      <div>
        <ActionItem title="Later today" time="16:00" />
        <ActionItem title="Tomorrow" time="Fri 09:00" />
        <ActionItem title="Next week" time="Mon 09:00" />
        <ActionItem title="Next open" noAction />
      </div>

      <div className="my-2 mx-4 border-t text-neutral-200" />

      <div className="mb-4">
        <ActionItem title="Custom date & time" />
      </div>
    </>
  );
};

export default Actions;
