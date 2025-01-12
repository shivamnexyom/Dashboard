import React, { useState } from "react";
import PropTypes from "prop-types";
import c from "classnames";

import "./../index.scss";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { SITE_TEXT } from "../../../utils/constants";
import { CustomSelect } from "../../../components/common/Select";

const RolesList = [
  { key: "Admin", value: "Admin" },
  { key: "Approver", value: "Approver" },
  { key: "Viewer", value: "Viewer" },
];

const AddUserDialog = ({ open, setOpen, user, userEditMode = false }) => {
  const [body, setBody] = useState({
    FirstName: userEditMode ? user?.FirstName : "",
    LastName: userEditMode ? user?.LastName : "",
    Email: userEditMode ? user?.Email : "",
    Role: userEditMode ? user?.Role : RolesList[0].value,
  });

  const [errors, setErrors] = useState({
    FirstName: false,
    LastName: false,
    Email: false,
    Role: false,
  });

  const handleChange = (name, value) => {
    setBody((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const validateFields = () => {
    const { FirstName, LastName, Role } = body;
    const fieldErrors = {
      FirstName: !FirstName,
      LastName: !LastName,
      Role: !Role,
    };
    setErrors(fieldErrors);
    return Object.values(fieldErrors).every((error) => !error);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="adduserId">Users</div>
      <Dialog open={open} maxWidth="sm" fullWidth className="addUserDialog">
        <DialogTitle onClose={handleClose} className="dialogTitle">
          {userEditMode ? SITE_TEXT.EditUserText : SITE_TEXT.AddUserText}
        </DialogTitle>
        <DialogContent className="dialogContainer">
          <div className="halfWidthWrap clearfix">
            <div
              className={c("inputWrap", {
                errorWrap: errors.FirstName,
              })}
            >
              <label htmlFor="name">{SITE_TEXT.FnameText}</label>
              <TextField
                fullWidth
                id="name"
                name="FirstName"
                value={body.FirstName}
                onChange={({ target }) => handleChange(target)}
                placeholder={SITE_TEXT.FnamePlaceholder}
                inputProps={{ maxLength: 100 }}
              />
              {errors.FirstName && (
                <div className="warning">{SITE_TEXT.InvalidFName}</div>
              )}
            </div>
            <div
              className={c("inputWrap", {
                errorWrap: errors.LastName,
              })}
            >
              <label htmlFor="lastName">{SITE_TEXT.LnameText}</label>
              <TextField
                fullWidth
                id="lastName"
                name="LastName"
                value={body.LastName}
                onChange={({ target }) => handleChange(target)}
                placeholder={SITE_TEXT.LnamePlaceholder}
                inputProps={{ maxLength: 100 }}
              />
              {errors.LastName && (
                <div className="warning">{SITE_TEXT.InvalidLName}</div>
              )}
            </div>
          </div>

          <div
            className={c("inputWrap", {
              errorWrap: errors.Email,
            })}
          >
            <label htmlFor="email">{SITE_TEXT.EmailText}</label>
            <TextField
              fullWidth
              id="email"
              name="Email"
              value={body.Email}
              onChange={({ target }) => handleChange(target)}
              placeholder={SITE_TEXT.EmailPlaceholder}
              inputProps={{ maxLength: 100 }}
              disabled={userEditMode}
            />
            {errors.Email && (
              <div className="warning">{SITE_TEXT.InvalidEmail}</div>
            )}
          </div>
          <div
            className={c("inputWrap", {
              errorWrap: errors.Role,
            })}
          >
            <label htmlFor="role">{SITE_TEXT.RoleText}</label>
            <CustomSelect
              id="role"
              options={RolesList}
              showLabel={false}
              showCircle={false}
              fullWidth
              answer={body.Role}
            />
            {errors.Role && (
              <div className="warning">{SITE_TEXT.InvalidRole}</div>
            )}
          </div>
        </DialogContent>
        <DialogActions style={{ padding: "24px", paddingTop: 0 }}>
          <Button fullWidth variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button fullWidth>
            {userEditMode ? SITE_TEXT.EditUserText : SITE_TEXT.AddUserText}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

AddUserDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  user: PropTypes.object,
  userEditMode: PropTypes.bool,
};

export default AddUserDialog;
