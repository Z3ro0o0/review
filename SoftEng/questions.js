document.addEventListener("DOMContentLoaded", function () {
  // Sample questions
  const allQuestions = [
    {
      question: "What initiates systems projects?",
      choices: [
        "A. Opportunities for improvement",
        "B. Technical feasibility",
        "C. Economic feasibility",
        "D. Operational feasibility",
      ],
      correctAnswer: "A. Opportunities for improvement",
    },
    {
      question:
        "What is the primary responsibility of a systems analyst during project initiation?",
      choices: [
        "A. Program coding",
        "B. Problem definition with users",
        "C. Hardware inventory",
        "D. Cloud computing evaluation",
      ],
      correctAnswer: "B. Problem definition with users",
    },
    {
      question:
        "What tools are commonly used for scheduling project activities?",
      choices: [
        "A. Mouse and keyboard",
        "B. Gantt charts and PERT",
        "C. Cloud computing",
        "D. BYOD options",
      ],
      correctAnswer: "B. Gantt charts and PERT",
    },
    {
      question:
        "Which feasibility focuses on adaptability and possibility of the proposed solution?",
      choices: [
        "A. Economic feasibility",
        "B. Technical feasibility",
        "C. Operational feasibility",
        "D. BYOD feasibility",
      ],
      correctAnswer: "B. Technical feasibility",
    },
    {
      question: "What does economic feasibility assess in a project?",
      choices: [
        "A. Adaptability of the solution",
        "B. Affordability of the project",
        "C. Human resources availability",
        "D. Willingness to use the system",
      ],
      correctAnswer: "B. Affordability of the project",
    },
    {
      question: "Operational feasibility primarily focuses on:",
      choices: [
        "A. System adaptability",
        "B. Human resources availability",
        "C. Cloud computing",
        "D. Economic viability",
      ],
      correctAnswer: "B. Human resources availability",
    },
    {
      question: "What is the purpose of inventorying computer hardware?",
      choices: [
        "A. To assess cloud computing options",
        "B. To avoid unnecessary purchases",
        "C. To evaluate vendor support",
        "D. To estimate workloads",
      ],
      correctAnswer: "B. To avoid unnecessary purchases",
    },
    {
      question:
        "What does COTS stand for in the context of software development?",
      choices: [
        "A. Customized Options for Technical Solutions",
        "B. Creating Operational Technical Systems",
        "C. Commercial Off-The-Shelf",
        "D. Cloud Operations and Technical Support",
      ],
      correctAnswer: "C. Commercial Off-The-Shelf",
    },
    {
      question: "What does SaaS stand for in the context of software services?",
      choices: [
        "A. Systematic and Adaptive Software Solutions",
        "B. Software as a Service",
        "C. Systems and Applications Support",
        "D. Secure Application and Software Services",
      ],
      correctAnswer: "B. Software as a Service",
    },
    {
      question:
        "When evaluating vendor support for software, what aspect is considered?",
      choices: [
        "A. BYOD options",
        "B. Cloud computing",
        "C. Technical feasibility",
        "D. Vendor's commitment to support",
      ],
      correctAnswer: "D. Vendor's commitment to support",
    },
    {
      question: "What is the purpose of the BYOD option in systems projects?",
      choices: [
        "A. To evaluate vendor support",
        "B. To assess economic feasibility",
        "C. To consider hardware and software needs",
        "D. To allow employees to use personal devices",
      ],
      correctAnswer: "D. To allow employees to use personal devices",
    },
    {
      question: "What does PERT stand for in project scheduling?",
      choices: [
        "A. Program Evaluation and Review Technique",
        "B. Project Enhancement and Resource Tracking",
        "C. Problem Evaluation and Resolution Tool",
        "D. Project Execution and Result Tracking",
      ],
      correctAnswer: "A. Program Evaluation and Review Technique",
    },
    {
      question:
        "What is the focus of estimating workloads in project management?",
      choices: [
        "A. Human resources availability",
        "B. Cloud computing options",
        "C. Economic viability",
        "D. Project resource requirements",
      ],
      correctAnswer: "D. Project resource requirements",
    },
    {
      question:
        "What does the term 'Bring Your Own Device (BYOD)' refer to in systems projects?",
      choices: [
        "A. Purchasing COTS software",
        "B. Renting time and space in the cloud",
        "C. Allowing employees to use personal devices",
        "D. Creating custom software",
      ],
      correctAnswer: "C. Allowing employees to use personal devices",
    },
    {
      question:
        "What is the role of a systems analyst during project initiation?",
      choices: [
        "A. Program coding",
        "B. Evaluating vendor support",
        "C. Problem definition with users",
        "D. Cloud computing assessment",
      ],
      correctAnswer: "C. Problem definition with users",
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
