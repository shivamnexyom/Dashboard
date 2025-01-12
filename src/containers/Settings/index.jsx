import React from "react";
import LayoutContent from "../../components/LayoutContent";
import { SITE_TEXT } from "../../utils/constants";
import "./index.scss";
import { NavLink } from "react-router-dom";
import AccountSettings from "./components/AccountSettings";
import TeamMembers from "./components/TeamMembers";
import Loader from "../../components/Loader";

const Settings = () => {
  const user = { name: "jon doe" };
  const SETTINGS_ROUTE = [
    {
      id: "accountSetting",
      name: "Account Settings",
    },
    {
      id: "team",
      name: "Team",
    },
  ];

  const [selectedSettingsTab, setSelectedSettingsTab] = React.useState(
    SETTINGS_ROUTE[0].id
  );

  return (
    <LayoutContent title={SITE_TEXT.Settings}>
      {Object.keys(user)?.length == 0 ? (
        <Loader position="fixed" />
      ) : (
        <div className="settingsWrap-2">
          <div className="settingsWrapper">
            <aside>
              <div>
                {SETTINGS_ROUTE.map((tabKey) => {
                  const { id, name } = tabKey;
                  if (id === "team" && user?.role?.toLowerCase() === "member")
                    return null;
                  return (
                    <React.Fragment key={id}>
                      <NavLink
                        className={() =>
                          selectedSettingsTab === id ? "active" : ""
                        }
                        onClick={() => {
                          setSelectedSettingsTab(id);
                        }}
                      >
                        {name}
                      </NavLink>
                    </React.Fragment>
                  );
                })}
              </div>
            </aside>
            <div className="settingsContent">
              {selectedSettingsTab === "accountSetting" ? (
                <AccountSettings />
              ) : selectedSettingsTab === "team" ? (
                <TeamMembers />
              ) : null}
            </div>
          </div>
        </div>
      )}
    </LayoutContent>
  );
};

export default Settings;
