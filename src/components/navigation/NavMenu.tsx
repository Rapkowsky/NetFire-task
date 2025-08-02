import { navLinks } from "@/constants";
import { Button } from "../ui/button";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function NavMenu() {
    const { pathname } = useLocation();

    return (
        <div className="flex gap-4">
            {navLinks.map((link) => {
                //  Checks if navigation link is active based on current URL path.
                //  Active if pathname includes route (for routes > 1 char) or exactly matches route.
                const isActive =
                    (pathname.includes(link.route) && link.route.length > 1) ||
                    pathname === link.route;

                return (
                    <Button
                        key={link.label}
                        className={cn(
                            isActive
                                ? "bg-primary-150 text-primary-800"
                                : "",
                        )}
                        asChild
                    >
                        <Link to={link.route}>{link.label}</Link>
                    </Button>
                );
            })}
        </div>
    );
}
