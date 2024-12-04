let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 17;
let correctAnswers = 0; // Track correct answers

const questions = [
    {
        question: "Kush eshte kryeqyteti i Frances?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        image: "", // Rruga për imazhin
        correctAnswer: 2
    },
    {
        question: "Cili planet njihet si planeti i kuqt?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 1
    },
    {
        question: "Kush shkroi 'Të vrasësh një Zog tallës'?",
        options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "F. Scott Fitzgerald"],
        correctAnswer: 0
    },
    {
        question: "Kush eshte oqeani me i madh ne bot?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        correctAnswer: 3
    },
    {
        question: "Kush e pikturoi Mona Lisën?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correctAnswer: 2
    },
    {
        question: "Cili eshte shteti me sipërfaqen më të madhe në botë?",
        options: ["United States", "Canada", "China", "Russia"],
        correctAnswer: 3
    },
    {
        question: "Sa është rrënja katrore e 64?",
        options: ["6", "7", "8", "9"],
        correctAnswer: 2
    },
    {
        question: "Cili është simboli kimik i arit?",
        options: ["Au", "Ag", "Fe", "Pb"],
        correctAnswer: 0
    },
    {
        question: "Cili është maja më e lartë në botë?",
        options: ["K2", "Mount Everest", "Mount Kilimanjaro", "Mont Blanc"],
        correctAnswer: 1
    },
    {
        question: "Kush është planeti më i vogël në sistemin tonë diellor?",
        options: ["Mercury", "Venus", "Mars", "Pluto"],
        correctAnswer: 0
    },
    {
        question: "Cili element kimik ka numrin 1?",
        options: ["Helium", "Oxygen", "Hydrogen", "Carbon"],
        correctAnswer: 2
    },
    {
        question: "Kush është njeriu i parë që zbarkoi në Hënë?",
        options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"],
        correctAnswer: 1
    },
    {
        question: "Cili është lumi më i gjatë në botë?",
        options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        correctAnswer: 1
    },
    {
        question: "Cili element përfaqësohet me simbolin 'O'?",
        options: ["Oxygen", "Osmium", "Ozone", "Oganesson"],
        correctAnswer: 0
    },
    {
        question: "Kush është kryeqyteti i Japonisë?",
        options: ["Beijing", "Seoul", "Tokyo", "Kyoto"],
        correctAnswer: 2
    },

    {
        question: "Cili është kontinentin më i vogël?",
        options: ["Asia", "Africa", "Australia", "Europe"],
        correctAnswer: 2
    },
    {
        question: "Cili është shteti më i populluar në botë?",
        options: ["India", "China", "United States", "Brazil"],
        correctAnswer: 1
    },
    {
        question: "Cili është vendi me shpejtësinë më të lartë të trenit në botë?",
        options: ["Japan", "France", "Germany", "China"],
        correctAnswer: 3
    },
    {
        question: "Cili është lloji i ngjalës që gjendet në detet e ftohta?",
        options: ["Freshwater eel", "Moray eel", "Anglerfish", "Saltwater eel"],
        correctAnswer: 3
    },
    {
        question: "Cili është tipi më i madh i gjarprit?",
        options: ["Boa constrictor", "Anaconda", "Cobra", "Python"],
        correctAnswer: 1
    },
    {
        question: "Cili është njeriu i parë që udhëhoqi një fluturim me aeroplan?",
        options: ["Orville Wright", "Wilbur Wright", "Charles Lindbergh", "Amelia Earhart"],
        correctAnswer: 0
    },
    {
        question: "Cili është përdorimi kryesor i energjisë diellore?",
        options: ["Produkti i elektricitetit", "Ngrohja e ujit", "Ndriçimi i shtëpive", "Ngrohja e hapësirave"],
        correctAnswer: 0
    },
    {
        question: "Kush është shkencëtari që shpiku rreze X?",
        options: ["Isaac Newton", "Albert Einstein", "Marie Curie", "Wilhelm Röntgen"],
        correctAnswer: 3
    },
    {
        question: "Cili është qyteti më i populluar në botë?",
        options: ["Tokyo", "New York", "Beijing", "Mumbai"],
        correctAnswer: 0
    },
    {
        question: "Cili është metal më i përdorur në ndërtimin e makinave?",
        options: ["Alumini", "Hekur", "Çelik", "Platin"],
        correctAnswer: 2
    },
    {
        question: "Cili është insekti që prodhon mjaltë?",
        options: ["Bletë", "Muzgu", "Përshkues", "Peshk"],
        correctAnswer: 0
    },
    {
        question: "Cili është thelbi i mësimit të parë të shkencave?",
        options: ["Fizika", "Kimia", "Matematika", "Biologjia"],
        correctAnswer: 3
    },
    {
        question: "Cili është qyteti që ka më shumë muze në botë?",
        options: ["Londër", "Parisi", "New York", "Vjena"],
        correctAnswer: 1
    },
    {
        question: "Cili është ngjyra e dytë e më e përdorur për ndriçim pas të kuqes?",
        options: ["Blu", "Jeshil", "Portokalli", "Vjollcë"],
        correctAnswer: 2
    },
    {
        question: "Cili është më i lartë: Everest apo K2?",
        options: ["Everest", "K2", "Janë të njëjtë", "K2 është më i lartë se Everest"],
        correctAnswer: 0
    }
];



function loadQuestion() {
    const question = questions[currentQuestionIndex];
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const questionNumberElement = document.getElementById('question-number');
    
    // Display the question number
    questionNumberElement.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;

    // Display the question text
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';
    question.options.forEach((option, index) => {
        const li = document.createElement('li');
        li.textContent = option;
        li.onclick = () => checkAnswer(index, li);
        optionsElement.appendChild(li);
    });

    // Start the timer
    startTimer();
}

function startTimer() {
    timeLeft = 7; // Reset timer for each question
    document.getElementById('timer').textContent = `Time Left: ${timeLeft}s`;

    // Update the timer every second
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = `Time Left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer); // Stop the timer
            nextQuestion(); // Move to the next question
        }
    }, 1000);
}

function checkAnswer(selectedIndex, optionElement) {
    const question = questions[currentQuestionIndex];

    // Highlight the selected option
    if (selectedIndex === question.correctAnswer) {
        score++;
        optionElement.style.backgroundColor = 'green'; // Correct answer
        correctAnswers++;
    } else {
        optionElement.style.backgroundColor = 'red'; // Wrong answer
    }

    // Disable the options after selection
    Array.from(optionElement.parentElement.children).forEach(child => {
        child.style.pointerEvents = 'none';
    });

    // Move to the next question
    setTimeout(nextQuestion, 1000); // Go to the next question after a short delay
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('score').textContent = `You got ${correctAnswers} out of ${questions.length} correct!`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    correctAnswers = 0; // Reset correct answers count
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    loadQuestion();
}

// Start the quiz
loadQuestion();


