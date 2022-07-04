export const say = (utterance) => {
  var msg = new SpeechSynthesisUtterance(utterance);
  speechSynthesis.speak(msg);
};
