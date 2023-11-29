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
    {
      question: "What condition determines the choice of forecasting models?",
      choices: [
        "A. Availability of historical data",
        "B. Economic feasibility",
        "C. Operational feasibility",
        "D. Tangible benefits",
      ],
      correctAnswer: "A. Availability of historical data",
    },
    {
      question:
        "Which method is used for forecasting when historical data is unavailable?",
      choices: [
        "A. Estimates from the sales force",
        "B. Surveys to estimate customer demand",
        "C. Delphi studies",
        "D. All of the above",
      ],
      correctAnswer: "D. All of the above",
    },
    {
      question:
        "What is the differentiation between classes of techniques for forecasting with available historical data?",
      choices: [
        "A. Conditional or unconditional",
        "B. Economic or operational",
        "C. Tangible or intangible",
        "D. Sure or unsure",
      ],
      correctAnswer: "A. Conditional or unconditional",
    },
    {
      question:
        "What are tangible benefits in the context of information systems?",
      choices: [
        "A. Measurable advantages in dollars",
        "B. Difficult-to-measure advantages",
        "C. Historical data",
        "D. Judgment methods",
      ],
      correctAnswer: "A. Measurable advantages in dollars",
    },
    {
      question:
        "Which of the following is an example of an intangible benefit?",
      choices: [
        "A. Increase in processing speed",
        "B. Access to inaccessible information",
        "C. Improved decision-making process",
        "D. Decrease in employee time",
      ],
      correctAnswer: "C. Improved decision-making process",
    },
    {
      question: "What do tangible costs include?",
      choices: [
        "A. Cost of equipment and resources",
        "B. Intangible costs",
        "C. Cost of employee time",
        "D. Unmeasurable costs",
      ],
      correctAnswer: "A. Cost of equipment and resources",
    },
    {
      question:
        "Which method can a systems analyst use to determine the break-even capacity of a proposed information system?",
      choices: [
        "A. Cash-flow analysis",
        "B. Break-even analysis",
        "C. Present value analysis",
        "D. Earned value management",
      ],
      correctAnswer: "B. Break-even analysis",
    },
    {
      question: "What does the break-even point represent in a project?",
      choices: [
        "A. The point of maximum profit",
        "B. The point of minimum cost",
        "C. The point of project initiation",
        "D. The point where total costs intersect",
      ],
      correctAnswer: "D. The point where total costs intersect",
    },
    {
      question:
        "Which analysis examines the direction, size, and pattern of cash flow?",
      choices: [
        "A. Break-even analysis",
        "B. Cash-flow analysis",
        "C. Present value analysis",
        "D. Time estimation analysis",
      ],
      correctAnswer: "B. Cash-flow analysis",
    },
    {
      question: "What does present value analysis assess?",
      choices: [
        "A. Tangible benefits",
        "B. Intangible benefits",
        "C. Economic outlays and revenues over time",
        "D. Project productivity goals",
      ],
      correctAnswer: "C. Economic outlays and revenues over time",
    },
    {
      question: "When is the use of break-even analysis recommended?",
      choices: [
        "A. When benefits substantially improve with the proposed system",
        "B. When the project needs to be justified in terms of cost",
        "C. When tangible benefits form a convincing argument",
        "D. When payback period is long",
      ],
      correctAnswer:
        "B. When the project needs to be justified in terms of cost",
    },
    {
      question:
        "What approach is suitable when improved tangible benefits form a convincing argument for the proposed system?",
      choices: [
        "A. Break-even analysis",
        "B. Payback analysis",
        "C. Cash-flow analysis",
        "D. Present value analysis",
      ],
      correctAnswer: "B. Payback analysis",
    },
    {
      question: "When is cash-flow analysis recommended?",
      choices: [
        "A. When tangible benefits are convincing",
        "B. When the project is not expensive",
        "C. When the business would not be significantly affected by funds drain",
        "D. When tangible benefits do not improve",
      ],
      correctAnswer:
        "C. When the business would be significantly affected by a large drain on funds",
    },
    {
      question: "In what situations is present value analysis beneficial?",
      choices: [
        "A. When the payback period is short",
        "B. When the cost of borrowing money is low",
        "C. When tangible benefits are convincing",
        "D. When the payback period is long or the cost of borrowing money is high",
      ],
      correctAnswer:
        "D. When the payback period is long or the cost of borrowing money is high",
    },
    {
      question:
        "What are the properties of tasks in a work breakdown structure (WBS)?",
      choices: [
        "A. Multiple deliverables from each task",
        "B. Each task assigned to multiple individuals",
        "C. Each task has no responsible person",
        "D. Each task contains one deliverable and can be assigned to a single individual or group",
      ],
      correctAnswer:
        "D. Each task contains one deliverable and can be assigned to a single individual or group",
    },
    {
      question: "What is the purpose of a work breakdown structure (WBS)?",
      choices: [
        "A. To complicate project management",
        "B. To break down tasks into smaller activities",
        "C. To confuse team members",
        "D. To increase project cost",
      ],
      correctAnswer: "B. To break down tasks into smaller activities",
    },
    {
      question: "What does the process of analysis and design become unwieldy?",
      choices: [
        "A. When using analogies",
        "B. When estimating time",
        "C. When the system being developed is large",
        "D. When using time estimation software",
      ],
      correctAnswer: "C. When the system being developed is large",
    },
    {
      question: "What is one of the difficult tasks in project management?",
      choices: [
        "A. Break-even analysis",
        "B. Forecasting benefits",
        "C. Time estimation",
        "D. Tangible costs estimation",
      ],
      correctAnswer: "C. Time estimation",
    },
    {
      question:
        "Which approach is used for cost estimation when a project requires something unique?",
      choices: [
        "A. Top-down approach",
        "B. Bottom-up approach",
        "C. Parametric modeling",
        "D. Break-even analysis",
      ],
      correctAnswer: "B. Bottom-up approach",
    },
    {
      question: "What is parametric modeling in cost estimation?",
      choices: [
        "A. Making estimates for project parameters",
        "B. Estimating costs using historical data",
        "C. Estimating costs without historical data",
        "D. Making estimates for project features",
      ],
      correctAnswer: "A. Making estimates for project parameters",
    },
    {
      question: "What does the top-down approach to cost estimation rely on?",
      choices: [
        "A. Historical data",
        "B. Unique project features",
        "C. Parametric modeling",
        "D. Forecasting benefits",
      ],
      correctAnswer: "A. Historical data",
    },
    {
      question: "When is customization possible in cost estimation?",
      choices: [
        "A. Top-down approach",
        "B. Bottom-up approach",
        "C. Parametric modeling",
        "D. Forecasting benefits",
      ],
      correctAnswer: "B. Bottom-up approach",
    },
    {
      question: "What does the top-down approach to cost estimation rely on?",
      choices: [
        "A. Historical data",
        "B. Unique project features",
        "C. Parametric modeling",
        "D. Forecasting benefits",
      ],
      correctAnswer: "A. Historical data",
    },
    {
      question: "What does the bottom-up approach to cost estimation involve?",
      choices: [
        "A. Using historical data",
        "B. Making estimates for project parameters",
        "C. Asking each responsible project team member to estimate costs",
        "D. Estimating costs based on analogies",
      ],
      correctAnswer:
        "C. Asking each responsible project team member to estimate costs",
    },
    {
      question:
        "What does the bottom-up approach to cost estimation depend on?",
      choices: [
        "A. Historical data",
        "B. Unique project features",
        "C. The abilities of team members",
        "D. Parametric modeling",
      ],
      correctAnswer: "C. The abilities of team members",
    },
    {
      question:
        "What is an advantage of the top-down approach to cost estimation?",
      choices: [
        "A. Relies on team member abilities",
        "B. Customization is possible",
        "C. Considers historical data",
        "D. Involves parametric modeling",
      ],
      correctAnswer: "C. Considers historical data",
    },
    {
      question:
        "What method involves making estimates for each project parameter?",
      choices: [
        "A. Top-down approach",
        "B. Bottom-up approach",
        "C. Parametric modeling",
        "D. Earned value management",
      ],
      correctAnswer: "C. Parametric modeling",
    },
    {
      question: "What does managing time using expediting involve?",
      choices: [
        "A. Time estimation techniques",
        "B. Controlling costs using earned value management",
        "C. Accelerating the completion of tasks",
        "D. Comparing costs and benefits",
      ],
      correctAnswer: "C. Accelerating the completion of tasks",
    },
    {
      question:
        "What does controlling costs using earned value management involve?",
      choices: [
        "A. Time estimation techniques",
        "B. Break-even analysis",
        "C. Assessing direction, size, and pattern of cash flow",
        "D. Measuring project performance against the plan",
      ],
      correctAnswer: "D. Measuring project performance against the plan",
    },
    {
      question: "What is the purpose of assembling a project team?",
      choices: [
        "A. To increase project cost",
        "B. To decrease project productivity",
        "C. To complete projects on time and within budget",
        "D. To complicate project management",
      ],
      correctAnswer: "C. To complete projects on time and within budget",
    },
    {
      question:
        "What is essential for a task to have in a work breakdown structure (WBS)?",
      choices: [
        "A. Multiple deliverables",
        "B. Multiple responsible persons",
        "C. Lack of monitoring and controlling performance",
        "D. A single deliverable and a single responsible person",
      ],
      correctAnswer: "D. A single deliverable and a single responsible person",
    },
    {
      question:
        "What becomes unwieldy when the system being developed is large?",
      choices: [
        "A. Break-even analysis",
        "B. Time estimation",
        "C. Cash-flow analysis",
        "D. Analysis and design process",
      ],
      correctAnswer: "D. Analysis and design process",
    },
    {
      question: "What is one of the difficult tasks in project management?",
      choices: [
        "A. Break-even analysis",
        "B. Forecasting benefits",
        "C. Time estimation",
        "D. Tangible costs estimation",
      ],
      correctAnswer: "C. Time estimation",
    },
    {
      question:
        "Which approach is used for cost estimation when a project requires something unique?",
      choices: [
        "A. Top-down approach",
        "B. Bottom-up approach",
        "C. Parametric modeling",
        "D. Break-even analysis",
      ],
      correctAnswer: "B. Bottom-up approach",
    },
    {
      question: "What is parametric modeling in cost estimation?",
      choices: [
        "A. Making estimates for project parameters",
        "B. Estimating costs using historical data",
        "C. Estimating costs without historical data",
        "D. Making estimates for project features",
      ],
      correctAnswer: "A. Making estimates for project parameters",
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
