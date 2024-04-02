import styles from "./MainView.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function MainView({ children }) {
    return <div className={cx("MainView")}>{children}</div>;
}

export default MainView;
