import VideoBg from "@/assets/videos/videoBg.mp4";
import { useEffect, useRef, useState } from "react";
import VideoPlayerControls from "./VideoPlayerControls";

export default function VideoPlayer() {
    const [isPaused, setIsPaused] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoProgress, setVideoProgress] = useState<number>(0);
    const [currentVideoTime, setCurrentVideoTime] = useState<number>(0);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Update progress and current time during playback
        const handleTimeUpdate = () => {
            if (video.duration) {
                setVideoProgress(video.currentTime / video.duration);
                setCurrentVideoTime(video.currentTime);
            }
        };

        // Add event listeners to the video
        video.addEventListener("timeupdate", handleTimeUpdate);

        return () => {
            // Remove event listener when component unmounts
            video.removeEventListener("timeupdate", handleTimeUpdate);
        };
    }, []);

    const togglePlayPause = () => {
        const video = videoRef.current;

        if (video) {
            setIsPaused(!video.paused);

            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        }
    };

    // Function to set a specific moment in the video
    const setVideoTime = (progressRatio: number) => {
        const video = videoRef.current;
        if (video && video.duration) {
            const newTime = progressRatio * video.duration;
            video.currentTime = newTime;
            setVideoProgress(progressRatio);
            setCurrentVideoTime(newTime);
        }
    };

    return (
        <>
            <div className="wrapper-primary transform-center absolute bottom-48 z-10">
                <VideoPlayerControls
                    videoProgress={videoProgress}
                    isPaused={isPaused}
                    onPlayPause={togglePlayPause}
                    currentVideoTime={currentVideoTime}
                    onProgressChange={setVideoTime}
                />
            </div>
            <div className="flex h-[909px] w-full">
                <video
                    ref={videoRef}
                    className="min-h-full w-full object-cover object-bottom"
                    loop
                    muted
                    autoPlay
                >
                    <source src={VideoBg} />
                </video>
            </div>
        </>
    );
}
