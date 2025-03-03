const container = document.querySelector('.container');
const questionBox = document.querySelector('.question');
const  choicesBox= document.querySelector('.choices');
const  nextbtn= document.querySelector('.nextbtn');

//make an array of objects (contains questions,answers and choices)
const quizQuestions = [
    {
        question : "Q1. Who was the first President of the United States?",
        choices : ['John Adams','Thomas Jefferson','Geroge Washington','James Madison'],
        answer : "Geroge Washington",
    }, 

    {
        question : "Q2. What is the capital city of Japan?",
        choices : ['Beijing','Seoul','Tokyo','Bangkok'],
        answer : "Tokyo",
    },
    {
        question : "Q3. What is the chemical symbol for gold?",
        choices : ['Au','Ag','Fe','Pb'],
        answer : 'Au',
    },

    {
        question : "Q4. Who wrote the play 'Romeo and Juliet?' ",
        choices : ['Charles Dickens','William Shakespeare','Mark Twain','Jane Austen'],
        answer : 'William Shakespeare',
    },
    {
        question : "Q5. Which country won the FIFA World Cup in 2018?",
        choices : ['Brazil','Germany','Argentina','France'],
        answer : 'France',
    },
    {
        question : "Q6. Who directed the film 'Titanic'?",
        choices : ["Steven Spielberg", "Martin Scorsese", "James Cameron", "Christopher Nolan"],
        answer : "James Cameron",
    },
    {
        question : "Q7. What was the name of The Beatles' first album?",
        choices : ["Help!", "Revolver", "Please Please Me", "Rubber Soul"],
        answer : "Please Please Me",
    },
    {
        question : "Q8. What is the value of π (pi) to two decimal places?",
        choices :  ["3.12", "3.14", "3.16", "3.18"],
        answer : "3.14",
    },
    {
        question : "Q9. Who is the founder of Microsoft?",
        choices :  ["Steve Jobs", "Larry Page", "Bill Gates", "Mark Zuckerberg"],
        answer : "Bill Gates",
    },
    {
        question : "Q10. What is the largest mammal in the world?",
        choices :  ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
        answer : "Blue Whale",
    },
];

let currentQuestionIndex = 0;
// const showQuestions = ()=>{
//     const questionDetails = quizQuestions[currentQuestionIndex];
//     questionBox.textContent = questionDetails.question;
//     const choice = questionDetails.choices;
//     choicesBox.textContent = "";
//     for(let i=0;i<choice.length;i++)
//     {
//         const choiceDiv = document.createElement('div');
//         choiceDiv.textContent = choice[i];
//         choiceDiv.classList.add('choice');
//         choicesBox.appendChild(choiceDiv);
//         choiceDiv.addEventListener('click',()=>{
//             if(choiceDiv.classList.contains('selected'))
//             {
//                 choiceDiv.classList.remove('selected');
//             }
//             else{
//                 choiceDiv.classList.add('selected');
//             }
//         });
//     }
//     currentQuestionIndex++;
// }

const showQuestions = ()=>{
    const questionDetails = quizQuestions[currentQuestionIndex];
    questionBox.textContent = questionDetails.question;
    const choice = questionDetails.choices;
    choicesBox.textContent = "";
    for(let i=0;i<choice.length;i++)
    {
        const choiceDiv = document.createElement('div');
        choiceDiv.textContent = choice[i];
        choiceDiv.classList.add('choice');
        choicesBox.appendChild(choiceDiv);
        choiceDiv.addEventListener('click',()=>{
            // Remove 'selected' class from any other choices
            const allChoices = document.querySelectorAll('.choice');
            allChoices.forEach(choice => choice.classList.remove('selected'));
            // Add 'selected' class to the clicked choice
            choiceDiv.classList.add('selected');
        });
    }
    currentQuestionIndex++;
}


//function to check answers
const checkAnswer = ()=>{
    const selectedChoice = document.querySelector('.choice.selected');
    console.log(selectedChoice.textContent);
}

nextbtn.addEventListener('click',()=>{
    if(currentQuestionIndex < quizQuestions.length)
    {
        showQuestions();
    }

});

