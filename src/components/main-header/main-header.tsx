import Link from "next/link";
import { FC } from "react";
import classes from "../../../common-utils/styles.module.css";

const MainHeader: FC<any> = () => {
  return (
    <header className={classes.header}>
      <div className={classes.headerIcon}>
        <Link href="/">NextEvents</Link>
      </div>
      <nav>
        <ul className="flex flex-row gap-5">
          <li>
            <Link className={classes.headerLink} href="/events">Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainHeader;
