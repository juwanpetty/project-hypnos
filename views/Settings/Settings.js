import SettingItem from './components/SettingItem';

const Settings = () => {
  return (
    <>
      <div className="flex h-12 items-center px-4">
        <h1 className="font-bold text-neutral-700">Settings</h1>
      </div>

      <div className="mb-4">
        <p className="pb-2 pl-4 text-xs font-medium text-neutral-400">
          Appearence
        </p>
        <SettingItem title="Theme" />
      </div>

      <div className="mb-4">
        <p className="pb-2 pl-4 text-xs font-medium text-neutral-400">
          Language & region
        </p>
        <SettingItem title="Language" />
        <SettingItem title="Default time" />
        <SettingItem title="Week starts on" />
      </div>

      <div className="mb-4">
        <p className="pb-2 pl-4 text-xs font-medium text-neutral-400">About</p>
        <SettingItem title="Developer" />
      </div>
    </>
  );
};

export default Settings;
