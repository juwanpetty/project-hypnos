import { useState } from 'react';
import DefaultTimeSettings from './components/DefaultTimeSettings';
import DeveloperSettings from './components/DeveloperSettings';
import LanguageSettings from './components/LanguageSettings';

import SettingItem from './components/SettingItem';
import ThemeSettings from './components/ThemeSettings';
import WeekStartsOnSettings from './components/WeekStartsOn';

const Settings = () => {
  // TODO: add switch and state to show different sub-pages
  const [subPage, setSubPage] = useState(null);

  let settingsSubPage = null;
  switch (subPage) {
    case 'theme':
      settingsSubPage = <ThemeSettings setSubPage={setSubPage} />;
      break;
    case 'language':
      settingsSubPage = <LanguageSettings setSubPage={setSubPage} />;
      break;
    case 'defaultTime':
      settingsSubPage = <DefaultTimeSettings setSubPage={setSubPage} />;
      break;
    case 'weekStartsOn':
      settingsSubPage = <WeekStartsOnSettings setSubPage={setSubPage} />;
      break;
    case 'developer':
      settingsSubPage = <DeveloperSettings setSubPage={setSubPage} />;
      break;

    default:
      settingsSubPage = null;
      break;
  }

  return (
    <>
      {!subPage && (
        <>
          <div className="flex h-12 items-center px-4">
            <h1 className="font-bold text-neutral-700">Settings</h1>
          </div>

          <div className="mb-4">
            <p className="pb-2 pl-4 text-xs font-medium text-neutral-400">
              Appearence
            </p>
            <SettingItem title="Theme" value="theme" setSubPage={setSubPage} />
          </div>

          <div className="mb-4">
            <p className="pb-2 pl-4 text-xs font-medium text-neutral-400">
              Language & region
            </p>
            <SettingItem
              title="Language"
              value="language"
              setSubPage={setSubPage}
            />
            <SettingItem
              title="Default time"
              value="defaultTime"
              setSubPage={setSubPage}
            />
            <SettingItem
              title="Week starts on"
              value="weekStartsOn"
              setSubPage={setSubPage}
            />
          </div>

          <div className="mb-4">
            <p className="pb-2 pl-4 text-xs font-medium text-neutral-400">
              About
            </p>
            <SettingItem
              title="Developer"
              value="developer"
              setSubPage={setSubPage}
            />
          </div>
        </>
      )}

      {settingsSubPage}
    </>
  );
};

export default Settings;
