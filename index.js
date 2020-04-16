const http = require("./http");

function translate(text) {
  http.post('/nlp/nlp_texttranslate ', {
      text: text,
      source: "zh",
      target: "en"
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => {});
}
function chat(msg) {
  http.post('/nlp/nlp_textchat ', {
    session: 'text',
    question: msg,
  })
  .then(data => {
    console.log(data);
    return data
  })
  .catch(err => {});
}

chat("你是不是喜欢鸡小璇")
