console.log("content script running...");

require('@tensorflow/tfjs');
const toxicity = require('@tensorflow-models/toxicity');

console.log("tfjs loaded.")

const threshold = 0.9;
let texts = document.getElementsByTagName('p');

for(elt of texts) {

  toxicity.load(threshold).then(model => {
    const sentences = [elt];
    
    model.classify(sentences).then(predictions => {
      console.log(predictions);
    });
  });

  if(chrome.extension.match(sentences)){
    elt.style['background-color'] = 'yellow';
  }
}

const re = new RegExp("bear", "gi");
const matches = document.documentElement.innerHTML.match(re) || [];

chrome.runtime.sendMessage({
  url: window.location.href,
  count: matches.length,
});
