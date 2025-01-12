import Dashboard from "../assets/dashboard.svg";
import Orders from "../assets/orders.svg";
import Inventry from "../assets/inventry.svg";
import Analytics from "../assets/analytics.svg";
import Settings from "../assets/settings.svg";

export const SITE_TEXT = {
  Dashboard: "Dashboard Overview",
  Inventory: "Inventory Management",
  Analytics: "Analytics Management",
  Orders: "Order Management",
  Settings: "Settings",
  AccountSettingsText: "Account settings",
  ProfilePictureText: "Profile Picture",
  NameText: "First Name",
  LastName: "Last Name",
  FnamePlaceholder: "Enter First name",
  LnamePlaceholder: "Enter Last name",
  EmailText: "Email",
  EmailPlaceholder: "Enter Email",
  PasswordText: "Password",
  PasswordPlaceholder: "Enter Password",
  Edit: "Edit",
  NewPassword: "New Password",
  EnterNewPassword: "Enter New Password",
  NewPasswordError: "Please enter new password",
  RepeatNewPassword: "Repeat new password",
  EnterRepeatNewPassword: "Enter Repeat New Password",
  RepeatPasswordError: "Please enter repeat password",
  InvalidPassMatchChangePass:
    "New Password and Repeat New Password do not match",
  UpdatePassword: "Update",
  Cancle: "Cancle",
  TeamMembersText: "Team members",
  AddUserText: "Add User",
  DELETE_USER_HEADER: "Delete user",
  DELETE_USER_BODY: "Are you sure you want to remove this user?",
  Delete: "Delete",
  EditUserText: "Edit User",
  InvalidRole: "Please select Role",
};

export const ROUTES_CONTENT = [
  {
    path: "/",
    name: "Dashboard",
    imgSrc: Dashboard,
    hasChild: true,
  },
  {
    path: "/orders",
    name: "Orders",
    imgSrc: Orders,
  },
  {
    path: "/inventory",
    name: "Inventory",
    imgSrc: Inventry,
  },
  {
    path: "/analytics",
    name: "Analytics",
    imgSrc: Analytics,
  },
];

export const ROUTES_CONTENT_USER = [
  {
    path: "/settings",
    name: "Settings",
    imgSrc: Settings,
  },
];

export const teamList = [
  {
    Email: "shivam@abc.com",
    FirstName: "Shivam",
    LastName: "Kumar",
    Name: "Shivam Kumar",
    Role: "Admin",
  },
  {
    Email: "abc@abc.com",
    FirstName: "Jon",
    LastName: "Doe",
    Name: "Jon Doe",
    Role: "Member",
  },
  {
    Email: "xyz@abc.com",
    FirstName: "Jons",
    LastName: "KKK",
    Name: "Jons KKK",
    Role: "Viewer",
  },
];
