import React, { createContext, useRef, useState } from "react";
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";

import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import Courses from "./pages/Courses";
import SignUp from "./pages/Signup";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import CourseDetails from "./pages/CourseDetails";
import { videos } from "./assets/demo";

export const RapperContent = createContext();
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);


const [allVideos, setAllVideos] = useState(videos)

  const intervalRef = useRef(null); 


 const [twatched, setTwatched] = useState(0)

  return (
    <RapperContent.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        loading,
        user,
        setUser,
        allVideos,
setAllVideos,
twatched,
setTwatched
      }}
    >
      <BrowserRouter>
        <Navbar intervalRef={intervalRef}/>
        <div>
          <ToastContainer />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/video/:id" element={<CourseDetails />} />
           

            
          </Routes>
        </div>
      </BrowserRouter>
    </RapperContent.Provider>
  );
};

export default App;
