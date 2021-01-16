chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  const re = new RegExp("bear", "gi");
  const matches = document.documentElement.innerHTML.match(re);
  sendResponse({ count: matches.lengh });
});

// The minimum prediction confidence.
const threshold = 0.9;

function detectModel(threshold) {
    toxicity.load(threshold).then((model) => {
        // where the sentences are going to be found and stored for prediction
        const sentences = ["you suck"];
      
        model.classify(sentences).then((predictions) => {
          // `predictions` is an array of objects, one for each prediction head,
          // that contains the raw probabilities for each input along with the
          // final prediction in `match` (either `true` or `false`).
          // If neither prediction exceeds the threshold, `match` is `null`.
      
          console.log(predictions);
        });
      });
}


