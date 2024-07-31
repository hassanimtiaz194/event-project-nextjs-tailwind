"use client";

import { FC, useState } from "react";
import { months, years } from "../../../common-utils/allConst.constants";
import { ISelect } from "../../../common-utils/event.types";
import classes from "../../../common-utils/styles.module.css";
import Button from "../ui/button";

const EventSearch: FC<any> = (props) => {
  const [state, setState] = useState({
    month: "1",
    year: "2021",
  });

  const submitHandler = (e: any) => {
    e.preventDefault();
    props.findEventsHandler(state.year, state.month);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select
            id="year"
            onChange={(e) => setState({ ...state, year: e.target.value })}
          >
            {years.map((year: ISelect) => (
              <option value={year?.value}>{year?.label}</option>
            ))}
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select
            id="month"
            onChange={(e) => setState({ ...state, month: e.target.value })}
          >
            {months.map((month: ISelect) => (
              <option value={month?.value}>{month?.label}</option>
            ))}
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
};

export default EventSearch;
