import { Link } from "react-router-dom";
import { CheckIcon } from "@heroicons/react/20/solid";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import React, { useState } from 'react';

export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative  isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-7xl items-center  w-full grid grid-cols-1 pt-28  lg:pb-40  ">
          <div className=" flex  items-center justify-center mb-6">
            <img src="/logo.png" className="lg:h-96" alt="" />
          </div>
          <div className="w-full mt-5">
            <div className="lg:max-w-2xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Let's make learning fun!
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                <span className="text-pr font-medium"> Jangflix</span> - Where
                studying feels like watching your favorite TV show. It's an
                innovative and interactive learning platform designed
                specifically for kids. Our mission is to make learning engaging,
                fun, and accessible, empowering young minds to explore the
                wonders of{" "}
                <span className="text-pr font-medium">education</span>.
              </p>
              <div className="mt-10 flex items-center  gap-x-6">
                <Link
                  to="/sign-up"
                  className="rounded-md bg-pr px-3.5 py-2.5 text-sm font-semibold text-gray-50 shadow-sm hover:bg-sr hover:text-pr focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pr"
                >
                  Get started
                </Link>
                <Link
                  to="/courses"
                  className="text-sm font-semibold hover:text-pr leading-6 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
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
      <FaqSection/>
   

      <Pricing />
      <Trusted />
      <Subscribe />
    </div>
  );
}

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
    name: "Adventures",
    description: "Math",
    imageSrc: "/math.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Explorers",
    description: "Science ",
    imageSrc: "/science.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Adventures",
    description: "Geography",
    imageSrc: "/geo.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];
