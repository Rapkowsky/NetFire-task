import Separator from "../Separator";

interface PromoBannerProps {
    description?: string;
    code?: string;
}

export default function PromoBanner({ description, code }: PromoBannerProps) {
    const displayDescription =
        description?.trim() || "New customers get 15% off! use code";
    const displayCode = code?.trim() || "welcome15";

    return (
        <>
            <div className="bg-primary-250 py-6">
                <p className="font-inter base-primary text-center uppercase">
                    {displayDescription}{" "}
                    <span className="text-secondary-100">{displayCode}</span>
                </p>
            </div>
            <Separator />
        </>
    );
}
