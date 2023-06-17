import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { videos } from "../assets/demo";
import { Swiper, SwiperSlide } from "swiper/react";
import VideoComponent from "../components/VideoComponent";
import SwiperCore, { Autoplay, Pagination } from "swiper/core";
import Discover from "../components/Discover";
import { RapperContent } from "../App";
import { toast } from "react-toastify";

const CourseDetails = () => {
  const { id } = useParams();
  SwiperCore.use([Autoplay, Pagination]);
  const [videoObj, setVideoObj] = useState(null);
  const { allVideos, setAllVideos, twatched, setTwatched } =
    useContext(RapperContent);
  useEffect(() => {
    let video = allVideos.filter((item) => item?.id === parseInt(id));
    // console.log(allVideos[id - 1]);
    setVideoObj(video[0]);
  }, [id, allVideos]);
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
  // bg-[#451019]

  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen pt-32 pb-20 ">
      <Discover open={open} setOpen={setOpen} />
      <div className="bg-white w-full">
        <div className="max-w-7xl px-2 lg:px-0 mx-auto">
          <BigScreenVideo
            setOpen={setOpen}
            twatched={twatched}
            setTwatched={setTwatched}
            videoObj={videoObj}
            allVideos={allVideos}
            setAllVideos={setAllVideos}
          />
        </div>
      </div>
      <div className="bg-[#451019] mt-10 ">
        <div className="py-20 max-w-7xl mx-auto  ">
          <p className="text-white"> {videoObj?.subject}</p>
          <h1 className="text-2xl font-semibold text-white">
            {videoObj?.title}
          </h1>
          <p className=" text-white text-sm pt-1">{videoObj?.description}</p>
        </div>
      </div>
      <div className=" max-w-7xl mx-auto pb-10 ">
        <h1 className="text-center text-4xl pt-20 pb-10 font-bold ">
          Testez Vos Connaissances🚀
        </h1>
        {videoObj?.questions && (
          <ExamSection
            questions={videoObj?.questions}
            setAllVideos={setAllVideos}
            allVideos={allVideos}
            id={videoObj?.id}
          />
        )}
      </div>
      <div className="bg-[#451019] mt-10 ">
        <div className=" max-w-7xl mx-auto pb-20">
          <h1 className="text-center text-4xl pt-20 pb-10 font-bold text-white">
            La communauté ❓
          </h1>
          <AskQuestionSection />
        </div>
      </div>

      <div className="mt-20 py-20 max-w-7xl mx-auto">
        <h1 className="text-center text-4xl text-pr  pb-32 font-bold ">
          Ma Progression⭐
        </h1>
        <div className=" flex flex-col lg:flex-row gap-10 lg:gap-32 mt-10 items-center justify-center">
          <div>
            <CircularProgress progress={(twatched / allVideos?.length) * 100} />
            <p className=" text-center mt-4">
              Vous avez terminé {twatched} vidéos sur {allVideos?.length} !
            </p>
          </div>
          <div>
            <CircularProgress
              progress={(videoObj?.quiz / videoObj?.questions?.length) * 100}
            />
            <p className=" text-center mt-4">
              Vous avez terminé {videoObj?.quiz} des{" "}
              {videoObj?.questions?.length} quiz !
            </p>
          </div>
        </div>
        <h1 className="text-center text-4xl pt-32 font-bold text-pr ">
          Vous êtes sur une bonne lancée, maintenez ce rythme !🎉
        </h1>
      </div>

      <div className="w-full bg-[#451019] py-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-1 mt-10">
            <p className="text-gray-50">Suggestion{">"} </p>
            <h1 className="py-2 text-2xl font-bold text-white">
              {videoObj?.category} vidéos
            </h1>
          </div>
          <Swiper
            breakpoints={breakpoints}
            // autoplay={{ delay: 1000, disableOnInteraction: false }}

            slidesPerView={4}
            spaceBetween={10}
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            {videos
              ?.filter((item) => item?.category === videoObj?.category)
              .map((item, ind) => (
                <SwiperSlide key={ind}>
                  <VideoComponent item={item} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>

      <div className=" mt-10 ">
        <div className=" max-w-7xl mx-auto pb-20">
          <h1 className="text-center text-4xl pt-20 pb-10 font-bold text-pr">
            NOTE
          </h1>
          <Note />
        </div>
      </div>
      <div className="flex items-center justify-center w-full mt-40 mb-20">
        <Link
          to="/courses"
          className="rounded-md bg-pr px-3.5 py-2.5 text-sm font-semibold text-gray-50 shadow-sm hover:bg-sr hover:text-pr focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pr"
        >
          Back to Course Page
        </Link>
      </div>
    </div>
  );
};

const BigScreenVideo = ({ videoObj, setOpen, setTwatched, twatched,allVideos,setAllVideos }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);
  const progressRef = useRef(null);

  const [tProgress, setTProgress] = useState(0)
  const handlePlayClick = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      let demoVid = allVideos;
      demoVid[videoObj?.id - 1].progress = tProgress;
      // console.log(demoVid)
      setAllVideos([...demoVid]);

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
    setTProgress(progress)
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

    
    const handleMetadataLoaded = () => {
      const duration = video.duration;
      const desiredTime = (parseInt(videoObj?.progress) / 100) * duration;
      video.currentTime = desiredTime;
    };
    

    video.addEventListener("loadedmetadata", handleMetadataLoaded);

    return () => {
      video.removeEventListener("loadedmetadata", handleMetadataLoaded);
    };
    // Clean up the event listener on unmount

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
        onEnded={() => {
          setTwatched(twatched + 1);
          setOpen(true);
        }}
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
          stroke="#791526" // Border color
        />
        <circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          strokeWidth={strokeWidth}
          fill="rgb(201, 201, 201)" // Background color
          opacity={0.2} // Adjust the opacity as desired
        />
      </svg>
      <div className="flex items-center text-3xl text-pr justify-center absolute top-0 left-0 w-full h-full z-20">
        {parseInt(progress).toFixed(0)}%
      </div>
    </div>
  );
};

