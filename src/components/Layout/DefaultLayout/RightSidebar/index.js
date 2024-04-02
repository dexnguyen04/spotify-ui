import classNames from "classnames/bind";
import styles from "./RightSidebar.module.scss";

const cx = classNames.bind(styles);

function RightSidebar({ children }) {
    return <div className={cx("RightSidebar")}>{children} Right Sidebar</div>;
}

export default RightSidebar;
