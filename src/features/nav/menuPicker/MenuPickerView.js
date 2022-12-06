import * as React from "react";
import styles from "./menuPickerView.module.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import HomeIcon from "@mui/icons-material/Home";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch, useSelector } from "react-redux";
import { updateCategory } from "../../filter/filterSlice";
import { fetchHomePosts } from "./menuPickerSlice";
import { Link } from "react-router-dom";
import { fetchPopularPosts } from "./menuPickerPopularSlice";
import filterStyles from "../../filter/filterView.module.css";

export default function MenuPickerView() {
  const dispatch = useDispatch();
  const postCategory = useSelector((state) => state.filter.postCategory);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleIsActiveHomeClick = (e) => {
    dispatch(updateCategory(".json"));
    dispatch(fetchHomePosts());
    handleClose();
  };

  const handleIsActivePopularClick = (e) => {
    dispatch(updateCategory("r/popular.json"));
    dispatch(fetchPopularPosts());
    handleClose();
  };

  return (
    <div>
      <div
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className={styles.menuButton}
      >
        {postCategory === ".json" && (
          <>
            <HomeIcon sx={{ marginRight: 1, color: "gray" }} />
            <div className={styles.activeMenuButtonTitle}>Home</div>
          </>
        )}
        {postCategory !== ".json" && (
          <>
            <AutoGraphIcon sx={{ marginRight: 1, color: "gray" }} />
            <div className={styles.activeMenuButtonTitle}>Popular</div>
          </>
        )}
        <KeyboardArrowDownIcon sx={{ marginLeft: 1, color: "gray" }} />
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link
          to="/"
          className={filterStyles.textLink}
          style={{ color: "#808080" }}
        >
          <MenuItem onClick={() => handleIsActiveHomeClick()}>
            <HomeIcon sx={{ marginRight: 1 }} />
            Home
          </MenuItem>
        </Link>
        <Link
          to="r/popular"
          className={filterStyles.textLink}
          style={{ color: "#808080" }}
        >
          <MenuItem onClick={() => handleIsActivePopularClick()}>
            <AutoGraphIcon sx={{ marginRight: 1 }} />
            Popular
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
