import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import "./Table.scss";
import { TextField } from "@mui/material";

const CustomTable = ({
  columns,
  data,
  sx = {},
  isLoading,
  filters = {},
  searchable,
  searchFields,
  ...otherProps
}) => {
  const [cols, setCols] = React.useState([]);

  const [filteredData, setFilteredData] = React.useState([]);

  useEffect(() => {
    setCols(
      columns.map((element) => {
        return {
          ...element,
          renderHeader: () => {
            const [menuOpen, setMenuOpen] = React.useState(false);
            const [anchorEl, setAnchorEl] = React.useState(null);
            const handleClick = (event) => {
              setAnchorEl(event.currentTarget);
              setMenuOpen(true);
            };

            const handleClose = () => {
              setAnchorEl(null);
              setMenuOpen(false);
            };

            return (
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: "18px",
                  color: "#667085",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {element?.headerName}
                {element.filterOptions && (
                  <>
                    <img
                      src={Filter}
                      alt=""
                      className={`${
                        filters[element.field.toLowerCase()] &&
                        filters[element.field.toLowerCase()].length > 0
                          ? "filterOpen"
                          : ""
                      }`}
                      onClick={handleClick}
                    />
                    <PopoverFilter
                      menuOpen={menuOpen}
                      anchorEl={anchorEl}
                      handleClose={handleClose}
                    >
                      <FilterComponent
                        filterOptions={element.filterOptions}
                        filterValue={filters[element.field.toLowerCase()]}
                      />
                    </PopoverFilter>
                  </>
                )}
              </span>
            );
          },
        };
      })
    );
  }, [columns]);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const tempData = data.filter((item) =>
      searchFields.some(
        (field) =>
          item[field] &&
          item[field].toString().toLowerCase().includes(searchValue)
      )
    );
    if (otherProps?.onSearch) {
      otherProps.onSearch(searchValue ? tempData : data);
    }
    setFilteredData(searchValue ? tempData : data);
  };

  return (
    <div style={{ height: "100%" }}>
      {searchable && (
        <div className="searchBar">
          <TextField
            size="small"
            variant="outlined"
            placeholder="Search"
            onChange={handleSearch}
          />
        </div>
      )}
      <div
        table-id="table-id"
        style={{ height: searchable ? "calc(100% - 56px)" : "100%" }}
      >
        <DataGrid
          rows={filteredData}
          columns={cols}
          loading={isLoading}
          sx={{
            borderRadius: "12px",
            "& .MuiDataGrid-container--top[role=row]": {
              background: "#F9FAFB !important",
            },
            "& .MuiDataGrid-columnHeader": {
              height: "48px !important",
              background: "#F9FAFB",
              padding: "0 24px",
            },
            "& .MuiDataGrid-columnHeaders div": {
              height: "48px",
            },
            "& .MuiDataGrid-cell": {
              height: `${
                otherProps?.options?.rowHeight
                  ? otherProps?.options?.rowHeight
                  : "48px"
              } !important`,
              display: "flex",
              alignItems: "center",
              borderColor: "#EAECF0",
              padding: "0 24px",
            },
            "& .MuiDataGrid-row": {
              height: `${
                otherProps?.options?.rowHeight
                  ? otherProps?.options?.rowHeight
                  : "48px"
              } !important`,
              maxHeight: `${
                otherProps?.options?.rowHeight
                  ? otherProps?.options?.rowHeight
                  : "48px"
              } !important`,
              minHeight: `${
                otherProps?.options?.rowHeight
                  ? otherProps?.options?.rowHeight
                  : "48px"
              } !important`,
              backgroundColor: "#ffffff",
              display: "flex",
              alignItems: "center",
            },
            borderColor: "#EAECF0",
            ...sx,
          }}
          disableColumnResize
          disableColumnMenu
          disableColumnSorting
          disableVirtualization
          {...otherProps}
        />
      </div>
    </div>
  );
};

export default CustomTable;

CustomTable.propTypes = {
  columns: PropTypes.any.isRequired,
  data: PropTypes.any.isRequired,
  sx: PropTypes.any,
  otherProps: PropTypes.any,
  filters: PropTypes.any,
  isLoading: PropTypes.bool,
  searchable: PropTypes.bool,
  searchFields: PropTypes.arrayOf(PropTypes.string),
};
