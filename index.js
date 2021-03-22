const main = document.querySelector(".main");
const button = document.querySelector("button");
const input = document.querySelector("input");

const quotes = [
  "The most important conversations you’ll ever have are the ones you’ll have with yourself. You wake up with them, you walk around with them, you go to bed with them, and eventually, you act on them. Whether they be good or bad. We are all our own worst haters and doubters because self-doubt is a natural reaction to any bold attempt to change your life for the better. You can’t stop it from blooming in your brain, but you can neutralize it, and all the other external chatter by asking, What if? ",
  "Motivation is crap. Motivation comes and goes. When you’re driven, whatever is in front of you will get destroyed. ",
  "The things that we decide to run from are the truth. When you make excuses, you’re running from the truth. ",
  "In life, there is no gift as overlooked or inevitable as failure. I’ve had quite a few and have learned to relish them because if you do the forensics you’ll find clues about where to make adjustments and how to eventually accomplish your task. ",
  "It’s easier to accept the fact that you’re just not good enough. We all have a lot more than we think we have. ",
  "Life is one big tug of war between mediocrity and trying to find your best self. ",
  "Suffering is a test. That’s all it is. Suffering is the true test of life. ",
  "You’re gonna fail, you’re gonna be in your head, and you’re gonna be saying I’m not good enough. It’s about how you overcome that. ",
  "The Buddha famously said that life is suffering. I’m not a Buddhist, but I know what he meant and so do you. To exist in this world, we must contend with humiliation, broken dreams, sadness, and loss. That’s just nature. Each specific life comes with its own personalized portion of pain. It’s coming for you. You can’t stop it. And you know it. ",
  "Then I thought of an English middle-distance runner from back in the day named Roger Bannister. When Bannister was trying to break the four-minute mile in the 1950s, experts told him it couldn’t be done, but that didn’t stop him. He failed again and again, but he persevered, and when he ran his historic mile in 3:59.4 on May 6, 1954, he didn’t just break a record, he broke open the floodgates simply by proving it possible. Six weeks later, his record was eclipsed, and by now over 1,000 runners have done what was once thought to be beyond human capability. ",
  "To make fun of or try to intimidate someone they didn’t even know based on race alone was a clear indication that something was very wrong with them, not me. ",
  "You gotta start your journey. It may suck, but eventually, you will come out the other side on top. ",
  "Don’t worry about the elements around you and what’s going on. You gotta get out there and get it. ",
  "You don't know me son. ",
];

const randomNumber = () => {
  return Math.floor(Math.random() * quotes.length);
};

const getGoggins = () => {
  let quoteArray = [];

  for (let i = 0; i < input.value; i++) {
    let number = randomNumber();

    console.log(number);

    quoteArray.push(quotes[number]);
  }

  console.log(quoteArray);

  const HTML = quoteArray
    .map((qu) => {
      return `${qu}`;
    })
    .join("");
  console.log(HTML);
  main.textContent = HTML;

  input.value = "";
};

button.addEventListener("click", getGoggins);
