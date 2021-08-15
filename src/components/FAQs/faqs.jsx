import { useState } from 'react'
import Header from '../Header/header.jsx'
import FaqsStyles from "./Faqs.module.scss"

function FAQsingle(props) {
    const [hover, setHover] = useState(false);
    const background = props["background"];
    const question = props["question"];
    const answer = props["answer"];
    const link1 = props["link1"]
    const link2 = props["link2"]
    if (link1 == "" && link2 == "") {
    }
    else {
        var view1 = <a className={hover ? FaqsStyles.answerHover : FaqsStyles.answer} href={link1} target="_blank">Milk Teeth Eruption</a>
        var view2 = <a className={hover ? FaqsStyles.answerHover : FaqsStyles.answer} href={link2} target="_blank">Permanent Teeth Eruption</a>
    }

    return (
        <div className={FaqsStyles.insideBox} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ backgroundColor: background }}>
            <p className={hover ? FaqsStyles.questionHover : FaqsStyles.question}>{question}</p>
            <p className={hover ? FaqsStyles.answerHover : FaqsStyles.answer}>{answer}</p>
            {view1}
            <br />
            {view2}
        </div >
    )
}
function FAQGroup(props) {
    const question1 = props["question1"];
    const answer1 = props["answer1"];
    const view1 = props["view1"];
    const view2 = props["view2"];
    const question2 = props["question2"];
    const answer2 = props["answer2"];
    const view3 = props["view3"];
    const view4 = props["view4"];
    const question3 = props["question3"];
    const answer3 = props["answer3"];
    const view5 = props["view5"];
    const view6 = props["view6"];
    return (
        <div className={FaqsStyles.Box}>
            <FAQsingle
                background="#b6dedb"
                question={question1}
                answer={answer1}
                link1={view1}
                link2={view2}
            />
            <FAQsingle
                background="#c8e6e3"
                question={question2}
                answer={answer2}
                link1={view3}
                link2={view4}
            />
            <FAQsingle
                background="#d9eeec"
                question={question3}
                answer={answer3}
                link1={view5}
                link2={view6}
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
                <div>
                    <FAQGroup
                        question1="What is a Pediatric Dentist?"
                        answer1="Me!
                        On a serious note, a Pedodontist is a dentist that is dedicated to the oral health and hygiene of children from infancy to adolescence. This doctor has spent an extra 3 years specializing in this field after dental school. 
                        Each child is different, in terms of their psychological and behavioural development. A Pediatric dentist is best qualified to meet the needs of these patients while helping them avoid future dental problems. 
                        "
                        view1=""
                        view2=""

                        question2="Are milk teeth important? "
                        answer2="I have often been asked this question, by parents. And the answer is Yes! Milk teeth are very important for the following reasons: (a) They maintain the space in the mouth for the permanent teeth and help guide them into their proper positions. (b) They help in chewing and getting your child the nutrition, they need. (c) They play an active role in the development of speech. (d) Neglected cavities can often lead to infections which in turn can damage the developing permanent teeth.
                        "
                        view3=""
                        view4=""

                        question3="When do the teeth erupt?"
                        answer3="The milk teeth also known as the primary teeth start to erupt around the age of 6 months. However, each child is different and hence the eruption can vary by a few months here and there. Usually, while the pace and order may differ, all the primary teeth erupt by 3 years of age. 
                        The permanent teeth start to erupt around 6 years of age. This process continues till 18-21 years with the eruption of the third molars. 
                        "
                        view5="https://drive.google.com/file/d/1yy4M6pZSI8V53sTZydwT-Bw0X_66ONOW/view?usp=sharing"
                        view6="https://drive.google.com/file/d/1J-4PoU2olye9u3IOYOKlbanHH3FxnOnf/view?usp=sharing"
                    />
                    <FAQGroup
                        question1="When should I start brushing my childs teeth? "
                        answer1="You should start brushing your childs teeth, the moment their first tooth begins to erupt. Here I would like to add, that even without the presence of teeth, you should clean your childs mouth with a wet/damp gauze or cloth piece at least twice a day. Just wrap the cloth around your finger and sweep it in the childs mouth after their feed. This will ensure healthy and happy gums! 
                        "
                        view1=""
                        view2=""
                        question2="What can I do when my child is teething? "
                        answer2="Teething is a trying time! It is normal, for some children to become irritable, fussy eaters and have sleepless nights. Here are a few things that may help ease your toddlers discomfort. 
                        1.	Cold teething rings 2.	Use non-sweetened rusks, cold apple, or cucumber slices. 3.	If these do not work, contact me or your Pediatric dentist. Your child may even develop a fever, or an upset stomach. If this does happen, don’t fret! Just visit your friendly neighbourhood paediatrician for some medications.
                        "
                        view3=""
                        view4=""
                        question3="Which toothpaste is the best to use? And how much do I use?"
                        answer3="I would recommend that you use a toothpaste that contains fluoride. This is an important ingredient that helps fight cavities. But as the famous proverb goes “too much of anything is bad”. You can restrict the amount of toothpaste used as follows: 
                        For children below 3 years, use only a smear amount on the brush (Less than a rice grain). 
                        For children above 3 years and even adults, you can gradually increase the amount to a pea size dollop. 
                        "
                        view5=""
                        view6=""
                    />
                    <div className={FaqsStyles.Box2}>
                        <FAQsingle
                            background="#c8e6e3"
                            question="When can my child brush their own teeth?"
                            answer="That’s a good question! Ideally, a child gains the manual dexterity to brush their own teeth around the age of 8-9 years. This is also the time when they can write in cursive, tie their own shoelace, and cut a piece of meat with a knife and fork on their own. Until this time, you as the parent or guardian will have to actively brush their teeth or supervise their cleaning personally. "
                            link1=""
                            link2=""
                        />
                        <FAQsingle
                            background="#d9eeec"
                            question="How do I prevent cavities?"
                            answer="Good oral hygiene and healthy eating habits are important keystones in preventing cavities. Brushing twice a day and restricting the number of sugary snacks your child eats goes a long way in maintain a healthy mouth. The more frequently your child snacks, the greater the chances for tooth decay. To put it simply, remember the rule of two, your child has to brush at least TWICE and have not more than TWO snacks in the day."
                            link1=""
                            link2=""
                        />
                    </div>
                </div>
            </div >
        </div >
    );
}

export default Faqs;