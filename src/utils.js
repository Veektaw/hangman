import { words } from "./words";

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

export function getFarewellText(language) {
  const options = [
    `Farewell, ${language}`,
    `Adios, ${language}`,
    `R.I.P., ${language}`,
    `We'll miss you, ${language}`,
    `Oh no, not ${language}!`,
    `${language} bites the dust`,
    `Gone but not forgotten, ${language}`,
    `The end of ${language} as we know it`,
    `Off into the sunset, ${language}`,
    `${language}, it's been real`,
    `${language}, your watch has ended`,
    `${language} has left the building`,
    `So long, ${language}`,
    `Goodbye, ${language}`,
    `See ya later, ${language}`,
    `Until we meet again, ${language}`,
    `It's been a slice, ${language}`,
    `Sayonara, ${language}`,
    `Au revoir, ${language}`,
    `Ciao, ${language}`,
    `Auf wiedersehen, ${language}`,
    `Arrivederci, ${language}`,
    `Adieu, ${language}`,
    `Later gator, ${language}`,
    `Peace out, ${language}`,
    `Take care, ${language}`,
    `Fare thee well, ${language}`,
    `Hasta la vista, baby, ${language}`,
    `It's curtains for ${language}`,
    `The final chapter for ${language}`,
    `${language} has sailed into the unknown`,
    `May your memory be a blessing, ${language}`,
    `We'll remember you fondly, ${language}`,
    `You were one of a kind, ${language}`,
    `Rest in power, ${language}`,
    `You've run your course, ${language}`,
    `Your time is up, ${language}`,
    `It's time for you to move on, ${language}`,
    `You've served your purpose, ${language}`,
    `That's all she wrote, ${language}`,
    `And so, it ends, ${language}`,
    `The story of ${language} has come to a close`,
    `Finis, ${language}`,
    `The party's over for ${language}`,
    `Lights out for ${language}`,
    `Game over for ${language}`,
    `It's the end of the road for ${language}`,
    `Curtain call for ${language}`,
    `Time to say goodbye to ${language}`,
  ];

  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}
