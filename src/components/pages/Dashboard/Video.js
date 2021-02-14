import React, { Component } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import { Button } from "../../Button";




class Video extends Component {
    render() {
        return (
            <div className="HeroContainer">

                <video className="VideoBg" loop autoPlay>
                    <source src="videos/world.mp4" type="video/mp4" />
                </video>

                <div className="HeroContent">
                    <h1 className="HeroH1">Merit Bank Global Network</h1>

                    <h1 className="HeroP">
                        Sign up for a new account today and enjoy our services around the
                        world.
                    </h1>

                    <div className="HeroBtnWrapper">
                        <Link to="/login">
                            <Button
                                className=".main-btn"
                                buttonSize="btn--wide"
                                buttonColor="blue"
                            >
                                SIGN UP
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

        );
    }
}

export default Video;

/*<ReactPlayer
            className='VideoBg'
            url= 'videos/video.mp4'
            width='100%'
            height='100%'

            />



<ReactPlayer playing url='video.mp4'
                height='500px'
                width='800px'
                controls='true'
            />*/