const ExamSection = ({ questions, setAllVideos, allVideos, id }) => {
  const [answers, setAnswers] = useState([]);

  const handleAnswerChange = (questionIndex, answerIndex) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[questionIndex] = answerIndex;
      return updatedAnswers;
    });
  };

  const [questionDone, setQuestionDone] = useState(0);

  const [answer, setAnswer] = useState(0);
  const [checkOne, setCheckOne] = useState(null);

  const [rightAnswer, setRightAnswer] = useState(0);

  const checkQuestion = () => {
    if (checkOne !== null) {
      let demoVid = allVideos;
      demoVid[id - 1].quiz = answer + 1;
      // console.log(demoVid)
      setAllVideos([...demoVid]);
      setQuestionDone(answer + 1);
      setCheckOne(0);
      if (checkOne === questions[questionDone].answerIndex) {
        setRightAnswer(rightAnswer + 1);
        toast.success("Félicitations vous avez donné une réponse écrite 🎉", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error("Mauvaise réponse❌", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      toast.error("Veuillez sélectionner une option pour continuer!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    // console.log(answer , questions[questionDone].answer)
    //  set
  };

  return (
    <div className=" max-w-2xl mx-auto mt-8 ">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          checkQuestion();
        }}
      >
        {questions.map((question, index) => (
          <>
            {(questionDone >= questions?.length) === false &&
              questionDone === index && (
                <div key={index} className="mb-8">
                  <p className="font-bold text-2xl text-pr">
                    {index + 1}. {question.question}
                  </p>
                  <div className="mt-2 ">
                    {question?.options?.map((option, optionIndex) => (
                      <label
                        key={optionIndex}
                        className="flex items-center justify-between px-4 rounded-md cursor-pointer text-pr hover:bg-hvr  py-2 mt-3 space-x-2 border"
                      >
                        <span className=" text-lg">{option}</span>
                        <input
                          required
                          type="radio"
                          className="w-6 h-6"
                          value={optionIndex}
                          checked={answers[index] === optionIndex}
                          onChange={() => {
                            setCheckOne(optionIndex);
                            setAnswer(index);
                            handleAnswerChange(index, optionIndex);
                          }}
                        />
                      </label>
                    ))}
                  </div>
                </div>
              )}
          
          </>
        ))}

{questionDone >= questions?.length && (
              <h1 className="text-center whitespace-nowrap text-4xl py-10 font-bold text-pr ">
                tu as donné {rightAnswer} bonnes réponses sur{" "}
                {questions?.length}!🎉
              </h1>
            )}
        {questionDone >= questions?.length === false && (
          <div className=" mt-10 flex items-center justify-between">
            <button
              onClick={() => {
                if (questionDone !== 0) {
                  setQuestionDone(questionDone - 1);
                }
              }}
              type="button"
              className="rounded-md bg-pr px-3.5 py-2.5 text-sm font-semibold text-gray-50 shadow-sm hover:bg-sr hover:text-pr focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pr"
            >
              Previous
            </button>
            <button
              type="submit"
              className="rounded-md bg-pr px-3.5 py-2.5 text-sm font-semibold text-gray-50 shadow-sm hover:bg-sr hover:text-pr focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pr"
            >
              Next
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

const AskQuestionSection = () => {
  const [question, setQuestion] = useState("");
  const [questionsList, setQuestionsList] = useState([
    {
      question: "Lorem ipsum dolor sit amet consectetur ?",
      answer: "",
      showAnswer: false,
    },
  ]);

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
          Questions précédemment posées 🤔
        </h2>
        {questionsList.map((q, index) => (
          <div
            key={index}
            className="mt-3 px-4 py-2 border rounded-xl border-hvr"
          >
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
            J’ai une question
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
          Envoyer
        </button>
      </form>
    </div>
  );
};
const Note = () => {
  const [question, setQuestion] = useState("");
  const [questionsList, setQuestionsList] = useState([
    {
      question: "Lorem ipsum dolor sit amet consectetur ?",
      answer: "",
      showAnswer: false,
    },
  ]);

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

  const toggleAnswer = (index) => {
    const updatedQuestionsList = [...questionsList];
    updatedQuestionsList[index].showAnswer =
      !updatedQuestionsList[index].showAnswer;
    setQuestionsList(updatedQuestionsList);
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto mt-8">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="question" className="font-bold text-pr pb-3">
            Ajouter une note
          </label>
          <textarea
            id="question"
            className="w-full h-32 px-3 py-2 border border-pr rounded focus:outline-none  "
            value={question}
            onChange={handleQuestionChange}
            required
          ></textarea>
        </div>
        <button className="rounded-md bg-pr px-3.5 py-2.5 text-sm font-semibold text-gray-50 shadow-sm hover:bg-sr hover:text-pr focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pr">
          Ajouter +
        </button>
      </form>
      <div className="mt-4">
        <h2 className="text-xl font-bold text-pr">Remarques enregistrées 🤔</h2>
        {questionsList.map((q, index) => (
          <div
            key={index}
            className="mt-3 px-4 py-2 border rounded-xl border-pr"
          >
            <div
              className="font-bold cursor-pointer flex items-center justify-between text-pr "
              onClick={() => toggleAnswer(index)}
            >
              {q.question}
              <p className="text-2xl">+</p>
            </div>
            {q.showAnswer && (
              <div className="mt-2">
                <div className=" rounded-md border-t border-pr font-medium text-sm pt-2 text-pr">
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
    </div>
  );
};

export default CourseDetails;
