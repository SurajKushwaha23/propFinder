import { useState } from "react";
import { Switch } from "@headlessui/react";

const Settings = () => {
  const [notificationSettings, setNotificationSettings] = useState({
    email: true,
    sms: false,
    push: true,
    newsletter: true,
  });

  const [privacySettings, setPrivacySettings] = useState({
    showProfile: true,
    showEmail: false,
    showPhone: false,
  });

  const toggleNotificationSetting = (key) => {
    setNotificationSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const togglePrivacySetting = (key) => {
    setPrivacySettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">
        Account Settings
      </h1>

      {/* Notification Settings */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Notification Preferences
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Email Notifications</p>
                <p className="text-sm text-gray-500">
                  Receive updates via email
                </p>
              </div>
              <Switch
                checked={notificationSettings.email}
                onChange={() => toggleNotificationSetting("email")}
                className={`${
                  notificationSettings.email ? "bg-indigo-600" : "bg-gray-200"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span
                  className={`${
                    notificationSettings.email
                      ? "translate-x-6"
                      : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
              </Switch>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">SMS Notifications</p>
                <p className="text-sm text-gray-500">
                  Receive updates via text message
                </p>
              </div>
              <Switch
                checked={notificationSettings.sms}
                onChange={() => toggleNotificationSetting("sms")}
                className={`${
                  notificationSettings.sms ? "bg-indigo-600" : "bg-gray-200"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span
                  className={`${
                    notificationSettings.sms ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
              </Switch>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Push Notifications</p>
                <p className="text-sm text-gray-500">
                  Receive updates via app notifications
                </p>
              </div>
              <Switch
                checked={notificationSettings.push}
                onChange={() => toggleNotificationSetting("push")}
                className={`${
                  notificationSettings.push ? "bg-indigo-600" : "bg-gray-200"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span
                  className={`${
                    notificationSettings.push
                      ? "translate-x-6"
                      : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
              </Switch>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Newsletter</p>
                <p className="text-sm text-gray-500">
                  Receive our weekly newsletter
                </p>
              </div>
              <Switch
                checked={notificationSettings.newsletter}
                onChange={() => toggleNotificationSetting("newsletter")}
                className={`${
                  notificationSettings.newsletter
                    ? "bg-indigo-600"
                    : "bg-gray-200"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span
                  className={`${
                    notificationSettings.newsletter
                      ? "translate-x-6"
                      : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Settings */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Privacy Settings
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Show Profile to Public</p>
                <p className="text-sm text-gray-500">
                  Make your profile visible to other users
                </p>
              </div>
              <Switch
                checked={privacySettings.showProfile}
                onChange={() => togglePrivacySetting("showProfile")}
                className={`${
                  privacySettings.showProfile ? "bg-indigo-600" : "bg-gray-200"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span
                  className={`${
                    privacySettings.showProfile
                      ? "translate-x-6"
                      : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
              </Switch>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Show Email Address</p>
                <p className="text-sm text-gray-500">
                  Make your email visible to other users
                </p>
              </div>
              <Switch
                checked={privacySettings.showEmail}
                onChange={() => togglePrivacySetting("showEmail")}
                className={`${
                  privacySettings.showEmail ? "bg-indigo-600" : "bg-gray-200"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span
                  className={`${
                    privacySettings.showEmail
                      ? "translate-x-6"
                      : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
              </Switch>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Show Phone Number</p>
                <p className="text-sm text-gray-500">
                  Make your phone number visible to other users
                </p>
              </div>
              <Switch
                checked={privacySettings.showPhone}
                onChange={() => togglePrivacySetting("showPhone")}
                className={`${
                  privacySettings.showPhone ? "bg-indigo-600" : "bg-gray-200"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span
                  className={`${
                    privacySettings.showPhone
                      ? "translate-x-6"
                      : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>

      {/* Account Actions */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Account Actions
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-red-600">Delete Account</p>
                <p className="text-sm text-gray-500">
                  Permanently delete your account and all data
                </p>
              </div>
              <button className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
