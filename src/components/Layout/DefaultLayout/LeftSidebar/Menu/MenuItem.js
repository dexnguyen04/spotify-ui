import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon }) {
    return (
        <li className={cx("menu-li-item")}>
            <NavLink to={to} className={cx("menu-item")}>
                {icon}
                <span className={cx("menu-title")}>{title}</span>
            </NavLink>
        </li>
    );
}

export default MenuItem;
