import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 1,
    min: 1,
  },

  wordsPerSentence: {
    max: 30,
    min: 10,
  },
});

const validationRadio = () => {
  if (!paragraph.checked && !word.checked) {
    alert("Selecione uma opção.");
  }

  if (paragraph.checked) {
    range.max = "5";
    changeOption.innerHTML = "Parágrafos:";
    btn.addEventListener("click", () => {
      res.innerHTML = lorem.generateParagraphs(parseInt(range.value));
    });
  } else if (word.checked) {
    range.max = "20";
    changeOption.innerHTML = "Palavras:";
    btn.addEventListener("click", () => {
      res.innerHTML = lorem.generateWords(parseInt(range.value));
    });
  }
};

const btn = document.getElementById("btnGenerator");
const range = document.getElementById("range");
let rangeValue = document.getElementById("rangeValue");
let res = document.querySelector(".res");
let paragraph = document.getElementById("paragraph");
let word = document.getElementById("word");
let options = document.getElementById("choices");
let changeOption = document.getElementById("changeOption");

options.addEventListener("change", () => {
  validationRadio();
});

range.addEventListener("change", (e) => {
  rangeValue.innerHTML = e.target.value;
});

btn.addEventListener("click", validationRadio);

