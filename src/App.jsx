import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import News from "./pages/News";
import Colleges from "./pages/colleges/Colleges";
import Exams from "./pages/exams/Exams";
import Courses from "./pages/Courses";
import Admissions from "./pages/Admissions";
import Tools from "./pages/tools/Tools";
import Forum from "./pages/Forum";
import About from './pages/company/About';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfUse from './pages/legal/TermsOfUse';
import Contact from './pages/company/Contact';
import MediaKit from './pages/company/MediaKit';
import CollegeFinder from './pages/tools/CollegeFinder';
import RankPredictor from './pages/tools/RankPredictor';
import CollegePredictor from './pages/tools/CollegePredictor';
import BitsatPredictor from './pages/tools/BitsatPredictor';
import JacDelhiPredictor from './pages/tools/JacDelhiPredictor';
import JeeMain from './pages/exams/JeeMain';
import JeeAdvanced from './pages/exams/JeeAdvanced';
import Bitsat from './pages/exams/Bitsat';
import MhtCet from './pages/exams/MhtCet';
import Upsee from './pages/exams/Upsee';
import Wbjee from './pages/exams/Wbjee';
import Iits from './pages/colleges/Iits';
import Nits from './pages/colleges/Nits';
import Iiits from './pages/colleges/Iiits';
import Iisers from './pages/colleges/Iisers';
import DelhiNcr from './pages/states/DelhiNcr';
import Maharashtra from './pages/states/Maharashtra';
import Karnataka from './pages/states/Karnataka';
import UttarPradesh from './pages/states/UttarPradesh';
import AndhraPradesh from './pages/states/AndhraPradesh';
import Telangana from './pages/states/Telangana';
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/colleges' element={<Colleges />} />
        <Route path='/exams' element={<Exams />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/admissions' element={<Admissions />} />
        <Route path='/tools' element={<Tools />} />
        <Route path='/forum' element={<Forum />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/media-kit' element={<MediaKit />} />
        <Route path='/college-finder' element={<CollegeFinder />} />
        <Route path='/rank-predictor' element={<RankPredictor />} />
        <Route path='/college-predictor' element={<CollegePredictor />} />
        <Route path='/bitsat-predictor' element={<BitsatPredictor />} />
        <Route path='/jac-delhi-predictor' element={<JacDelhiPredictor />} />
        <Route path='/jee-main' element={<JeeMain />} />
        <Route path='/jee-advanced' element={<JeeAdvanced />} />
        <Route path='/bitsat' element={<Bitsat />} />
        <Route path='/mht-cet' element={<MhtCet />} />
        <Route path='/upsee' element={<Upsee />} />
        <Route path='/wbjee' element={<Wbjee />} />
        <Route path='/iits' element={<Iits />} />
        <Route path='/nits' element={<Nits />} />
        <Route path='/iiits' element={<Iiits />} />
        <Route path='/iisers' element={<Iisers />} />
        <Route path='/delhi-ncr' element={<DelhiNcr />} />
        <Route path='/maharashtra' element={<Maharashtra />} />
        <Route path='/karnataka' element={<Karnataka />} />
        <Route path='/uttar-pradesh' element={<UttarPradesh />} />
        <Route path='/andhra-pradesh' element={<AndhraPradesh />} />
        <Route path='/telangana' element={<Telangana />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-of-use' element={<TermsOfUse />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
