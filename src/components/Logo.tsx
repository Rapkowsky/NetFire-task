import { Link } from "react-router-dom";
import AppLogo from "../assets/Logo.svg";

export default function Logo() {
    return (
        <Link to="/">
            <img src={AppLogo} alt="Application logo" className="size-[65px]" />
        </Link>
    );
}
