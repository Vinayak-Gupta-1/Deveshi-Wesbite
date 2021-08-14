import HeaderStyles from "./Header.module.scss";
import React from "react";
import { NavLink } from "react-router-dom";
import email_logo from "../../images/email_logo.png"
import resume_logo from "../../images/resume_logo.png"
import linkedIn_logo from "../../images/linkedIn_logo.png"

function Header() {
    const rightMenu = (
        <div className={HeaderStyles.RightMenu}>
            <a href="/#about-me" className={HeaderStyles.RightMenuText} ><p >About me</p></a>
            <NavLink to="/gallery" className={HeaderStyles.RightMenuText} ><p>Smile Gallery</p></NavLink>
            <NavLink to="/faqs" className={HeaderStyles.RightMenuText}><p>FAQs</p></NavLink>
            <a href="https://drive.google.com/file/d/1NCaPfoc341eDkuN6SQGRZYUpAnX3eAQb/view?usp=sharing" target="_blank"><img className={HeaderStyles.CompanyLogo} src={resume_logo} /></a>
            <a href="mailto:deveshi_gupta18@yahoo.co.in" target="_blank"><img className={HeaderStyles.CompanyLogo} src={email_logo} /></a>
            <a href="https://www.linkedin.com/in/dr-deveshi-gupta-b2a403215/" target="_blank"><img className={HeaderStyles.CompanyLogo} src={linkedIn_logo} /></a>
        </div >
    );

    return (
        <div className={HeaderStyles.Title}>
            <NavLink to='/' className={HeaderStyles.Name}>
                <p> DR. DEVESHI GUPTA</p>
            </NavLink>
            {rightMenu}
        </div>
    );
}

export default Header;