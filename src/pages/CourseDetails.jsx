import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { videos } from "../assets/demo";
import { Swiper, SwiperSlide } from "swiper/react";
import VideoComponent from "../components/VideoComponent";
import SwiperCore, { Autoplay, Pagination } from "swiper/core";
import Discover from "../components/Discover";

const CourseDetails = () => {
  const { id } = useParams();
  SwiperCore.use([Autoplay, Pagination]);
  const [videoObj, setVideoObj] = useState(null);

  useEffect(() => {
    let video = videos.filter((item) => item?.id === parseInt(id));
    setVideoObj(video[0]);
  }, [id]);
  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  };
  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#451019]">
      <Discover/>
      <div className="max-w-7xl px-2 lg:px-0 mx-auto">
        <BigScreenVideo videoObj={videoObj} />
        <div className="py-4">
          <p className="text-white">#1 Math video</p>
          <h1 className="text-2xl font-semibold text-white">
            {videoObj?.title}
          </h1>
          <p className=" text-white text-sm pt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            accusantium, nobis quidem quae ipsa officia a blanditiis ab eveniet?
            Veniam omnis dolorem labore eos ad laudantium maiores quis,
            accusamus totam similique tempora perferendis incidunt in fugit,
            tenetur nihil nobis itaque hic! Odio dolorem, aliquid tenetur
            maiores doloremque quia cupiditate. Fugiat.
          </p>
        </div>

        <div className="flex items-center gap-1 mt-10">
          <p className="text-gray-50">New {">"} </p>
          <h1 className="py-2 text-2xl font-bold text-white">Math Videos</h1>
        </div>
        <Swiper
        breakpoints={breakpoints}
          // autoplay={{ delay: 1000, disableOnInteraction: false }}
       
          slidesPerView={4}
          spaceBetween={10}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {videos.map((item, ind) => (
            <SwiperSlide key={ind}>
              <VideoComponent item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-20 py-20 border-t border-t-hvr">
          <h1 className="text-center text-4xl  pb-32 font-bold text-white">
            My Progress⭐
          </h1>
          <div className=" flex flex-col lg:flex-row gap-10 lg:gap-32 mt-10 items-center justify-center">
            <div>
              <CircularProgress progress={50} />
              <p className="text-white text-center mt-4">
                You completed 17 out of 25 videos!
              </p>
            </div>
            <div>
              <CircularProgress progress={80} />
              <p className="text-white text-center mt-4">
                You completed 10 out of 20 quizzes!
              </p>
            </div>
          </div>
          <h1 className="text-center text-4xl pt-32 font-bold text-white ">
            You're doing great. Keep going!🎉
          </h1>
        </div>
        <div className="mt-20 w-full border-t border-t-hvr">
          <h1 className="text-center text-4xl pt-20 pb-10 font-bold text-white">
            Multiple Choice Questions🚀
          </h1>
          <ExamSection />
        </div>
        <div className="mt-20 w-full border-t border-t-hvr">
          <h1 className="text-center text-4xl pt-20 pb-10 font-bold text-white">
            ASK A QUESTION❓
          </h1>
          <AskQuestionSection />
        </div>
      </div>
    </div>
  );
};

const BigScreenVideo = ({ videoObj }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);
  const progressRef = useRef(null);

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

  const updateProgressBar = () => {
    const video = videoRef.current;
    const progress = (video.currentTime / video.duration) * 100;
    progressRef.current.style.width = `${progress}%`;
  };

  useEffect(() => {
    const video = videoRef.current;

    // Update the video source when the videoObj changes
    video.src = `${videoObj?.videoUrl}#t=5`;
    video.load(); // Load the updated video source

    // Pause the video when the videoObj changes
    video.pause();
    setIsPlaying(false);

    // Reset the progress bar
    progressRef.current.style.width = "0%";

    // Add event listeners
    video.addEventListener("timeupdate", updateProgressBar);

    // Clean up the event listener on unmount
    return () => {
      video.removeEventListener("timeupdate", updateProgressBar);
    };
  }, [videoObj]);

  return (
    <div
      className="relative w-full h-auto lg:h-[500px] rounded-xl overflow-hidden"
      onMouseEnter={handleVideoHover}
      onMouseLeave={handleVideoHover}
    >
      <video
        ref={videoRef}
        controls
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
        className="w-full h-full object-fill rounded-lg  custom-video-controls"
        onClick={handlePlayClick}
        onTimeUpdate={isPlaying ? updateProgressBar : null}
      >
        <source src={`${videoObj?.videoUrl}#t=5`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {!isPlaying && (
        <button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl focus:outline-none"
          onClick={handlePlayClick}
        >
          <FaPlay />
        </button>
      )}
      {isHovered && isPlaying && (
        <button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl focus:outline-none"
          onClick={handlePlayClick}
        >
          <FaPause />
        </button>
      )}
      <div className="absolute bottom-0 left-0 w-full h-2 ">
        <div
          ref={progressRef}
          className="h-full "
          style={{ width: "0%" }}
        ></div>
      </div>
    </div>
  );
};

const CircularProgress = ({ progress }) => {
  const strokeWidth = 10;
  const radius = 100;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative">
      <svg
        className="mx-auto transform rotate-45"
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${radius * 2} ${radius * 2}`}
        fill="none"
      >
        <circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          fill="none"
          strokeLinecap="round"
          stroke="white" // Border color
        />
        <circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          strokeWidth={strokeWidth}
          fill="rgba(228, 228, 228, 0.1)" // Background color
          opacity={0.2} // Adjust the opacity as desired
        />
      </svg>
      <div className="flex items-center text-3xl text-white justify-center absolute top-0 left-0 w-full h-full z-20">
        {progress}%
      </div>
    </div>
  );
};

const ExamSection = () => {
  const [answers, setAnswers] = useState([]);

  const handleAnswerChange = (questionIndex, answerIndex) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[questionIndex] = answerIndex;
      return updatedAnswers;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted answers:", answers);
    // Perform any necessary logic with the submitted answers
  };

  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
    },

    // Add more questions as needed
  ];

  return (
    <div className=" max-w-2xl mx-auto mt-8 ">
      <form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <div key={index} className="mb-8">
            <p className="font-bold text-2xl text-white">
              {index + 1}. {question.question}
            </p>
            <div className="mt-2 ">
              {question.options.map((option, optionIndex) => (
                <label
                  key={optionIndex}
                  className="flex items-center justify-between px-4 rounded-md cursor-pointer text-white hover:bg-hvr  py-2 mt-3 space-x-2 border"
                >
                  <span className=" text-lg">{option}</span>
                  <input
                    type="radio"
                    className="w-6 h-6"
                    value={optionIndex}
                    checked={answers[index] === optionIndex}
                    onChange={() => handleAnswerChange(index, optionIndex)}
                  />
                </label>
              ))}
            </div>
          </div>
        ))}
        <div className=" mt-10 flex items-center justify-between">
          <button className="rounded-md bg-pr px-3.5 py-2.5 text-sm font-semibold text-gray-50 shadow-sm hover:bg-sr hover:text-pr focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pr">
            Previous
          </button>
          <button className="rounded-md bg-pr px-3.5 py-2.5 text-sm font-semibold text-gray-50 shadow-sm hover:bg-sr hover:text-pr focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pr">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

const AskQuestionSection = () => {
  const [question, setQuestion] = useState("");
  const [questionsList, setQuestionsList] = useState([{
    question: "Lorem ipsum dolor sit amet consectetur ?",
    answer: "",
    showAnswer: false,
  }]);

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newQuestion = {
      question,
      answer: "",
      showAnswer: false,
    };
    setQuestionsList([...questionsList, newQuestion]);
    setQuestion("");
  };

;

  const toggleAnswer = (index) => {
    const updatedQuestionsList = [...questionsList];
    updatedQuestionsList[index].showAnswer =
      !updatedQuestionsList[index].showAnswer;
    setQuestionsList(updatedQuestionsList);
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto mt-8">
      <div className="mt-8">
        <h2 className="text-xl font-bold text-white">
          Previously Asked Questions 🤔
        </h2>
        {questionsList.map((q, index) => (
          <div key={index} className="mt-3 px-4 py-2 border rounded-xl border-hvr">
            <div
              className="font-bold cursor-pointer flex items-center justify-between text-white "
              onClick={() => toggleAnswer(index)}
            >
              {q.question}
              <p className="text-2xl">+</p>
            </div>
            {q.showAnswer && (
              <div className="mt-2">
                <div className=" rounded-md border-t border-hvr text-sm pt-2 text-white">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Rerum consequatur vero vitae qui doloremque, consectetur
                  ducimus consequuntur ea error perferendis. Quidem velit ea
                  eaque quam dicta voluptatem, alias debitis? Ex sapiente
                  eveniet harum. Dicta vitae eaque totam.
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="question" className="font-bold text-white pb-3">
            Your Question
          </label>
          <textarea
            id="question"
            className="w-full h-32 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={question}
            onChange={handleQuestionChange}
            required
          ></textarea>
        </div>
        <button className="rounded-md bg-pr px-3.5 py-2.5 text-sm font-semibold text-gray-50 shadow-sm hover:bg-sr hover:text-pr focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pr">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CourseDetails;
