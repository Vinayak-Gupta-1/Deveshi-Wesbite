import HomeStyles from "./Home.module.scss"
import profile_pic from "../../images/profile_pic.jpeg"
import hiking from "../../images/hiking.jpg"
import ml_tesla from "../../images/ML.jpg"
import cs_reason from "../../images/CS_temp.jpg"
// import SkillBar from 'react-skillbars';
import Header from '../Header/header.jsx'


function Home() {
    const skills = [
        { type: "Python", level: 90 },
        { type: "C", level: 85 },
        { type: "React", level: 80 },
        { type: "Assembly", level: 80 },
        { type: "Java", level: 70 },
        { type: "ML/NLP", level: 65 },
        { type: "R", level: 30 },
    ];
    const colors = {
        bar: "#c6c3ca",
        title: {
            text: "#faed26",
            background: '#5a5560'
        }
    }

    return (
        <div>
            <Header />
            <div className={HomeStyles.BodyDiv}>
                <div className={HomeStyles.HeaderDiv}>
                    <p className={HomeStyles.HeaderText}>
                        <span className={HomeStyles.PreHeaderText}>
                            Welcome to my <span style={{ color: "#369b98" }}>secret lair!</span>< br /></span>
                        <br />
                        I'm a <span style={{ textDecoration: "underline" }}>problem solver</span> <br />and <span style={{ textDecoration: "underline" }}>lifelong learner</span><br />passionate about <span style={{ color: "#369b98" }}>Computer Science</span>
                    </p>
                    <div className={HomeStyles.ImagesDiv}>
                        <img className={HomeStyles.ProfilePicture} src={profile_pic} />
                    </div>
                </div>

                <h2 id="about-me" className={HomeStyles.SubHeaderText} style={{ paddingTop: "5vh" }}>ABOUT ME:</h2>
                <div className={HomeStyles.AboutMeBody}>
                    <p className={HomeStyles.Question}>Who am I?</p>
                    <div className={HomeStyles.AboutMeSubSection}>
                        <p className={HomeStyles.Answer}>
                            My name is Dr. Deveshi Gupta. I am Pediatric dental surgeon- which is a just cool
                            way of saying I chose to spend a few extra years (8years) after high school working
                            with kids and their teeth! <br />
                            When not at work, you will most likely find me curled up on my couch with a novel,
                            cup of coffee and my dog. When on vacation, I prefer to spending time with nature
                            doing things such as horse-back riding, kayaking, and trekking in the Himalayas!
                        </p>
                        <img className={HomeStyles.AboutImages} src={hiking} />
                    </div>
                    <p className={HomeStyles.Question}>Where did I graduate from?</p>
                    <div className={HomeStyles.AboutMeSubSection}>
                        <p className={HomeStyles.Answer}>
                            Glad you asked!<br />
                            I spent 5 years of my Uni Life, learning the ropes (B.D.S) from Padmashree Dr.
                            D.Y Patil School of Dentistry in Mumbai. I spent the next three years, mastering
                            and excelling in Pediatric Dental Care (M.D.S) from Manipal Academy of Higher
                            Education. For the non-doctors, reading this, Manipal is the Best private university in India!
                        </p>
                        <img className={HomeStyles.AboutImages} src={cs_reason} />
                    </div>
                    <p className={HomeStyles.Question}>Why Pediatric Dentistry?</p>
                    <div className={HomeStyles.AboutMeSubSection}>
                        <p className={HomeStyles.Answer}>
                            Good Question!<br />
                            I personally feel, that working with adults is routine work (no offense meant!).
                            For example: When I tell an adult they need a root canal, the entire process is
                            more or less self-explanatory. But when it comes to children, I can be as
                            creative and innovative as I like! The dreaded needle becomes a pen! The files
                            used for root canals become tooth-brushes that fight germs! With some kids
                            that are a little more out-going, we even count the germs coming out of their
                            mouth! Its story time every time.
                        </p>
                        <img className={HomeStyles.AboutImages} src={ml_tesla} />
                    </div>
                    {/* <p className={HomeStyles.Question}>What languages/software am I proficient in?</p>
                    <div className={HomeStyles.Table}>
                        <SkillBar skills={skills} colors={colors} height="6vh" animationDelay="0" animationDuration="2000" />
                    </div> */}
                </div>
            </div>
        </div >
    );
}
export default Home