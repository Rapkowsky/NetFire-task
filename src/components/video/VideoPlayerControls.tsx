import { formatTime } from "@/lib/utils";
import { Button } from "../ui/button";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { TbPlayerStopFilled } from "react-icons/tb";
import { useRef } from "react";

interface VideoPlayerControlsProps {
    videoProgress: number;
    isPaused: boolean;
    currentVideoTime: number;
    onPlayPause: () => void;
    onProgressChange: (progressRatio: number) => void;
}

function VideoPlayerControls({
    videoProgress,
    isPaused,
    currentVideoTime,
    onPlayPause,
    onProgressChange,
}: VideoPlayerControlsProps) {
    const progressBarRef = useRef<HTMLDivElement>(null);

    // Function handling click on the progress bar
    const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (progressBarRef.current) {
            const progressBarRect =
                progressBarRef.current.getBoundingClientRect();
            const clickPosition = e.clientX - progressBarRect.left;
            const progressRatio = clickPosition / progressBarRect.width;
            const clampedRatio = Math.max(0, Math.min(1, progressRatio));
            onProgressChange(clampedRatio);
        }
    };
    return (
        <div className="rounded-medium z-10 flex items-center gap-7 bg-[#0302024D] px-7 py-[22.5px]">
            <Button variant="player" onClick={onPlayPause}>
                {isPaused ? (
                    <TbPlayerPlayFilled className="text-tertiary-100" />
                ) : (
                    <TbPlayerStopFilled className="text-tertiary-100" />
                )}
            </Button>
            <div
                ref={progressBarRef}
                className="relative h-2 w-[1112px] cursor-pointer"
                onClick={handleProgressBarClick}
            >
                <div className="bg-primary-750 absolute top-0 left-0 h-full w-full rounded-full" />
                <div
                    className="bg-tertiary-100 absolute top-0 left-0 h-full rounded-l-full"
                    style={{
                        width: `${videoProgress * 100}%`,
                    }}
                ></div>
            </div>
            <p className="text-primary-300 font-bold">
                {currentVideoTime ? formatTime(currentVideoTime) : "00:00"}
            </p>
        </div>
    );
}

export default VideoPlayerControls;
