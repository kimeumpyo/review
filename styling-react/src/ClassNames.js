import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./ClassNames.module.css";
// import styles from './ClassNames.module.scss';

const cn = classNames.bind(styles);

const ClassNames = () => {
  const [open, setOpen] = useState(false);

  const clickHandler = () => {
    setOpen(!open);
  };

  return (
    <div>
      {/* <div className={classNames('box', { on : open })}>box</div> */}
      {/* <div className={cn('box', { on : open })}>box</div> */}
      <div className={cn("box", { on: open })}>box</div>
      <button type="button" onClick={clickHandler}>
        Toggle
      </button>
    </div>
  );
};

export default ClassNames;
