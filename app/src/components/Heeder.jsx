import Link from "next/link";
import style from "../../page.module.css";
import mainLink from "../json/mainLink.json";
import { usePathname } from "next/navigation";

function Heeder() {
  const loopMainLink = () => {
    return Object.values(mainLink).map((el, index) => {
      const myPathName = usePathname();
      const isActive = myPathName.split("/")[1] === el[1].slice(1, el[1].length);
      return (
        <li key={index} className={isActive ? style.active : ''}>
          <Link href={el[1]}>{el[0]}</Link>
        </li>
      );
    });
  };
  return (
    <div className={style.heeder}>
      <div className="links">
        <ul>
          {loopMainLink()}
        </ul>
      </div>
    </div>
  );
}

export default Heeder;
