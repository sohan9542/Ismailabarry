import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RapperContent } from "../App";
import VideoComponent from "../components/VideoComponent";
const Courses = () => {
  const { isAuthenticated, allVideos } = useContext(RapperContent);
  const callouts = [
    {
      name: "Troisième",
      description: "Anglais",
      imageSrc: "/math.jpg",
      imageAlt: "Anglais",
      href: "#",
    },
    {
      name: "Troisième",
      description: "Sciences de la Vie et de la Terre  ",
      imageSrc: "/science.jpg",
      imageAlt:
        "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
      href: "#",
    },
    {
      name: "Troisième",
      description: "Histoire",
      imageSrc: "/geo.jpg",
      imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
      href: "#",
    },
    {
      name: "Géniale",
      description: "Philosophie",
      imageSrc: "/faq.webp",
      imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
      href: "#",
    },
  ];

  {
    /* {callouts.map((callout) => (
                <Link to={isAuthenticated ? "/dashboard": "/login"} key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <VideoComponent item={allVideos?.filter((i)=> i?.category === callout?.imageAlt)?.[0]} />
               
                  </div>
                  <h3 className="mt-6 text-xs text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-xl font-bold text-gray-900">
                    {callout.description}
                  </p>
                </Link>
              ))} */
  }

  return (
    <div>
      <div className="bg-gray-100 min-h-screen">
        <div className="mx-auto max-w-7xl pt-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-20">
            <h2 className="text-4xl font-bold text-center text-gray-900 pb-10">
              Médiathèque{" "}
            </h2>

            <div className=" p-5  bg-pr w-full  rounded-xl">
            <h2 className="text-3xl font-bold  text-white  ">
            Troisième
            </h2>
              <div className=" grid lg:grid-cols-3 mt-5 lg:gap-x-6 gap-y-9 ">
                {allVideos
                  ?.filter((i) => i?.grade === "Troisième")
                  .map((item, ind) => (
                   <div>
                     <VideoComponent item={item} />
                     <p className="text-white pt-2 font-bold text-lg">{item?.title}</p>
                     <p className="text-white pt-1 font-bold text-sm">{item?.subject}</p>
                   </div>
                  ))}
              </div>
            </div>
            <div className=" p-5 mt-10  bg-pr w-full  rounded-xl">
            <h2 className="text-3xl font-bold  text-white  ">
            Terminale
            </h2>
              <div className=" grid lg:grid-cols-3 mt-5 lg:gap-x-6 gap-y-9 ">
                {allVideos
                  ?.filter((i) => i?.grade === "Terminale")
                  .map((item, ind) => (
                   <div>
                     <VideoComponent item={item} />
                     <p className="text-white pt-2 font-bold text-lg">{item?.title}</p>
                     <p className="text-white pt-1 font-bold text-sm">{item?.subject}</p>
                   </div>
                  ))}
              </div>
            </div>

     
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
