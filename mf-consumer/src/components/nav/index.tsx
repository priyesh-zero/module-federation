import { FC, PropsWithChildren } from "react";
import "./Nav.scss";

const Nav: FC<PropsWithChildren<{ navTitle?: string }>> = ({
    children,
    navTitle = "Consumer App",
}) => {
    return (
        <nav>
            <div>
                <a href="#">{navTitle}</a>
            </div>
            <div className="right-div">{children}</div>
        </nav>
    );
};

export default Nav;
