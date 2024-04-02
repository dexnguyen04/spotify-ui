import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import NowPlayingBar from "./NowPlayingBar";
import MainView from "./MainView";
import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx("wrapper")}>
            <LeftSidebar />
            <MainView children={children} />
            <RightSidebar />
            <NowPlayingBar />
        </div>
    );
}

export default DefaultLayout;
