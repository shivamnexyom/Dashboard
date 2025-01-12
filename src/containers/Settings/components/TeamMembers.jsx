import React, { useEffect } from "react";
import { SITE_TEXT } from "../../../utils/constants";
import { Button } from "@mui/material";
import User from "../../../assets/user.svg";
import { DataGrid } from "@mui/x-data-grid";
import Avatar from "../../../components/common/Avatar";
import Trash from "../../../assets/trash_grey.svg";
import Edit from "../../../assets/edit_grey.svg";
import AddUserDialog from "./AddUserDialog";
import ConfirmModal from "../../../components/ConfirmModal";
import { teamList } from "../../../utils/constants";

const TeamMembers = () => {
  const [membersCount, setMembersCount] = React.useState(0);
  const [openAddUserDialog, setOpenAddUserDialog] = React.useState(false);
  const [showConfirmModal, toggleConfirmModal] = React.useState(false);
  const [userEditMode, setUserEditMode] = React.useState(false);
  const [rows, setRows] = React.useState([]);
  const [selectedUser, setSelectedUser] = React.useState(null);

  useEffect(() => {
    setMembersCount(teamList?.length);
    setRows(
      teamList?.map((member, index) => ({
        ...member,
        id: index,
      }))
    );
  }, []);

  const openEditPopup = (user) => {
    setUserEditMode(true);
    setSelectedUser(user);
    setOpenAddUserDialog(true);
  };

  const openDeleteModal = (user) => {
    toggleConfirmModal(true);
    setSelectedUser(user);
  };

  const closeModal = () => {
    toggleConfirmModal(false);
  };

  const columns = [
    {
      headerName: "Name",
      flex: 1,
      renderCell: (params) => (
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Avatar
            name={`${params.row?.Name?.split(" ")[0]?.charAt(
              0
            )}${params.row?.Name?.split(" ")[1]?.charAt(0)}`}
            height={40}
            width={40}
          />
          {params.row.Name}
        </div>
      ),
    },
    { field: "Role", headerName: "Role", flex: 0.5 },
    {
      field: "edit",
      headerName: "",
      flex: 0.5,
      renderCell: (params) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            justifyContent: "flex-end",
          }}
        >
          <img
            src={Edit}
            className="iconsAction"
            alt="Edit"
            onClick={(e) => {
              e.stopPropagation();
              openEditPopup(params.row);
            }}
          />
          <img
            src={Trash}
            className="iconsAction"
            alt="Delete"
            onClick={(e) => {
              e.stopPropagation();
              openDeleteModal(params.row);
            }}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="settingsContentWrapper teamMember">
      <div id="subHead" className="subHead">
        <h2>
          {SITE_TEXT.TeamMembersText}
          <span className="countMembers">{membersCount} users</span>
        </h2>
        <Button onClick={() => setOpenAddUserDialog(true)}>
          <img src={User} alt="Add User" />
          {SITE_TEXT.AddUserText}
        </Button>
      </div>
      <div className="mainContainer">
        <div style={{ height: "100%", width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[5, 10]}
            disableColumnResize
            disableColumnMenu
            disableColumnSorting
          />
        </div>
      </div>
      {openAddUserDialog && (
        <AddUserDialog
          open={openAddUserDialog}
          setOpen={setOpenAddUserDialog}
          user={selectedUser}
          userEditMode={userEditMode}
        />
      )}
      {showConfirmModal && (
        <ConfirmModal
          onClose={closeModal}
          modalHeader={SITE_TEXT.DELETE_USER_HEADER}
          modalDescription={SITE_TEXT.DELETE_USER_BODY}
          leftButtonText={SITE_TEXT.Cancle}
          leftButtonHandler={closeModal}
          rightButtonText={SITE_TEXT.Delete}
        />
      )}
    </div>
  );
};

export default TeamMembers;
