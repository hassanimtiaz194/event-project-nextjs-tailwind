import Link from "next/link";
import { FC } from "react";
import { IButton } from "../../../common-utils/event.types";
import classes from "../../../common-utils/styles.module.css";
import ArrowRightIcon from "../icons/arrow-right-icon";

const Button: FC<IButton> = ({ link = "", children, onClick }) => {
  if (link) {
    return (
      <Link href={link} className={`${classes.btn} flex flex-row gap-2 justify-center`}>
        {children}
        <div className={classes.defaultIconSize}>
          <ArrowRightIcon />
        </div>
      </Link>
    );
  }

  return <button className={`${classes.btn} flex flex-row gap-2 justify-center`} onClick={onClick}>{children}</button>
};

export default Button;
