import Logo from "../Logo";
import NavActions from "./NavActions";
import NavMenu from "./NavMenu";

export default function Navbar() {
    return (
        <nav className="wrapper-primary relative flex items-center justify-between py-[29px]">
            <NavMenu />
            <NavActions />
            <div className="transform-center absolute">
                <Logo />
            </div>
        </nav>
    );
}