const callouts2 = [
  {
    name: "You are a parent looking for a single subscription for your child",
    description: "Math",
    imageSrc: "/1.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "You are a parent looking for a single subscription for your child",
    description: "Math",
    imageSrc: "/2.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "You are a parent looking for a single subscription for your child",
    description: "Math",
    imageSrc: "/3.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
];

function Courses() {
  return (
    <div >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16  lg:max-w-none ">
          <h2 className="text-4xl font-bold text-gray-900 text-center">
            What you can learn
          </h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-10 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
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
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center mt-16">
            <Link
              to="/courses"
              className="rounded-md bg-pr px-3.5 py-2.5 text-sm font-semibold text-gray-50 shadow-sm hover:bg-sr hover:text-pr focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pr"
            >
              View All Courses
            </Link>
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
          <h2 className="text-4xl font-bold text-gray-900">
            Who is Jangflix for?
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

const links = [
  { name: "Best Courses", href: "/courses" },
  { name: "Meet our leadership", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];
const stats = [
  { name: "Online Courses", value: "12" },
  { name: "Students", value: "300+" },
  { name: "Teachers", value: "40" },
  { name: "Online Support", value: "24/7" },
];

function Services() {
  return (
    <div className="relative isolate mt-10 lg:mt-0 overflow-hidden py-24 sm:py-32">
      <img
        src="/service.webp"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        className="absolute bg-[#451019c6] top-0 left-0 w-full h-full z-10"
       
      ></div>

      <div className="mx-auto max-w-7xl relative z-20 px-6 lg:px-8">
        <div className=" max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Learn from experts
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our teachers are carefully selected and trained on how to best
            deliver content online. Keep track of your progress and access all
            your materials conveniently through the student portal.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <Link key={link.name} className="hover:text-sr" to={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </Link>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-2 gap-8 sm:mt-20  lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">
                  {stat.name}
                </dt>
                <dd className="text-4xl font-bold leading-9 tracking-tight text-white">
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

function Pricing() {
  return (
    <div className="bg-white py-16 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 w-full rounded-3xl ring-1 ring-gray-200 pt-5 ">
          <h2 className=" text-xl lg:text-4xl font-bold tracking-tight text-gray-900  text-center">
            Pricing
          </h2>
          <div className=" p-5 mt-0 w-full grid grid-cols-1 lg:grid-cols-3 gap-5 ">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto px-8 ">
                <p className="text-base font-semibold text-gray-600">Monthly</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    $349
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    USD
                  </span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-pr px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-sr focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pr"
                >
                  Get access
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Invoices and receipts available for easy company reimbursement
                </p>
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:gap-6"
                >
                  {includedFeatures.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className="h-6 w-5 flex-none text-pr"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto px-8 ">
                <p className="text-base font-semibold text-gray-600">
                  Quarterly
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    $349
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    USD
                  </span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-pr px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-sr focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pr"
                >
                  Get access
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Invoices and receipts available for easy company reimbursement
                </p>
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:gap-6"
                >
                  {includedFeatures.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className="h-6 w-5 flex-none text-pr"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto px-8 ">
                <p className="text-base font-semibold text-gray-600">Annual</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    $349
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    USD
                  </span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-pr px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-sr focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pr"
                >
                  Get access
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Invoices and receipts available for easy company reimbursement
                </p>
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:gap-6"
                >
                  {includedFeatures.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className="h-6 w-5 flex-none text-pr"
                        aria-hidden="true"
                      />
                      {feature}
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
    <div className="bg-white pt-24 pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
            alt="Transistor"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
            alt="Statamic"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  );
}

function Subscribe() {
  return (
    <div className="relative isolate overflow-hidden bg-[#451019] py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Subscribe to our newsletter.
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
              velit quis. Duis tempor incididunt dolore.
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
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-pr px-3.5 py-2.5 text-sm font-semibold text-gray-50 shadow-sm hover:bg-sr focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:text-pr"
              >
                Subscribe
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
              <dd className="mt-2 text-sm text-gray-50">
                Non laboris consequat cupidatat laborum magna. Eiusmod non irure
                cupidatat duis commodo amet.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-white">No spam</dt>
              <dd className="mt-2 text-sm text-gray-50">
                Officia excepteur ullamco ut sint duis proident non adipisicing.
                Voluptate incididunt anim.
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
    <div  className=" pt-24 pb-32 bg-[#451019]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-4xl font-semibold leading-8 text-white">
          What People Say About Jangflix
        </h2>
        <di className=" grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20">
          <div className="bg-white p-4 rounded-xl">
            <h1 className="text-xl font-semibold">John Mark</h1>
            <p className="text-pr font-medium">Parent</p>
            <p className="text-lg font-semibold py-3">
              This is the first time my child is studying voluntarily. She
              actually enjoys watching Janglix and her grades improved as well.
            </p>
            <div className="flex items-center gap-1 jc">
              <AiFillStar className="w-6 h-6 text-yellow-500" />
              <AiFillStar className="w-6 h-6 text-yellow-500" />
              <AiFillStar className="w-6 h-6 text-yellow-500" />
              <AiFillStar className="w-6 h-6 text-yellow-500" />
              <AiFillStar className="w-6 h-6 text-yellow-500" />
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl">
            <h1 className="text-xl font-semibold">John Mark</h1>
            <p className="text-pr font-medium">Parent</p>
            <p className="text-lg font-semibold py-3">
              This is the first time my child is studying voluntarily. She
              actually enjoys watching Janglix and her grades improved as well.
            </p>
            <div className="flex items-center gap-1 jc">
              <AiFillStar className="w-6 h-6 text-yellow-500" />
              <AiFillStar className="w-6 h-6 text-yellow-500" />
              <AiFillStar className="w-6 h-6 text-yellow-500" />
              <AiFillStar className="w-6 h-6 text-yellow-500" />
              <AiFillStar className="w-6 h-6 text-yellow-500" />
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl">
            <h1 className="text-xl font-semibold">John Mark</h1>
            <p className="text-pr font-medium">Parent</p>
            <p className="text-lg font-semibold py-3">
              This is the first time my child is studying voluntarily. She
              actually enjoys watching Janglix and her grades improved as well.
            </p>
            <div className="flex items-center gap-1 jc">
              <AiFillStar className="w-6 h-6 text-yellow-500" />
              <AiFillStar className="w-6 h-6 text-yellow-500" />
              <AiFillStar className="w-6 h-6 text-yellow-500" />
              <AiFillStar className="w-6 h-6 text-yellow-500" />
              <AiFillStar className="w-6 h-6 text-yellow-500" />
            </div>
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
      question: 'What is Jangflix?',
      answer: 'Jangflix is an innovative and interactive learning platform designed specifically for kids...',
    },
    {
      question: 'How can I sign up for Jangflix?',
      answer: 'Signing up for Jangflix is easy! Simply visit our website and click on the "Sign Up" button...',
    },
    {
      question: 'Are there any free courses available?',
      answer: 'Yes, Jangflix offers a variety of free courses that you can access without any cost...',
    },
    // Add more FAQs as needed
  ];

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
  <div className="bg-[#451019]">
      <div className="max-w-7xl py-24 mx-auto" >
      <h2 className="text-3xl font-bold mb-8 text-white">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-md p-4">
            <button
              className="flex justify-between items-center w-full focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <span className="font-semibold  text-white">{faq.question}</span>
              <span>{activeIndex === index ? <AiOutlineMinus className="w-5 h-5 cursor-pointer  text-white"/> : <AiOutlinePlus className="w-5 h-5 cursor-pointer  text-white"/>}</span>
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

