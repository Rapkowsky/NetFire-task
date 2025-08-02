import ShoppingCart from "@/assets/navIcons/ShoppingCart.svg";
import User from "@/assets/navIcons/user.svg";
import Magnifier from "@/assets/navIcons/Magnifier.svg";

export const navLinks = [
    {
        label: "Home",
        route: "/",
    },
    {
        label: "About",
        route: "/about",
    },
    {
        label: "Products",
        route: "/products",
    },
];
export const navIcons = [
    {
        imgPath: ShoppingCart,
        altText: "Shopping Cart icon",
    },
    {
        imgPath: User,
        altText: "User icon",
    },
    {
        imgPath: Magnifier,
        altText: "Magnifier icon",
    },
];
