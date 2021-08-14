import { useState } from 'react'
import Header from '../Header/header.jsx'
import FaqsStyles from "./Faqs.module.scss"

function FAQsingle(props) {
    const [hover, setHover] = useState(false);
    const background = props["background"];
    return (
        <div className={FaqsStyles.temp} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <p className={hover ? FaqsStyles.question_hover : FaqsStyles.question}>Hover over me.</p>
            <p className={hover ? FaqsStyles.answer_hover : FaqsStyles.answer}>I am shown when someone hovers over the div above.</p>
        </div>
    )
}
function FAQGroup(props) {
    const outerDivStyle = props["outerDivStyle"];
    const imgSrc = props["imgSrc"];
    const status = props["status"];
    const type = props["type"];
    const projectName = props["projectName"];
    const projectDesc = props["projectDesc"];
    const viewLink = props["viewLink"]
    if (viewLink === "") {
    }
    else if (viewLink === "https://www.oise.utoronto.ca/ejanglab/research/balanceai/") {
        var view = <a className={FaqsStyles.ViewProjectText} href={viewLink} target="_blank">Know More</a>
    }
    else {
        var view = <a className={FaqsStyles.ViewProjectText} href={viewLink} target="_blank">Read Paper</a>
    }
    return (
        <div className={outerDivStyle}>
            <img className={FaqsStyles.Image} src={imgSrc} />
            <p className={FaqsStyles.MiniHeaderText}> <span style={{ textDecoration: "underline" }}> Status:</span> {status} <span style={{ textDecoration: "underline", paddingLeft: "1vh" }}> <br />Type:</span> {type}</p>
            <p className={FaqsStyles.SubHeaderText}>{projectName}</p>
            <p className={FaqsStyles.BodyText}>{projectDesc}</p><br />
            {view}
        </div >
    )
}


function Resume() {
    return (
        <div >
            <Header />
            <div className={FaqsStyles.BodyDiv}>
                <p className={FaqsStyles.HeaderText}>Your Questions, Answered!</p>
                <p className={FaqsStyles.IntroText}>
                    Everyone has a story... a series of events and choices that lead them down a path.
                    Here I list a couple of my experiences, what I learnt from them and where they took me.
                    I hope you enjoy reading about them as much as I did experiencing them...
                </p>
                <div className={FaqsStyles.BodyContent}>
                    <FAQsingle background="red" />
                    <FAQsingle background="red" />
                    <FAQsingle background="red" />
                </div>
            </div >
        </div >
    );
}

export default Resume;