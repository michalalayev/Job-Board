import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
//import DeleteIcon from "@mui/icons-material/Delete";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
//import CancelIcon from "@mui/icons-material/Cancel";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import rows from "./tableItems";

function ascendingComparator(a, b, orderBy) {
  //a,b are tableItems (rows), orderBy is the property name (column name)
  if (a[orderBy] < b[orderBy]) {
    return -1;
  }
  if (a[orderBy] > b[orderBy]) {
    return 1;
  }
  return 0;
}
// ordering function for Date objects:
// Date.parse(a[orderBy]) - Date.parse(b[orderBy]);

function getComparator(order, orderBy) {
  return order === "asc"
    ? (a, b) => ascendingComparator(a, b, orderBy)
    : (a, b) => -ascendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) {
//       return order;
//     }
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

function stableSort(array, comparator) {
  return array.slice().sort(comparator);
}

const headCells = [
  {
    id: "position",
    numeric: false,
    disablePadding: false,
    label: "Position",
  },
  {
    id: "company",
    numeric: false,
    disablePadding: false,
    label: "Company",
  },
  {
    id: "location",
    numeric: false,
    disablePadding: false,
    label: "Location",
  },
  {
    id: "createdDate",
    numeric: false,
    disablePadding: false,
    label: "Created Date",
  },
  {
    id: "lastModified",
    numeric: false,
    disablePadding: false,
    label: "Last Modified",
  },
  {
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "actions",
    numeric: false,
    disablePadding: false,
    label: "Actions",
  },
];

const DEFAULT_ORDER = "desc";
const DEFAULT_ORDER_BY = "createdDate";
const DEFAULT_ROWS_PER_PAGE = 10;

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;

  function createSortHandler(newOrderBy) {
    return (event) => onRequestSort(event, newOrderBy);
  }

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          {/* <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all",
            }}
          /> */}
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"} //TO DO: if no numeric - change
            padding={headCell.disablePadding ? "none" : "normal"} //TO DO: if not used - remove
            sortDirection={orderBy === headCell.id ? order : false} // aria-label
            sx={{ fontWeight: "bold" }}
          >
            <TableSortLabel
              active={rows.length > 0 && orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
};

function EnhancedTableToolbar({ numSelected, rowCount, onSelectAllClick }) {
  return (
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: numSelected === 0 && "space-between",
        pl: { xs: 0.5, sm: 0.5 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      <Tooltip title="Select all">
        <Checkbox
          color="primary"
          indeterminate={numSelected > 0 && numSelected < rowCount}
          checked={rowCount > 0 && numSelected === rowCount}
          onChange={onSelectAllClick}
          inputProps={{
            "aria-label": "select all",
          }}
        />
      </Tooltip>
      {/* {numSelected > 0 ? (
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Title (change this row later)
        </Typography>
      )} */}

      {numSelected > 0 && (
        <>
          <Typography
            //sx={{ flex: "1 1 100%" }}
            sx={{ margin: "0 10px" }}
            color="inherit"
            variant="subtitle1"
            component="div"
            align="left"
          >
            {numSelected} selected
          </Typography>
          <Tooltip title="Delete">
            <IconButton>
              <DeleteOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Terminate">
            <IconButton>
              <CancelOutlinedIcon />
            </IconButton>
          </Tooltip>
        </>
      )}

      {numSelected === 0 && (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  rowCount: PropTypes.number.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
};

function MainTable() {
  const [order, setOrder] = React.useState(DEFAULT_ORDER);
  const [orderBy, setOrderBy] = React.useState(DEFAULT_ORDER_BY);
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [visibleRows, setVisibleRows] = React.useState(null);
  const [rowsPerPage, setRowsPerPage] = React.useState(DEFAULT_ROWS_PER_PAGE);
  const [paddingHeight, setPaddingHeight] = React.useState(0);

  React.useEffect(() => {
    let rowsOnMount = stableSort(
      rows,
      getComparator(DEFAULT_ORDER, DEFAULT_ORDER_BY)
    );
    rowsOnMount = rowsOnMount.slice(0, DEFAULT_ROWS_PER_PAGE);
    setVisibleRows(rowsOnMount);

    const numEmptyRows = Math.max(0, DEFAULT_ROWS_PER_PAGE - rows.length);
    const newPaddingHeight = (dense ? 33 : 53) * numEmptyRows;
    setPaddingHeight(newPaddingHeight);
  }, []);

  const handleRequestSort = React.useCallback(
    (event, newOrderBy) => {
      // find out what is the current sorting state of the column "newOrderBy":
      const isAsc = orderBy === newOrderBy && order === "asc";
      const toggledOrder = isAsc ? "desc" : "asc";
      setOrder(toggledOrder);
      setOrderBy(newOrderBy);
      // sort rows by the column "newOrderBy" and the given order (direction):
      const sortedRows = stableSort(
        rows,
        getComparator(toggledOrder, newOrderBy)
      );
      // show only 'rowsPerPage' pages
      const updatedRows = sortedRows.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      );
      setVisibleRows(updatedRows);
    },
    [order, orderBy, page, rowsPerPage]
  );

  function handleSelectAllClick(event) {
    let newSelected = [];
    if (event.target.checked) {
      newSelected = rows.map((row) => row.id);
    }
    setSelected(newSelected);
    //console.log(newSelected);
  }

  function handleClick(event, id) {
    const indexInSelected = selected.indexOf(id);
    let newSelected = [];

    if (indexInSelected === -1) {
      // not in selected
      newSelected = newSelected.concat(selected, id);
    } else {
      newSelected = newSelected.concat(
        selected.slice(0, indexInSelected),
        selected.slice(indexInSelected + 1)
      );
    }
    // } else if (selectedIndex === 0) {
    //   newSelected = newSelected.concat(selected.slice(1));
    // } else if (selectedIndex === selected.length - 1) {
    //   newSelected = newSelected.concat(selected.slice(0, -1));
    // } else if (selectedIndex > 0) {
    //   newSelected = newSelected.concat(
    //     selected.slice(0, selectedIndex),
    //     selected.slice(selectedIndex + 1)
    //   );
    // }
    setSelected(newSelected);
    //console.log(newSelected);
  }

  // totalRowsShowed = number of rows from the beginning of the table until this page included
  function updatePaddingHeight(totalRowsShowed, currentDense) {
    const numEmptyRows = Math.max(0, totalRowsShowed - rows.length);
    const newPaddingHeight = (currentDense ? 33 : 53) * numEmptyRows;
    setPaddingHeight(newPaddingHeight);
  }

  const handleChangePage = React.useCallback(
    (event, newPage) => {
      setPage(newPage);

      const sortedRows = stableSort(rows, getComparator(order, orderBy));
      const updatedRows = sortedRows.slice(
        newPage * rowsPerPage,
        newPage * rowsPerPage + rowsPerPage
      );

      setVisibleRows(updatedRows);

      // Avoid a layout jump when reaching the last page with empty rows.
      updatePaddingHeight((1 + newPage) * rowsPerPage, dense);

      // const numEmptyRows =
      //   newPage > 0
      //     ? Math.max(0, (1 + newPage) * rowsPerPage - rows.length)
      //     : 0;

      // const newPaddingHeight = (dense ? 33 : 53) * numEmptyRows;
      // setPaddingHeight(newPaddingHeight);
    },
    [order, orderBy, dense, rowsPerPage]
  );

  const handleChangeRowsPerPage = React.useCallback(
    (event) => {
      const updatedRowsPerPage = parseInt(event.target.value, 10);
      setRowsPerPage(updatedRowsPerPage);

      setPage(0);

      const sortedRows = stableSort(rows, getComparator(order, orderBy));
      const updatedRows = sortedRows.slice(0, updatedRowsPerPage);
      setVisibleRows(updatedRows);

      // Avoid a layout jump when there are empty rows on the first page.
      updatePaddingHeight(updatedRowsPerPage, dense);

      // const numEmptyRows = Math.max(0, updatedRowsPerPage - rows.length);
      // const newPaddingHeight = (dense ? 33 : 53) * numEmptyRows;
      // setPaddingHeight(newPaddingHeight);

      // There is no layout jump to handle on the first page.
      //setPaddingHeight(0);
    },
    [order, orderBy, dense]
  );

  const handleChangeDense = (event) => {
    const newDense = event.target.checked;
    setDense(newDense);
    // const numEmptyRows = Math.max(0, (1 + page) * rowsPerPage - rows.length);
    // const newPaddingHeight = (newDense ? 33 : 53) * numEmptyRows;
    // setPaddingHeight(newPaddingHeight);
    updatePaddingHeight((1 + page) * rowsPerPage, newDense);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper
        elevation={6}
        sx={{ width: "100%", mb: 2, borderRadius: "12px" }} //p: "0 10px",
      >
        <EnhancedTableToolbar
          numSelected={selected.length}
          rowCount={rows.length}
          onSelectAllClick={handleSelectAllClick}
        />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows
                ? visibleRows.map((row, index) => {
                  const isItemSelected = selected.indexOf(row.id) !== -1;
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected} // for shading
                      sx={{ cursor: "pointer" }}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="normal"
                      >
                        {row.position}
                      </TableCell>
                      <TableCell align="left">{row.company}</TableCell>
                      <TableCell align="left">{row.location}</TableCell>
                      <TableCell align="left">
                        {row.createdDate.toLocaleString()}
                      </TableCell>
                      <TableCell align="left">
                        {row.lastModified.toLocaleString()}
                      </TableCell>
                      <TableCell align="left">{row.status}</TableCell>
                      <TableCell align="left">{row.actions}</TableCell>
                    </TableRow>
                  );
                })
                : null}
              {paddingHeight > 0 && (
                <TableRow
                  style={{
                    height: paddingHeight,
                  }}
                >
                  <TableCell colSpan={headCells.length + 1} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense table"
      />
    </Box>
  );
}

export default MainTable;
