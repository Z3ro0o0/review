document.addEventListener("DOMContentLoaded", function () {
  // Sample questions
  const allQuestions = [
    {
      question: "What is the capital of France?",
      choices: ["A. Paris", "B. Berlin", "C. Madrid", "D. Rome"],
      correctAnswer: "A. Paris",
    },
    {
      question: "Who is the author of Harry Potter series?",
      choices: [
        "A. J.K. Rowling",
        "B. George R.R. Martin",
        "C. Stephen King",
        "D. J.R.R. Tolkien",
      ],
      correctAnswer: "A. J.K. Rowling",
    },
    {
      question: "What is the largest mammal in the world?",
      choices: [
        "A. Elephant",
        "B. Blue Whale",
        "C. Giraffe",
        "D. Hippopotamus",
      ],
      correctAnswer: "B. Blue Whale",
    },
    {
      question: "In which year did the Titanic sink?",
      choices: ["A. 1905", "B. 1912", "C. 1920", "D. 1931"],
      correctAnswer: "B. 1912",
    },
    {
      question: "What is the capital of Japan?",
      choices: ["A. Beijing", "B. Tokyo", "C. Seoul", "D. Bangkok"],
      correctAnswer: "B. Tokyo",
    },
    {
      question: "Who painted the Mona Lisa?",
      choices: [
        "A. Vincent van Gogh",
        "B. Pablo Picasso",
        "C. Leonardo da Vinci",
        "D. Michelangelo",
      ],
      correctAnswer: "C. Leonardo da Vinci",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["A. Venus", "B. Mars", "C. Jupiter", "D. Saturn"],
      correctAnswer: "B. Mars",
    },
    {
      question: "What is the currency of Brazil?",
      choices: ["A. Peso", "B. Dollar", "C. Real", "D. Euro"],
      correctAnswer: "C. Real",
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      choices: [
        "A. William Shakespeare",
        "B. Jane Austen",
        "C. Charles Dickens",
        "D. Mark Twain",
      ],
      correctAnswer: "A. William Shakespeare",
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      choices: ["A. Oxygen", "B. Gold", "C. Silver", "D. Uranium"],
      correctAnswer: "A. Oxygen",
    },
    {
      question: "What is the world's longest river?",
      choices: ["A. Nile", "B. Amazon", "C. Yangtze", "D. Mississippi"],
      correctAnswer: "B. Amazon",
    },
    {
      question: "Who invented the telephone?",
      choices: [
        "A. Alexander Graham Bell",
        "B. Thomas Edison",
        "C. Nikola Tesla",
        "D. Marie Curie",
      ],
      correctAnswer: "A. Alexander Graham Bell",
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      choices: ["A. China", "B. South Korea", "C. Japan", "D. Vietnam"],
      correctAnswer: "C. Japan",
    },
    {
      question: "What is the largest ocean on Earth?",
      choices: [
        "A. Atlantic Ocean",
        "B. Indian Ocean",
        "C. Southern Ocean",
        "D. Pacific Ocean",
      ],
      correctAnswer: "D. Pacific Ocean",
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      choices: [
        "A. J.K. Rowling",
        "B. Harper Lee",
        "C. Ernest Hemingway",
        "D. F. Scott Fitzgerald",
      ],
      correctAnswer: "B. Harper Lee",
    },
  ];

  // Shuffle the array of questions
  const shuffledQuestions = shuffleArray(allQuestions);

  // Take the first 5 questions
  const selectedQuestions = shuffledQuestions.slice(0, 5);

  const quizForm = document.getElementById("quizForm");
  const resultDisplay = document.getElementById("result");

  // Populate the question list
  selectedQuestions.forEach((question, index) => {
    const questionContainer = document.createElement("div");
    questionContainer.innerHTML = `<p>${question.question}</p>`;

    question.choices.forEach((choice, choiceIndex) => {
      const choiceId = `q${index}c${choiceIndex}`;
      const choiceInput = document.createElement("input");
      choiceInput.type = "radio";
      choiceInput.name = `question${index}`;
      choiceInput.id = choiceId;
      choiceInput.value = choice;

      const choiceLabel = document.createElement("label");
      choiceLabel.textContent = choice;
      choiceLabel.htmlFor = choiceId;

      const choiceWrapper = document.createElement("div");
      choiceWrapper.classList.add("choice-wrapper");
      choiceWrapper.appendChild(choiceInput);
      choiceWrapper.appendChild(choiceLabel);

      questionContainer.appendChild(choiceWrapper);
    });

    quizForm.appendChild(questionContainer);
  });

  // Function to check answers
  window.checkAnswers = function () {
    let correctCount = 0;

    selectedQuestions.forEach((question, index) => {
      const selectedAnswer = document.querySelector(
        `input[name="question${index}"]:checked`
      );

      if (selectedAnswer && selectedAnswer.value === question.correctAnswer) {
        correctCount++;
      }
    });

    resultDisplay.textContent = `You got ${correctCount} out of ${selectedQuestions.length} correct!`;
  };

  // Function to shuffle an array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
});
