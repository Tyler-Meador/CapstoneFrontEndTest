import React from 'react';
import Sidebar from "../../Sidebar/Sidebar";

function CreateAccount() {
    return (
        <>
             <div className="HeroContainerDash">
        <video className="VideoBg" loop autoPlay>
          <source src="videos/oil.mp4" type="video/mp4" />
        </video>

        <div className="HeroContent">
          <h1 className="HeroH1">CREATE NEW ACCOUNT</h1>
        </div>
      </div>

      <Sidebar />
        </>
    )
}

export default CreateAccount
