import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import News from "./Pages/News";
import Colleges from "./Pages/colleges/Colleges";
import Exams from "./Pages/exams/Exams";
import Courses from "./Pages/Courses";
import Admissions from "./Pages/Admissions";
import Tools from "./Pages/tools/Tools";
import Forum from "./Pages/Forum";
import About from './Pages/company/About';
import PrivacyPolicy from './Pages/legal/PrivacyPolicy';
import TermsOfUse from './Pages/legal/TermsOfUse';
import Contact from './Pages/company/Contact';
import MediaKit from './Pages/company/MediaKit';
import CollegeFinder from './Pages/tools/CollegeFinder';
import RankPredictor from './Pages/tools/RankPredictor';
import CollegePredictor from './Pages/tools/CollegePredictor';
import BitsatPredictor from './Pages/tools/BitsatPredictor';
import JacDelhiPredictor from './Pages/tools/JacDelhiPredictor';
import JeeMain from './Pages/exams/JeeMain';
import JeeAdvanced from './Pages/exams/JeeAdvanced';
import Bitsat from './Pages/exams/Bitsat';
import MhtCet from './Pages/exams/MhtCet';
import Upsee from './Pages/exams/Upsee';
import Wbjee from './Pages/exams/Wbjee';
import Iits from './Pages/colleges/Iits';
import Nits from './Pages/colleges/Nits';
import Iiits from './Pages/colleges/Iiits';
import Iisers from './Pages/colleges/Iisers';
import DelhiNcr from './Pages/states/DelhiNcr';
import Maharashtra from './Pages/states/Maharashtra';
import Karnataka from './Pages/states/Karnataka';
import UttarPradesh from './Pages/states/UttarPradesh';
import AndhraPradesh from './Pages/states/AndhraPradesh';
import Telangana from './Pages/states/Telangana';
import NotFound from "./Pages/NotFound";

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
