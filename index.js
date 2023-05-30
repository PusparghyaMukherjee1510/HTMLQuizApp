const startBtn=document.getElementById('start-btn');
const nextBtn=document.getElementById('next-btn');

const questContElem=document.getElementById('question-container');
const answerBtnElem=document.getElementById('answer-btns');

let shuffleQuest, currentQuestIndex;
let quizScore=0;

const questions=[
    {
        question:'Which of these is JavaScript Framework?',
        answers:[
            {
              text:'git', correct:false,
              text:'React', correct:true,
              text:'SQL', correct:false,
              text:'CSS', correct:false
            }
        ]
    },
    {
        question:'What is called the \"Skeleton of Websites\" ?',
        answers:[
            {
              text:'HTML', correct:true,
              text:'JS', correct:false,
              text:'Docker', correct:false,
              text:'Python', correct:false
            }
        ]
    },
    {
        question:'What is the Capital of India?',
        answers:[
            {
              text:'Kolkata', correct:false,
              text:'Mumbai', correct:false,
              text:'New Delhi', correct:true,
              text:'Chennai', correct:false
            }
        ]
    },
    {
        question:'Who discovered the Gravitation Force?',
        answers:[
            {
              text:'Eienstein', correct:false,
              text:'Ratherford', correct:false,
              text:'Shrowedinger', correct:false,
              text:'Newton', correct:true
            }
        ]
    },
    {
        question:'Who won the Battle of Chappar-Chiri?',
        answers:[
            {
              text:'Akbar', correct:false,
              text:'Jahangir', correct:false,
              text:'Banda Singh', correct:true,
              text:'Wazir Khan', correct:false
            }
        ]
    }
]

const clearStat=(element)=>{
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const setStat=(element,correct)=>{
    clearStat(element)
    if (correct) {
element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}

const selectAnswer=(e)=>{
    const selectedBtn=e.target;
    const corr=selectedBtn.dataset.correct;

    setStat(document.body.corr);
    Array.from(answerBtnElem.children).forEach((button)=>{
        setStat(button,button.dataset.correct);
    })
    if (shuffleQuest.length > currentQuestIndex+1) {
        nextBtn.classList.remove('hide');
    }else{
        startBtn.classList.remove('hide');
        startBtn.innerText="Restart";
    }
    if (selectedBtn.dataset= correct) {
        quizScore++;
    }
    document.getElementById('right-answer').innerText=quizScore;
}

const resetState=()=>{
    clearStat(document.body);
    nextBtn.classList.add('hide');
    while (answerBtnElem.firstChild) {
        answerBtnElem.removeChild(answerBtnElem.firstChild);
    }
}

const showQuest=(question)=>{
    questContElem.innerText=question.questions;
    questions.answers.forEach((answers)=>{
        const btnn=document.createElement('button');
        btnn.innerText=answers.text;
        btnn.classList.add('btn');
        if (answers.correct) {
            btnn.dataset.correct=answers.correct;
        }
        btnn.addEventListener('click',selectAnswer);
        answerBtnElem.appendChild(btnn);
    })
}

const setNextQuest=()=>{
    resetState();
    showQuest(shuffleQuest[currentQuestIndex]);
}

const startQuiz=()=>{
    startBtn.classList.add('hide');
    shuffleQuest=questions.sort(()=>Math.random() -0.5);
    currentQuestIndex=0;
    questContElem.classList.remove('hide');
    setNextQuest();
    quizScore=0;
}

startBtn.addEventListener('click',startQuiz);
nextBtn.addEventListener('click',()=>{
    currentQuestIndex++;
    setNextQuest();
})