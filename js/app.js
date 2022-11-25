const quizData = [
  {
    question:
      "How many iron man suits did tony stark create in the cinematic universe? ",
    a: "3000",
    b: "60",
    c: "45",
    d: "85",
    correct: "d",
  },
  {
    question: "Name of Thor's original hammer?",
    a: "mjolnir",
    b: "strom breaker",
    c: "hammer killer",
    d: "wave breaker",
    correct: "a",
  },
  {
    question: "Where was Mjolnir forged?",
    a: "sakaar",
    b: "Nidavellir",
    c: "Asgardian",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "Father of the God of Thunder?",
    a: "loki",
    b: "Odin",
    c: "Frigga",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "Who is the god of mischief?",
    a: "loki",
    b: "Odin",
    c: "thor",
    d: "tony",
    correct: "a",
  },
];
let index = 0;
let correct = 0,
  incorrect = 0,
  total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']");
const loadQuestion = () => {
  if (total === index) {
    return quizEnd();
  }
  reset();
  const data = quizData[index];
  questionBox.innerHTML = `${index + 1}) ${data.question}`;
  allInputs[0].nextElementSibling.innerText = data.a;
  allInputs[1].nextElementSibling.innerText = data.b;
  allInputs[2].nextElementSibling.innerText = data.c;
  allInputs[3].nextElementSibling.innerText = data.d;
};

document.querySelector("#submit").addEventListener("click", function () {
  const data = quizData[index];
  const ans = getAnswer();
  if (ans === data.correct) {
    correct++;
  } else {
    incorrect++;
  }
  index++;
  loadQuestion();
});
document.querySelector("#back").addEventListener("click", function () {
    window.history.back()
})
const getAnswer = () => {
  let ans;
  allInputs.forEach((inputEl) => {
    if (inputEl.checked) {
      ans = inputEl.value;
    }
  });
  return ans;
};

const reset = () => {
  allInputs.forEach((inputEl) => {
    inputEl.checked = false;
  });
};

const quizEnd = () => {
  // console.log(document.getElementsByClassName("container"));
  document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`;
};
loadQuestion(index);
