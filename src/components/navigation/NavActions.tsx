import { navIcons } from "@/constants";

export default function NavActions() {
    return (
        <div className="flex gap-5">
            {navIcons.map((icon, idx) => {
                return (
                    <div
                        className="border-primary-500 bg-primary-250 hover:bg-primary-150 flex size-[43px] cursor-pointer items-center justify-center rounded-full border transition-colors duration-300"
                        key={idx}
                    >
                        <img
                            src={icon.imgPath}
                            alt={icon.altText}
                            className="size-[19px]"
                        />
                    </div>
                );
            })}
        </div>
    );
}
