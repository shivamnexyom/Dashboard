import React, { useEffect, useState } from "react";
import { SITE_TEXT } from "../../../utils/constants";
import { Button, TextField } from "@mui/material";
import Avatar from "../../../components/common/Avatar";
import PasswordField from "../../../components/common/PasswordField";
import "./../index.scss";
import c from "classnames";

const MOCK_USER = {
  FirstName: "John",
  LastName: "Doe",
  role: "Admin",
  Email: "abc@xyz.com",
};

const AccountSettings = () => {
  const [editPass, setEditPass] = useState(false);
  const [body, setBody] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    RePassword: "",
    Photo: "",
  });

  const [errors, setErrors] = useState({
    Password: false,
    RePassword: false,
    passNoMatch: false,
  });

  useEffect(() => {
    setBody({
      FirstName: MOCK_USER.FirstName,
      LastName: MOCK_USER.LastName,
      Email: MOCK_USER.Email,
      Password: "",
      RePassword: "",
      Photo: "",
    });
  }, []);

  const handleData = ({ name, value }) => {
    setBody((prev) => ({ ...prev, [name]: value }));
    if (name === "Password" || name === "RePassword") {
      setErrors((prev) => ({ ...prev, [name]: false, passNoMatch: false }));
    }
  };

  const validatePassword = () => {
    const { Password, RePassword } = body;
    const passNoMatch = Password !== RePassword;

    setErrors({
      Password: !Password,
      RePassword: !RePassword,
      passNoMatch,
    });

    return Password && RePassword && !passNoMatch;
  };

  const changePassword = (e) => {
    e.preventDefault();
    if (validatePassword()) {
      console.log("Password Updated:", body.Password);
      setEditPass(false);
    }
  };

  const editPassword = () => {
    setEditPass(true);
  };

  return (
    <div className="settingsContentWrapper">
      <div className="subHead">
        <h2>{SITE_TEXT.AccountSettingsText}</h2>
      </div>
      <div className="mainContainer">
        <div className="halfWidthWrap clearfix">
          <div className="inputWrap">
            <label>{SITE_TEXT.ProfilePictureText}</label>
            <Avatar
              name={`${MOCK_USER.FirstName[0]}${MOCK_USER.LastName[0]}`}
            />
          </div>
        </div>

        <div className="halfWidthWrap clearfix">
          <div className={c("inputWrap", { errorWrap: errors.FirstName })}>
            <label>{SITE_TEXT.NameText}</label>
            <TextField
              fullWidth
              name="FirstName"
              value={body.FirstName}
              placeholder={SITE_TEXT.FnamePlaceholder}
              disabled
            />
          </div>
          <div className={c("inputWrap", { errorWrap: errors.LastName })}>
            <label>{SITE_TEXT.LastName}</label>
            <TextField
              fullWidth
              name="LastName"
              value={body.LastName}
              placeholder={SITE_TEXT.LnamePlaceholder}
              disabled
            />
          </div>
        </div>

        <div className="halfWidthWrap clearfix">
          <div className={c("inputWrap", { errorWrap: errors.Email })}>
            <label>{SITE_TEXT.EmailText}</label>
            <TextField
              fullWidth
              name="Email"
              value={body.Email}
              placeholder={SITE_TEXT.EmailPlaceholder}
              disabled
            />
          </div>
        </div>

        <div
          className="halfWidthWrap clearfix"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div className="inputWrap">
            <label>{SITE_TEXT.PasswordText}</label>
            <TextField
              fullWidth
              name="Password"
              value="************"
              placeholder={SITE_TEXT.PasswordPlaceholder}
              disabled
            />
          </div>
          {!editPass && (
            <Button className="btnChange" onClick={editPassword}>
              {SITE_TEXT.Edit}
            </Button>
          )}
        </div>

        {editPass && (
          <>
            <div className="halfWidthWrap clearfix">
              <div className={c("inputWrap", { errorWrap: errors.Password })}>
                <label>{SITE_TEXT.NewPassword}</label>
                <PasswordField
                  fullWidth
                  type="password"
                  name="Password"
                  value={body.Password}
                  onChange={({ target }) => handleData(target)}
                  placeholder={SITE_TEXT.EnterNewPassword}
                />
                {errors.Password && (
                  <div className="warning">{SITE_TEXT.NewPasswordError}</div>
                )}
              </div>
            </div>
            <div className="halfWidthWrap clearfix">
              <div
                className={c("inputWrap", {
                  errorWrap: errors.RePassword || errors.passNoMatch,
                })}
              >
                <label>{SITE_TEXT.RepeatNewPassword}</label>
                <PasswordField
                  fullWidth
                  type="password"
                  name="RePassword"
                  value={body.RePassword}
                  onChange={({ target }) => handleData(target)}
                  placeholder={SITE_TEXT.EnterRepeatNewPassword}
                />
                {errors.RePassword && (
                  <div className="warning">{SITE_TEXT.RepeatPasswordError}</div>
                )}
                {errors.passNoMatch && (
                  <div className="warning">
                    {SITE_TEXT.InvalidPassMatchChangePass}
                  </div>
                )}
              </div>
            </div>
            <div className="halfWidthWrap clearfix footBtnChangePass">
              <Button variant="outlined" onClick={() => setEditPass(false)}>
                {SITE_TEXT.Cancle}
              </Button>
              <Button onClick={changePassword}>
                {SITE_TEXT.UpdatePassword}
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AccountSettings;
