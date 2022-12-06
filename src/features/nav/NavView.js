import React, { useState } from "react";
import MenuPickerView from "./menuPicker/MenuPickerView";
import styles from "./navView.module.css";
import { SearchView } from "./SearchView";
import SearchIcon from "@mui/icons-material/Search";

export const NavView = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  /**
   * It takes the title of the suggested post, finds the post with that title, and scrolls to it
   * @param e - the element that was clicked on
   */
  const scrollToResult = (e) => {
    const allPosts = document.querySelector("#all-posts");
    let titleId = "";
    allPosts.childNodes.forEach((child) => {
      const title = child.childNodes[1].childNodes[1];
      if (e.innerHTML === title.innerHTML) {
        titleId = title.id;
      }
      return titleId;
    });
    const suggestedPost = document.getElementById(titleId);
    suggestedPost.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    /* Adding a class to the post that was clicked on, and then removing it after 3 seconds. */
    suggestedPost.parentNode.parentNode.classList.add(styles.selectedPost);
    setTimeout(function () {
      suggestedPost.parentNode.parentNode.classList.remove(styles.selectedPost);
    }, 3000);
    setSuggestions([]);
    setSearchValue("");
  };

  return (
    <div className={styles.navContainer}>
      <div className={styles.navSubContainer}>
        <div className={styles.navLogoContainer}>
          <img
            src="https://www.redditstatic.com/avatars/avatar_default_02_FF4500.png"
            alt="logo"
            className={styles.navLogo}
          />
          <div className={styles.navLogoTitle}>Reddit-Client</div>
          <div className={styles.navMenuContainer}>
            <MenuPickerView />
          </div>
        </div>
        <div className={styles.navMenuSearch}>
          <SearchView
            suggestions={suggestions}
            setSuggestions={setSuggestions}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
      </div>
      {suggestions.length <= 10 &&
        suggestions.map((suggestion, i) => (
          <div
            key={i}
            className={styles.suggestionsContainer}
            onClick={(e) => scrollToResult(e.target)}
          >
            <div>{suggestion.title}</div>
            {/* <Marker
              mark={searchValue}
              options={{ className: styles.suggestionBox }}
            >
              {suggestion.title}
            </Marker> */}
          </div>
        ))}
      {searchValue.length >= 2 && suggestions.length < 1 && (
        <div className={styles.suggestionsContainer}>
          <div style={{ padding: "10px" }}> No Matches Found</div>
        </div>
      )}
      {searchValue.length > 0 && (
        <div className={styles.searchForBox}>
          <SearchIcon
            style={{
              color: "gray",
              margin: "10px",
            }}
          />
          <div>Searching for "{searchValue}"</div>
        </div>
      )}
    </div>
  );
};
