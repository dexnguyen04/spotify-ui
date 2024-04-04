import classNames from "classnames/bind";
import styles from "./LeftSidebar.module.scss";
import { Menu, MenuItem } from "./Menu";
import config from "~/config";

const cx = classNames.bind(styles);

function LeftSidebar() {
    return (
        <div className={cx("LeftSidebar")}>
            <Menu>
                <MenuItem title="Home" icon={null} to={config.routes.home} />
                <MenuItem
                    title="Search"
                    icon={null}
                    to={config.routes.search}
                />
            </Menu>
        </div>
    );
}

export default LeftSidebar;
