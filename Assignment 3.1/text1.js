var headlines = [];
var hitwords= [
  "of",
  "on",
  "are",
  "is",
  "in",
  "with",
  "at",
  "for",
  "a",
  "an",
];

function preload() {

  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  var apikey = "e7c9b1b0399949c9b8a3e2da7f068cb4"; // see: https://developer.nytimes.com
  url += "?api-key=" + apikey;

  nytResponse = loadJSON(url);

}

function setup() {
  createCanvas(800, 1200);
  background(255);

  textSize(40);
  textAlign(LEFT);

  noLoop();

  extractHeadlines();
}

function draw() {
  background(255);
  textSize(20);

  var lineheight = 40;
  var margin = 20;
  translate(margin, margin);

  for (var i = 0; i < headlines.length; i++) {
    var words = split(headlines[i], ' ');

    var nextX = 0;

    for (var j = 0; j < words.length; j++) {
      if (hitwords.includes(words[j].toLowerCase())) {
        fill("#FFD073");
        words[j]='(^o^)';
        textSize(40); 
        ;
      } else {
        fill("#9FE4FC");
        textSize(20)

      }

      text(words[j]+' ', nextX, i*lineheight);
      nextX += textWidth(words[j]+' ');
    }
  }
}

function extractHeadlines() {


  for (var i = 0; i < nytResponse.results.length; i++) {
    var h = nytResponse.results[i].title;

    append(headlines, h);
  }

}