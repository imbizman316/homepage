import React from "react";
import Data from "./Data";
import Card from "./Card";
import { nanoid, random } from "nanoid";
import "./main.css";

export default function PortfolioContent() {
  const [randomCards, setRandomCards] = React.useState(Data);
  const [pickedCount, setPickedCount] = React.useState(0);
  const [isClear, setClear] = React.useState(false);
  const [highScore, setHighScore] = React.useState(
    JSON.parse(localStorage.getItem("Highscore")) || 0
  );

  const RandomizeCards = () => {
    let count = Data.length;
    let box = [];

    for (let i = 0; i < count; i++) {
      box.push(i);
    }

    let newCards = [];

    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * box.length);
      newCards.push(randomCards[box[randomIndex]]);
      if (box.length > 1) {
        box = box.filter((num) => {
          return num != box[randomIndex];
        });
      }
    }

    setRandomCards(newCards);
  };

  const pickFace = (id) => {
    const newGirl = randomCards.map((girl) => {
      if (girl.id === id) {
        if (girl.isPicked) {
          //if it's already selected, then I have to

          // 1. switch all the isPicked in the array back to false.
          // 2. Count the number of isPicked in the array.
          setClear(true);
          return { ...girl, isPicked: true };
        } else {
          return { ...girl, isPicked: true };
        }
      } else {
        return girl;
      }
    });

    let count = Data.length;
    let box = [];

    for (let i = 0; i < count; i++) {
      box.push(i);
    }

    let newCards = [];

    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * box.length);
      newCards.push(newGirl[box[randomIndex]]);
      if (box.length > 1) {
        box = box.filter((num) => {
          return num != box[randomIndex];
        });
      }
    }

    setRandomCards(newCards);

    //RandomizeCards();
  };

  const checkScore = () => {
    let countHere = 0;

    randomCards.forEach((card) => {
      if (card.isPicked) countHere++;
    });

    setPickedCount(countHere);
    if (countHere > highScore) {
      localStorage.setItem("Highscore", JSON.stringify(countHere));
      setHighScore(countHere);
    }
  };

  React.useEffect(() => {
    RandomizeCards();
  }, []);

  React.useEffect(() => {
    checkScore();
  }, [randomCards]);

  React.useEffect(() => {
    if (isClear) {
      const newOnes = randomCards.map((girl) => {
        return { ...girl, isPicked: false };
      });

      setRandomCards(newOnes);
      setClear(false);
    }
  }, [isClear]);

  return (
    <>
      <div>
        <h1>Amphibia Memory Game</h1>
      </div>
      <div>
        <h3>
          Get points by clicking on an image but don't click on any more than
          once!
        </h3>
      </div>

      <h1>
        Score: {pickedCount} / {randomCards.length}
      </h1>
      <h1>Highscore: {highScore}</h1>
      <div className="grid-container">
        {randomCards.map((woman) => {
          const { id, imageURL, name, isPicked } = woman;
          return (
            <Card
              key={nanoid()}
              id={id}
              image={imageURL}
              name={name}
              randomCards={RandomizeCards}
              pickFace={pickFace}
              isPicked={isPicked}
              className="grid-item"
            />
          );
        })}
      </div>
    </>
  );
}
