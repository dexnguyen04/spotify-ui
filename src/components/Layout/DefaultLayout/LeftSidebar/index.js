import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./LeftSidebar.module.scss";

const cx = classNames.bind(styles);

function LeftSidebar() {
    return (
        <div className={cx("LeftSidebar")}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/search">Search</NavLink>
        </div>
    );
}

export default LeftSidebar;
