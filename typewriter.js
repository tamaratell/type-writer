const sentence = "hello there from lighthouse labs";

const animateSentence = (sentence) => {
  let count = 0;
  for (const letter of sentence) {
    count += 100;
    setTimeout(() => {
      process.stdout.write(letter);
    }, count);
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, (sentence.length) * 100);
};

animateSentence(sentence);

