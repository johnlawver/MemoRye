export const say = (utterance) => {
  var msg = new SpeechSynthesisUtterance(utterance);
  speechSynthesis.speak(msg);
};

export const randomChoice = (choicesArray) => {
  const randomIndex = (length) => {
    return Math.floor(Math.random() * length);
  };

  const index = randomIndex(choicesArray.length);
  return choicesArray[index];
};
