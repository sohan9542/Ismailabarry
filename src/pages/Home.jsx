import { Link } from "react-router-dom";
import { CheckIcon } from "@heroicons/react/20/solid";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import { BiMoviePlay } from "react-icons/bi";
import { GiMaterialsScience } from "react-icons/gi";
import { MdQuiz } from "react-icons/md";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import React, { useContext, useState } from "react";
import {
  AiFillVideoCamera,
  AiOutlineFilePdf,
  AiOutlineCheckCircle,
  AiOutlineUsergroupAdd,
  AiOutlineBook,
  AiOutlineMobile,
} from "react-icons/ai";
import { BsFillChatDotsFill,BsHouseHeartFill } from "react-icons/bs";
import { IoMdSchool } from "react-icons/io";
import { RapperContent } from "../App";
import VideoComponent from "../components/VideoComponent";

function Home() {
  return (
    <div className="bg-white">
      <div className="relative  isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-7xl items-center  w-full grid grid-cols-1 pt-24  lg:pb-16  ">
          <div className=" flex  items-center justify-center mb-6">
            <img src="/logo.png" className="lg:h-96" alt="" />
          </div>
          <div className="w-full mt-5">
            <div className="lg:max-w-4xl mx-auto">
              <h1 className="text-4xl heading_gradient text-center font-bold tracking-tight text-gray-900 sm:text-6xl">
                {/* Rendons l'apprentissage plus ludique ! */}
                Rendons l'apprentissage
                <br className="hidden lg:block"/>
plus ludique !
              </h1>
              <p className="mt-6 text-lg leading-8 text-center text-gray-600">
                <span className="text-pr font-medium "> Jangflix 'est </span>{" "}
                une plateforme d'apprentissage innovante et interactive conçue
                spécifiquement pour les élèves du collège et du lycée. Notre
                mission est de rendre l'apprentissage engageant, amusant et
                accessible, en permettant aux jeunes esprits d'explorer les
                merveilles de l'éducation.
              </p>
              <div className="mt-10 flex items-center justify-center  gap-x-6">
                <Link
                  to="/sign-up"
                  className="rounded-md bg-pr px-3.5 py-2.5 text-sm font-semibold text-gray-50 shadow-sm hover:bg-sr hover:text-pr focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pr"
                >
                  Découvrir
                </Link>
                <Link
                  to="/courses"
                  className="text-sm font-semibold hover:text-pr leading-6 text-gray-900"
                >
                  En savoir plus <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Services />
      <JangflixFor />
      <Testimonials />
      <Courses />
      <FaqSection />

      <Pricing />
      <Trusted />
      <Subscribe />
    </div>
  );
}
export default Home;
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const callouts = [
  {
    name: "Troisième",
    description: "Anglais",
    imageSrc: "/math.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
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
];
const callouts2 = [
  {
    name: "Je suis un parent à la recherche d'un accompagnement scolaire  pour mon enfant.    ",
    description: "Math",
    imageSrc: "/t.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Je suis enseignant et je souhaite faire découvrir Jangflix à mes élèves.",
    description: "Math",
    imageSrc: "/p.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Nous sommes une institution et souhaitons parrainer des élèves.",
    description: "Math",
    imageSrc: "/c.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
];

function Courses() {
  const { allVideos } = useContext(RapperContent);
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 lg:max-w-none ">
          <h2 className="text-4xl font-bold text-center text-gray-900 pb-10">
            Médiathèque{" "}
          </h2>

          <div className=" p-5  bg-[#451019] w-full  rounded-xl">
            <h2 className="text-3xl font-bold  text-white  ">Troisième</h2>
            <div className=" grid lg:grid-cols-3 mt-5 lg:gap-x-6 gap-y-9 ">
              {allVideos
                ?.filter((i) => i?.grade === "Troisième")
                .map((item, ind) => (
                  <div>
                    <VideoComponent item={item} />
                    <p className="text-white pt-2 font-bold text-lg">
                      {item?.title}
                    </p>
                    <p className="text-white pt-1 font-bold text-sm">
                      {item?.subject}
                    </p>
                  </div>
                ))}
            </div>
          </div>
          <div className=" p-5 mt-10  bg-[#451019] w-full  rounded-xl">
            <h2 className="text-3xl font-bold  text-white  ">Terminale</h2>
            <div className=" grid lg:grid-cols-3 mt-5 lg:gap-x-6 gap-y-9 ">
              {allVideos
                ?.filter((i) => i?.grade === "Terminale")
                .map((item, ind) => (
                  <div>
                    <VideoComponent item={item} />
                    <p className="text-white pt-2 font-bold text-lg">
                      {item?.title}
                    </p>
                    <p className="text-white pt-1 font-bold text-sm">
                      {item?.subject}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function JangflixFor() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16  lg:max-w-none ">
          <h2 className="text-4xl font-bold text-center text-gray-900">
            À qui s'adresse la plateforme Jangflix ?
          </h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-10 lg:space-y-0">
            {callouts2.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-center font-medium text-gray-800">
                  {callout.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const stats = [
  { name: "semaines d’essayage gratuit", value: "8" },
  { name: "Vidéos en cours d’enregistrement", value: "300+" },
  { name: "Professeurs de renommée", value: "25" },
  { name: "Élèves pour la phase test", value: "250+ " },
];

function Services() {
  return (
    <div className="relative isolate mt-10 lg:mt-0 overflow-hidden py-16 ">
      <img
        src="/service.webp"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="absolute bg-[#451019c6] top-0 left-0 w-full h-full z-10"></div>

      <div className="mx-auto max-w-7xl relative z-20 px-6 lg:px-8">
        <div className=" max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Apprenez des meilleurs
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Nos enseignants sont soigneusement sélectionnés et formés sur la
            meilleure façon de diffuser du contenu en ligne. Vous aurez
            également un portail étudiant où vous pourrez directement accéder
            aux synthèses de cours ainsi que posez vos questions.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-16 grid grid-cols-2 gap-8 sm:mt-20  lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">
                  {stat.name}
                </dt>
                <dd className="text-4xl pt-3 font-bold leading-9 tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

const includedFeatures = [
  "Private forum access",
  "Member resources",
  "Entry to annual conference",
  "Official member t-shirt",
];

const iconsAndDescriptions = [
  {
    icon: <AiFillVideoCamera className="text-pr" />,
    description: "Tous les cours en vidéos",
  },
  {
    icon: <AiOutlineUsergroupAdd className="text-pr" />,
    description: "Travaux pratique",
  },
  {
    icon: <BsFillChatDotsFill className="text-pr" />,
    description: "Correction de TD",
  },
  {
    icon: <AiOutlineFilePdf className="text-pr" />,
    description: "Fiches synthétiques de cours",
  },
  {
    icon: <AiOutlineCheckCircle className="text-pr" />,
    description: "Suivi de progression",
  },
  {
    icon: <AiOutlineUsergroupAdd className="text-pr" />,
    description: "Accès à la communauté",
  },
  {
    icon: <IoMdSchool className="text-pr" />,
    description: "Support professoral",
  },
  {
    icon: <AiOutlineBook className="text-pr" />,
    description: "Révisions en ligne",
  },
  {
    icon: <AiOutlineMobile className="text-pr" />,
    description: "Accès aux applications mobile",
  },
];

function Pricing() {
  return (
    <div className="bg-white py-16 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto  w-full rounded-3xl ring-1 ring-gray-200 pt-5 ">
          <h2 className=" text-xl lg:text-4xl font-bold tracking-tight text-gray-900  text-center">
            Abonnements
          </h2>
          <div className=" p-5 mt-0 w-full grid grid-cols-1 lg:grid-cols-3 gap-5 ">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto px-8 ">
                <p className="text-base font-semibold text-gray-600">Mensuel</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    0,00
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    FCFA
                  </span>
                </p>
                <Link
                  to="/login"
                  className="mt-10 block w-full rounded-md bg-pr px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-sr focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pr"
                >
                  Essayer Gratuitement
                </Link>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Vous disposez d’une période gratuite <br className="hidden lg:block"/>  d’essai de 8 semaines.
                </p>
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:gap-6"
                >
                  {iconsAndDescriptions.map(({ icon, description }) => (
                    <li key={description} className="flex items-center gap-x-3">
                      {icon}
                      {description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto px-8 ">
                <p className="text-base font-semibold text-gray-600">
                  Trimestriel
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    0,00
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    FCFA
                  </span>
                </p>
                <Link
                  to="/login"
                  className="mt-10 block w-full rounded-md bg-pr px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-sr focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pr"
                >
                  Essayer Gratuitement
                </Link>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Vous disposez d’une période gratuite <br className="hidden lg:block"/> d’essai de 8 semaines.
                </p>
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:gap-6"
                >
                  {iconsAndDescriptions.map(({ icon, description }) => (
                    <li key={description} className="flex items-center gap-x-3">
                      {icon}
                      {description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto px-8 ">
                <p className="text-base font-semibold text-gray-600">Annuel</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    0,00
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    FCFA
                  </span>
                </p>
                <Link
                  to="/login"
                  className="mt-10 block w-full rounded-md bg-pr px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-sr focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pr"
                >
                  Essayer Gratuitement
                </Link>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Vous disposez d’une période gratuite <br className="hidden lg:block"/> d’essai de 8 semaines.
                </p>
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:gap-6"
                >
                  {iconsAndDescriptions.map(({ icon, description }) => (
                    <li key={description} className="flex items-center gap-x-3">
                      {icon}
                      {description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Trusted() {
  return (
    <div className="bg-white  pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Nos Partenaires et Collaborateurs
        </h2>
        <div className="flex items-center justify-center">
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center  gap-x-8 gap-y-10  lg:grid-cols-3 ">
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/navi.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2  w-full object-contain lg:col-span-1"
              src="/ari.webp"
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/intech .png"
              alt="Tuple"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Subscribe() {
  return (
    <div className="relative isolate overflow-hidden bg-[#451019] py-16 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div className="  lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Abonnez-vous à notre newsletter
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              “Jangflix est en constante expansion et croissance. Notre
              newsletter vous informera de nos ajouts de contenu les plus
              récents, des cours en direct programmés ou des sessions de
              questions et vous fournira des informations générales sur nos
              professeurs.”
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border border-white bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Entrer votre Email                "
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-pr px-3.5 py-2.5 text-sm font-semibold text-gray-50 shadow-sm hover:bg-sr focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:text-pr"
              >
                S'abonner
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 ">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-white">Non au Spam</dt>
              <dd className="mt-2 text-sm text-gray-50">
                “Ne vous inquiétez pas, nous ne vous enverrons pas des tonnes
                d'e-mails. Les newsletters ne seront envoyées que s'il y a des
                informations pertinentes à partager et le contenu sera court et
                précis.”
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <div className=" pt-16 pb-16 bg-[#451019]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-4xl font-semibold leading-8 text-white">
          La plateforme Jangflix c’est :
        </h2>
        <di className=" grid grid-cols-1 lg:grid-cols-4 gap-5 mt-20">
          <div className="bg-white p-4 rounded-xl">
            <div className="flex items-center justify-center mt-4">
              <div className="w-24 h-24 flex items-center justify-center border rounded-full border-pr">
                <BiMoviePlay className="w-16 h-16 text-pr" />
              </div>
            </div>
            <h1 className="text-xl font-bold text-center text-pr mt-4">Des <br className="hidden lg:block"/> vidéos  interactives</h1>
            <p className="text-center mt-1 text-pr font-medium">Pour mieux <br className="hidden lg:block"/> comprendre  vos cours</p>
          </div>
          <div className="bg-white p-4 rounded-xl">
            <div className="flex items-center justify-center mt-4">
              <div className="w-24 h-24 flex items-center justify-center border rounded-full border-pr">
                <MdQuiz className="w-16 h-16 text-pr" />
              </div>
            </div>
            <h1 className="text-xl font-bold text-center text-pr mt-4">Des <br className="hidden lg:block"/> Quiz  amusants</h1>
            <p className="text-center mt-1 text-pr font-medium">Pour tester <br className="hidden lg:block"/> vos  connaissances</p>
          </div>
          <div className="bg-white p-4 rounded-xl">
            <div className="flex items-center justify-center mt-4">
              <div className="w-24 h-24 flex items-center justify-center border rounded-full border-pr">
                <GiMaterialsScience className="w-16 h-16 text-pr" />
              </div>
            </div>
            <h1 className="text-xl font-bold text-center text-pr mt-4">Des fonctionnalités innovantes</h1>
            <p className="text-center mt-1 text-pr font-medium">Pour rendre l’apprentissage <br className="hidden lg:block"/> plus facile</p>
          </div>
          <div className="bg-white p-4 rounded-xl">
            <div className="flex items-center justify-center mt-4">
              <div className="w-24 h-24 flex items-center justify-center border rounded-full border-pr">
                <BsHouseHeartFill className="w-16 h-16 text-pr" />
              </div>
            </div>
            <h1 className="text-xl font-bold text-center text-pr mt-4">Une communauté engagée</h1>
            <p className="text-center mt-1 text-pr font-medium">Pour partager vos expériences et trouver des réponses à vos questions</p>
          </div>
        </di>
      </div>
    </div>
  );
}

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Quelles sont les conditions de paiement ?",
      answer:
        "Selon le modèle d'abonnement que vous choisissez, vous êtes facturé mensuellement ou annuellement. Pour le forfait mensuel, les frais d'abonnement sont dus chaque premier du mois, pour le forfait annuel, vous payez en une seule fois.",
    },
    {
      question: "Quels modes de paiement acceptez-vous?",
      answer:
        "Vous pouvez payer votre abonnement par Orange Money, Wave, Free Money, carte de crédit, etc.",
    },
    {
      question: "Comment et quand peut-on résilier un abonnement ?",
      answer:
        "Vous pouvez annuler votre abonnement Jangflix à tout moment, et vous continuerez à avoir accès aux différents services jusqu'à la fin de votre période de facturation. Pour annuler, écrivez-nous un court e-mail indiquant que vous souhaitez annuler votre abonnement avec votre numéro de compte.",
    },
    {
      question: "Le programme sera-t-il mis à jour ?",
      answer:
        "Oui, nous mettons constamment à jour et élargissons nos cours et produisons de nouveaux contenu. Vous aurez accès à toutes les mises à jour et extensions dans le niveau de classe auquel vous êtes abonné.",
    },
    {
      question: "Tous les cours sont-ils inclus dans l'abonnement ?",
      answer:
        "Tout le contenu de la classe à laquelle vous vous êtes inscrit.e sera à votre disposition. À la fin d'une année scolaire, vous recevrez une notification avec la possibilité de changer de classe.",
    },
    {
      question: "Comment puis-je évaluer les progrès de mon enfant?",
      answer:
        "Il y a un portail dédié aux parents pour suivre les progrès de leur enfant. Vous pourrez y voir les heures de connexion, la durée d’apprentissage, les différents devoirs et leurs résultats, ainsi que les commentaires éventuels fournis par un enseignant.",
    },
    {
      question:
        "Y aura-t-il un certificat pour l’élève après avoir terminé un cours ?",
      answer:
        "Vous avez la possibilité de demander un certificat pour l'achèvement d'un cours. Cependant, pour obtenir un certificat, toutes les vidéos doivent être visionnées dans leur intégralité et tous les devoirs effectués. Veuillez noter que le certificat sert uniquement de moyen de motivation et récompense pour l’élève.",
    },
    {
      question: "Y a-t-il des frais supplémentaires aux frais d’abonnement ?",
      answer:
        "Non, tous les supports de cours et le contenu de la classe sont inclus dans votre abonnement. Si des fonctionnalités supplémentaires seront introduites à l'avenir, elles seront clairement marquées avec les prix respectifs.",
    },
    {
      question:
        "Les vidéos peuvent-elles être téléchargées et visionnées hors ligne ?",
      answer:
        "Les vidéos seront disponibles en mode hors ligne, afin que les sessions d'étude puissent être préparées en avance sans avoir besoin d'une connexion constante à Internet.",
    },
    {
      question:
        "Un abonnement peut-il être partagé entre plusieurs élèves d'un même foyer ?",
      answer:
        "Afin de pouvoir suivre, traiter et examiner l'activité de chaque élève, un abonnement ne peut être utilisé que par une seule personne.",
    },
  ];

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="bg-[#451019] px-3 lg:px-0">
      <div className="max-w-7xl py-16 mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white">
          Foire aux questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-md p-4">
              <button
                className="flex justify-between items-center w-full focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-semibold  text-white text-left">
                  {faq.question}
                </span>
                <span>
                  {activeIndex === index ? (
                    <AiOutlineMinus className="w-5 h-5 cursor-pointer  text-white" />
                  ) : (
                    <AiOutlinePlus className="w-5 h-5 cursor-pointer  text-white" />
                  )}
                </span>
              </button>
              {activeIndex === index && (
                <p className="mt-4  text-white">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
