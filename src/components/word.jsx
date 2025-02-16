import React from "react";

export default function Word() {
  const [currentWord, setCurrentWord] = React.useState("react");
  const letterElements = currentWord.split("").map((letter, index) => (
    <span className="letter" key={index}>
      {letter.toUpperCase()}
    </span>
  ));
  return (
    <>
      <section className="word">{letterElements}</section>
    </>
  );
}
