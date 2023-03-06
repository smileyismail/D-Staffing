import React from "react";
import { Route, Routes } from "react-router-dom";

// landing page
import FAQ from "./Components/LandingPage/FAQ";
import Footer from "./Components/LandingPage/Footer";
import Header from "./Components/LandingPage/Header";
import Hero from "./Components/LandingPage/Hero";
import HireBestDevelopers from "./Components/LandingPage/HireBestDevelopers";
import ProjectManager from "./Components/LandingPage/ProjectManager";
import ScreenProcess from "./Components/LandingPage/ScreenProcess";
import Testimonial from "./Components/LandingPage/Testimonial";
import TrustedWebsites from "./Components/LandingPage/TrustedWebsites";
import YourTechnologies from "./Components/LandingPage/YourTechnologies";

// auth pages
import LogIn from "./Components/auth/LogIn";
import SignUp from "./Components/auth/SignUp";
import ForgotPassword from "./Components/auth/ForgotPassword";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <main className="flex flex-col gap-20">
            <Header />
            <Hero />
            <HireBestDevelopers />
            <YourTechnologies />
            <ScreenProcess />
            <ProjectManager />
            <Testimonial />
            <TrustedWebsites />
            <FAQ />
            <Footer />
          </main>
        }
      />
      <Route>
        <Route path="signUp" element={<SignUp />} />
        <Route path="logIn" element={<LogIn />} />
        <Route path="forgotPassword" element={<ForgotPassword />} />
      </Route>
    </Routes>
  );
};

export default App;
