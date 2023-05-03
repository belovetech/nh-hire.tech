import React from 'react';
import "./LandingPage.scss";
import { Link } from 'react-router-dom';
import nhLogo from '../Images/nh_logo.jpg'
import { AiOutlineSwapRight } from "react-icons/ai";

const LandingPage = () => {
  return (
    <div className="landingpage__wrapper">
    <img src={nhLogo} alt="nh-logo" />
    <div className="landingpage__container">
       <div className="heading">EXCITED TO JOIN A CREATIVE TEAM?</div>
       <div className="central__text">
          We aren't set to discuss what we are
          <br/>building in detail, but we are hiring
          <br/> and will share everything with the 
          <br/>proper applicants.
       </div>
       <Link to="https://www.linkedin.com/company/nh-hq/jobs/" className="link">
            <button type="submit" className="btn flex">
                 <span>APPLY HERE</span>
                 <div className="icon"><AiOutlineSwapRight /></div>
             </button>
        </Link>
        <div className="footer-text">NH, Patient-centric healthcare company, San Francisco, California.</div>
    </div>
    </div>
  )
}

export default LandingPage;