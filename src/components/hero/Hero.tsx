import { Button } from "../ui/button";
import VideoPlayer from "../video/VideoPlayer";

export default function Hero() {
    return (
        <>
            <section className="relative mx-auto max-w-[1920px] overflow-hidden">
                <div className="absolute inset-0 bg-[#00000066]"></div>
                <div className="wrapper-primary transform-center absolute top-[35%] flex flex-col items-start gap-8">
                    <Button className="border-primary-650 !rounded-large min-h-[44px] cursor-pointer bg-[#a19885] text-[12px] text-white">
                        LOREM IPSUM
                    </Button>
                    <div>
                        <h1 className="primary-gradient-text-100 h1-semibold w-fit">
                            Lorem Ipsum Dolor Sit amet
                        </h1>
                        <h1 className="h1-semibold text-primary-50 w-fit">
                            Donec cursus ligula diam, nec congue <br /> augue
                            ultrices nec.
                        </h1>
                    </div>
                </div>
                <VideoPlayer />
            </section>

            <section className="wrapper-primary flex flex-col items-center gap-8 py-[50px]">
                <Button className="!rounded-large border-primary-600 bg-primary-100 min-h-[53px] text-[12px]">
                    EXAMPLE SECTION
                </Button>
                <h2 className="h2-medium text-center">
                    Lorem{" "}
                    <span className="primary-gradient-text-100 font-semibold">
                        ipsum dolor sit amet consectetur adipiscing elit etiam
                        molestie ex vel
                    </span>{" "}
                    massa lacinia ultricies. Suspendisse lobortis vehicula eros,
                    sed sodales eros mollis eget. Morbi vitae libero in nunc
                    sodales.
                </h2>

                <Button variant="link">SEE MORE</Button>
            </section>
        </>
    );
}
