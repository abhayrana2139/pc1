import Header from "./components/Header";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import BlogDetail from "./components/BlogDetail";
import AddBlog from "./components/AddBlog";
import left from "./images/left.png"
import right from "./images/right.png"

import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";
import Home from "./components/women/Home";
import Laws from "./components/women/Laws";
import Aboutus from "./components/women/Aboutus";
import SaftyTips from "./components/SaftyTips";
import Helpline from "./components/women/Helpline";
import Footer from "./components/women/Footer";
import { useMediaQuery , useTheme  } from "@mui/material";
function App() {
  const dispath = useDispatch();

  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispath(authActions.login());
    }
  }, [dispath]);

  const theam = useTheme()
  const isMatch = useMediaQuery(theam.breakpoints.down("md"))

  return (
    <React.Fragment>
            
      { 
      isMatch ? <h1 className="font-extrabold text-lg pt-6 text-blue-800 text-center bottom-5">
      
      WomenHelpline </h1>  : ( <>
    

            <div className="h-32 flex justify-between w-[95%] m-auto bg-yellow-5  bottom-44"> <img src={left} size= {7} /><h1 className="font-extrabold text-5xl pt-6 text-blue-800">WomenHelpline</h1> <img src={right} size ={7} /></div>
 </> ) }
      
      <header>
        <Header />
      </header>

      <main>
        <Routes>
        <Route path="/" element={< Home />} />

        <Route path="/home" element={< Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Laws" element={<Laws />} />
        <Route path="/SaftyTips" element={<SaftyTips />} />
        <Route path="/helpline" element={< Helpline />} />
          {!isLoggedIn ? (
            <Route path="/auth" element={<Auth />} />
          ) : (
            <>
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/add" element={<AddBlog />} />
              <Route path="/myBlogs" element={<UserBlogs />} />
              <Route path="/myBlogs/:id" element={<BlogDetail />} />{" "}
              
            </>
          )}
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}

export default App;
