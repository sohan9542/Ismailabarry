import React, { useState, useRef, useContext } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RapperContent } from "../App";

const VideoComponent = ({ item }) => {
  const {isAuthenticated} = useContext(RapperContent)
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleVideoHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      className="relative w-full h-60 rounded-xl  overflow-hidden"
      onMouseEnter={handleVideoHover}
      onMouseLeave={handleVideoHover}
    >
      {/* <video
        ref={videoRef}
        src={`${item?.videoUrl}`}
        className="w-full h-full object-cover  rounded-lg"
        controls={false}
      >
        <source type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      <img src={item?.thumbnile} className="w-full h-full " alt="" />

      {/* <iframe
        src={`${item?.videoUrl}`}
        width="100%"
        height="100%"
        
        allowFullScreen={false}
        style={{ border: "none" }}
      /> */}

      <Link
      to={isAuthenticated ? `/video/${item?.id}`  : "/login"}
     
        className="absolute top-0 left-0 w-full h-full z-50"
      ></Link>

      {item?.progress && (
        <div className="absolute bottom-0 left-0 w-full h-2 ">
          <div
            className="h-full bg-pr"
            style={{ width: `${item?.progress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default VideoComponent;
