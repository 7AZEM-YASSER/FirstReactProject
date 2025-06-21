import styles from "../../page.module.css";
import sections from "../json/sections.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faTableCellsLarge,
  faWarehouse,
  faListCheck,
  faGear,
  faLandmark,
  faChevronLeft,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

function Sitbar() {
  const [sitBarState, setSitBarState] = useState(false);

  const [searchInput, setSearchInput] = useState("");

  const iconMap = {
    faTableCellsLarge: faTableCellsLarge,
    faWarehouse: faWarehouse,
    faListCheck: faListCheck,
    faGear: faGear,
    faLandmark: faLandmark,
  };

  const loopSections = () => {
    return Object.values(sections).map((el, index) => {
      const myPathname = usePathname();
      const iconNameFromData = el[2];
      const iconComponent = iconMap[iconNameFromData];
      const isActive =
        myPathname.split("/")[1] === el[1].slice(1, el[1].length);

      if (!iconComponent) {
        console.warn(
          `Warning: Icon "${iconNameFromData}" not found in iconMap. Make sure it's imported and added.`
        );
        return null;
      }

      return (
        <li key={index} className={isActive ? styles.active : null}>
          <Link
            style={
              sitBarState == false
                ? { justifyContent: "center" }
                : { justifyContent: "flex-start" }
            }
            href={el[1]}
          >
            <FontAwesomeIcon icon={iconComponent} />
            {sitBarState && <p className={styles.textLink}>{el[0]}</p>}
          </Link>
        </li>
      );
    });
  };

  function toggleSitBar() {
    if (sitBarState == true) {
      setSitBarState(false);
    } else {
      setSitBarState(true);
    }
  }

  return (
    <div
      className={styles.mainContent}
      style={sitBarState == false ? { width: 90 + "px" } : { width: 310 + "px" }}
    >
      <div className={styles.sitbar}>
        <div className={styles.container}>
          <div className={styles.buttons}>
            <div className={styles.logo}>
              <div
                onClick={() => !sitBarState && setSitBarState(true)}
                className={styles.image}
              >
                <img src="../favicon.ico" />
              </div>
              {sitBarState && (
                <div onClick={toggleSitBar} className={styles.drobDown}>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </div>
              )}
            </div>
            <div className={styles.search}>
              <div className={styles.icon}></div>
              <FontAwesomeIcon
                onClick={() => !sitBarState && setSitBarState(true)}
                className={styles.searchIcon}
                icon={faMagnifyingGlass}
              />
              {sitBarState && (
                <form action="" method="post">
                  <input
                    onChange={(e) => setSearchInput(e.target.value)}
                    value={searchInput}
                    type="search"
                    name="search"
                    placeholder="Search"
                  />
                </form>
              )}
            </div>
          </div>
          <div className={styles.sections}>
            <ul>{loopSections()}</ul>
          </div>
          <div
            style={
              sitBarState == false
                ? { justifyContent: "center" }
                : { justifyContent: "space-around" }
            }
            className={styles.profile}
          >
            <div className={styles.image}>
              <Link href="/profile">
                <img src="../favicon.ico" alt="" />
              </Link>
            </div>
            {sitBarState && (
              <div className={styles.info}>
                <p className={styles.name}>
                  <Link href="/profile">7AZEM_YASSER13</Link>
                </p>
                <p className={styles.email}>
                  <Link href="/profile">hazemyassee5050@gmail.com</Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sitbar;
