import React, { useState, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const VideoComponent = ({ item }) => {
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
    <Link to={"/video/"+ item?.id} className="relative w-full h-52 rounded-xl overflow-hidden" onMouseEnter={handleVideoHover} onMouseLeave={handleVideoHover}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover  rounded-lg"
        controls={false}
      
      >
        <source src={`${item?.videoUrl}#t=5`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {(isHovered) && (
        <button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl focus:outline-none"
      
        >
          <FaPlay />
        </button>
      )}

{item?.progress &&  <div className="absolute bottom-0 left-0 w-full h-2 ">
        <div
         
          className="h-full bg-pr"
          style={{ width: `${item?.progress}%` }}
        ></div>
      </div>}

    </Link>
  );
};

export default VideoComponent;
