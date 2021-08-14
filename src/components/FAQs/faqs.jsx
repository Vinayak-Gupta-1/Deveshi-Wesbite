import { useState } from 'react'
import Header from '../Header/header.jsx'
import FaqsStyles from "./Faqs.module.scss"

function FAQsingle(props) {
    const [hover, setHover] = useState(false);
    const background = props["background"];
    const question = props["question"];
    const answer = props["answer"];
    return (
        <div className={FaqsStyles.insideBox} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ backgroundColor: background }}>
            <p className={hover ? FaqsStyles.questionHover : FaqsStyles.question}>{question}</p>
            <p className={hover ? FaqsStyles.answerHover : FaqsStyles.answer}>{answer}</p>
        </div>
    )
}
function FAQGroup(props) {
    const question1 = props["question1"];
    const answer1 = props["answer1"];
    const question2 = props["question2"];
    const answer2 = props["answer2"];
    const question3 = props["question3"];
    const answer3 = props["answer3"];
    return (
        <div className={FaqsStyles.Box}>
            <FAQsingle
                background="#b6dedb"
                question={question1}
                answer={answer1}
            />
            <FAQsingle
                background="#c8e6e3"
                question={question2}
                answer={answer2}
            />
            <FAQsingle
                background="#d9eeec"
                question={question3}
                answer={answer3}
            />

        </div >
    )
}


function Faqs() {
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
                    <FAQGroup
                        question1="What is your name?"
                        answer1="My name is Deveshi Gupta"
                        question2="What is your name? "
                        answer2="My name is Deveshi Gupta"
                        question3="What is your name?"
                        answer3="My name is Deveshi Gupta"
                    />
                </div>
            </div >
        </div >
    );
}

export default Faqs;