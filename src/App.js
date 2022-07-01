import React, { useState } from "react";
import "./styles.css";
//var Username = prompt("Give me youe name :");
var emojiDictionary = {
  "😉": "winking",
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "🤔": "confused",
  "🤮": "puke",
  "🥱": "bored",
  "🤡": "clown",
  "😋": "yummy",
  "🥰": "smiling face with hearts",
  "😂": "laughing with tears of joy",
  "🤣": "rolling on the floor laughing",
  "🥺": "pleading face",
  "😵‍": "confused and exhausted",
  "😭": "crying",
  "😰": "anxious",
  "😪": "sleepy",
  "😙": "kissing face",
  "🤩": "star struck",
  "😘": "face blowing a kiss",
  "😜": "wink face with tongue",
  "🤪": "zany face",
  "😝": "laughing with tongue",
  "🤗": "hugging face",
  "🤐": "zipped/shut face",
  "🤫": "shushing face",
  "🤭": "smiling with habd over mouth",
  "🤑": "money minded face",
  "🤨": "suspicious",
  "😐": "expressionless face",
  "🙄": "eye rolling face",
  "😒": "unamused face",
  "😬": "grimacing face",
  "🤥": "lying face",
  "😶": "face without mouth",
  "😌": "calm face",
  "🤤": "drooling face",
  "😴": "sleepy face",
  "😷": "face with mask",
  "🤒": "face with thermometer",
  "🤕": "head bandage",
  "🤢": "nauseated",
  "🤧": "sneezing",
  "🥵": "hot face",
  "🥶": "cold face",
  "🥴": "woozy face",
  "🤯": "head exploding",
  "🥳": "partying face",
  "😎": "smiling with sunglasses",
  "🤓": "nerd face",
  "🤬": "abusing face",
  "😠": "angry face",
  "😫": "irritated face",
  "😡": "red hot angry face",
  "🤠": "cowboy hat face",
  "😲": "ashtonished",
  "🐭": "mouse face",
  "🐷": "pig face",
  "🦁": "lion face",
  "🐯": "tiger face",
  "🐶": "dog face",
  "🐱": "cat face",
  "🔥": "fire",
  "💛": "yellow heart",
  "💚": "green heart",
  "💙": "blue heart",
  "💜": "purple heart"
};

export default function App() {
  const [Meaning, setMeanging] = useState("");
  function emojiHandler(event) {
    var emojiName = event.target.value;
    var Meaning = emojiDictionary[emojiName];
    setMeanging(Meaning);
  }
  return (
    <div className="App">
      <h1>Know your Emoji's</h1>
      <input onChange={emojiHandler} />
      <h2> {Meaning}</h2>
    </div>
  );
}
