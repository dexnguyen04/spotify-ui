import classNames from "classnames/bind";
import styles from "./NowPlayingBar.module.scss";

const cx = classNames.bind(styles);

function NowPlayingBar() {
    return <div className={cx("NowPlayingBar")}>Now Playing Bar</div>;
}

export default NowPlayingBar;
