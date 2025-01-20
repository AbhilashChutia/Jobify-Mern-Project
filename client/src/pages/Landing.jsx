import React from "react";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <img src={logo} alt="glass" className="logo" />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>
                        Job <span>Tracking</span> App
                    </h1>
                    <p>
                        Break you ceiling. Go for more in your life. Find the
                        best job for your career. Test yourself to be better
                        than yesterday. <br />
                        Upskill and get the job you deserve. <br />
                        Make the best out of your career.
                    </p>
                    <Link to="/register" className="btn register-link">
                        Register
                    </Link>
                    <Link to="/login" className="btn">
                        Login / Demo User
                    </Link>
                </div>
                <img src={main} alt="job hunt" className="img main-img" />
            </div>
        </Wrapper>
    );
};

export default Landing;
