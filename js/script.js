async function typeSentence(sentence, eleRef, delay = 80) {
  const letters = sentence.split("");
  let i = 0;
  while(i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++
  }
  return;
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function deleteSentence(eleRef) {
  const sentence = $(eleRef).html();
  const letters = sentence.split("");
  let i = 0;
  while(letters.length > 0) {
    await waitForMs(80);
    letters.pop();
    $(eleRef).html(letters.join(""));
  }
}

const carouselText = [
  {text: "From" },
  {text: "Industrial mechanic"},
  {text: "to "},
  {text: "Full-Stack-Developer."}
]

async function carousel(carouselList, eleRef) {
    var i = 0;
    while(true) {
      //updateFontColor(eleRef, carouselList[i].color)
      await typeSentence(carouselList[i].text, eleRef);
      await waitForMs(800);
      await deleteSentence(eleRef);
      await waitForMs(300);
      i++
      if(i >= carouselList.length) {i = 0;}
    }
}

function updateFontColor(eleRef, color) {
  $(eleRef).css('color', color);
}

$( document ).ready(async function() {
  carousel(carouselText, '#sentence')
});