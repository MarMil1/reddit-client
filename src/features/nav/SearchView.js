import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./searchView.module.css";
import { useSelector } from "react-redux";

export const SearchView = (props) => {
  const posts = useSelector((state) => state.post.posts);

  /**
   * It sets the search value to an empty string and the suggestions to an empty array
   */
  const handleEraseSearchBar = () => {
    props.setSearchValue("");
    props.setSuggestions([]);
  };

  /**
   * It takes the input from the search bar and filters through the posts array to find any matches
   * @param input - the value of the input field
   */
  const onChangeHandler = (input) => {
    let matches = [];
    if (input.length > 0) {
      matches = posts.filter((post) => {
        const matchSearch = post.title
          .toLowerCase()
          .match(input.toLowerCase(), "gi");
        if (matchSearch) {
          return matchSearch;
        }
        return "";
      });
    }
    props.setSuggestions(matches);
    props.setSearchValue(input);
  };

  return (
    <>
      <div
        className={styles.searchBarContainer}
        style={{
          borderBottomLeftRadius: props.searchValue.length > 0 ? "0px" : "20px",
          borderBottomRightRadius:
            props.searchValue.length > 0 ? "0px" : "20px",
        }}
      >
        <SearchIcon
          style={{
            color: "gray",
            marginLeft: "5px",
          }}
        />
        <input
          placeholder="Search…"
          value={props.searchValue}
          onChange={(e) => onChangeHandler(e.target.value)}
          className={styles.searchInput}
          style={{
            borderBottomLeftRadius:
              props.searchValue.length > 0 ? "0px" : "20px",
            borderBottomRightRadius:
              props.searchValue.length > 0 ? "0px" : "20px",
          }}
        />
        {props.searchValue.length > 0 && (
          <CloseIcon
            className={styles.deleteSearchbarContentbutton}
            onClick={handleEraseSearchBar}
          />
        )}
      </div>
    </>
  );
};
