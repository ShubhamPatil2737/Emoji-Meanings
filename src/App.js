import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "๐": "winking",
  "๐": "smiling",
  "๐ณ": "disbelief",
  "๐": "sad",
  "๐ฅก": "takeout box",
  "โค๏ธ": "love",
  "๐": "annoyance",
  "๐ค": "confused",
  "๐คฎ": "puke",
  "๐ฅฑ": "bored",
  "๐คก": "clown",
  "๐": "yummy",
  "๐ฅฐ": "smiling face with hearts",
  "๐": "laughing with tears of joy",
  "๐คฃ": "rolling on the floor laughing",
  "๐ฅบ": "pleading face",
  "๐ตโ": "confused and exhausted",
  "๐ญ": "crying",
  "๐ฐ": "anxious",
  "๐ช": "sleepy",
  "๐": "kissing face",
  "๐คฉ": "star struck",
  "๐": "face blowing a kiss",
  "๐": "wink face with tongue",
  "๐คช": "zany face",
  "๐": "laughing with tongue",
  "๐ค": "hugging face",
  "๐ค": "zipped/shut face",
  "๐คซ": "shushing face",
  "๐คญ": "smiling with habd over mouth",
  "๐ค": "money minded face",
  "๐คจ": "suspicious",
  "๐": "expressionless face",
  "๐": "eye rolling face",
  "๐": "unamused face",
  "๐ฌ": "grimacing face",
  "๐คฅ": "lying face",
  "๐ถ": "face without mouth",
  "๐": "calm face",
  "๐คค": "drooling face",
  "๐ด": "sleepy face",
  "๐ท": "face with mask",
  "๐ค": "face with thermometer",
  "๐ค": "head bandage",
  "๐คข": "nauseated",
  "๐คง": "sneezing",
  "๐ฅต": "hot face",
  "๐ฅถ": "cold face",
  "๐ฅด": "woozy face",
  "๐คฏ": "head exploding",
  "๐ฅณ": "partying face",
  "๐": "smiling with sunglasses",
  "๐ค": "nerd face",
  "๐คฌ": "abusing face",
  "๐ ": "angry face",
  "๐ซ": "irritated face",
  "๐ก": "red hot angry face",
  "๐ค ": "cowboy hat face",
  "๐ฒ": "ashtonished",
  "๐ญ": "mouse face",
  "๐ท": "pig face",
  "๐ฆ": "lion face",
  "๐ฏ": "tiger face",
  "๐ถ": "dog face",
  "๐ฑ": "cat face",
  "๐ฅ": "fire",
  "๐": "yellow heart",
  "๐": "green heart",
  "๐": "blue heart",
  "๐": "purple heart"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1> know your emojis!!</h1>

      <input
        className="input-box"
        onChange={emojiInputHandler}
        placeholder="put your emoji here to know its meaning"
      ></input>

      <h2>{meaning}</h2>

      <h3> emojis we know </h3>
      <div
        style={{
          width: "70%",
          margin: "auto",
          padding: "1rem",
          cursor: "pointer"
        }}
      >
        {emojisWeKnow.map(function (emoji) {
          return (
            <span
              className="emoji-span"
              onClick={() => emojiClickHandler(emoji)}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
