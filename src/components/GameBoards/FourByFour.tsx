import { useEffect, useState } from "react";
import { CircleButton } from "../ButtonComponents";
import ScoreBox from "../PlayerScoreBox";
import MenuModal from "../MenuModal";
import { FourByFourProps } from "../../models";
// import SoloGameOver from '../GameOverScreen/SoloGameOver';
import { nanoid } from "nanoid";

function FourByFour({
  menuModalOpen,
  onStartGame,
  onOpenMenu,
}: FourByFourProps) {
  const [numbers, setNumbers] = useState(createNumbers());
  const [score, setScore] = useState(0);

  useEffect(() => {
    checkForMatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numbers]);

  function addToScore() {
    setScore((prevScore) => prevScore + 1);
  }

  function checkForMatch() {
    const flippedNumbers = numbers.filter(
      (number) => number.isFlipped && !number.isMatched
    );
    if (flippedNumbers.length >= 2) {
      const matchedValues = flippedNumbers.map((number) => number.value);
      const isAllMatched = flippedNumbers.every(
        (number) => number.value === matchedValues[0]
      );
      if (isAllMatched) {
        addToScore();
        setNumbers((prevNumbers) =>
          prevNumbers.map((number) => {
            if (matchedValues.includes(number.value)) {
              return { ...number, isMatched: true };
            }
            return number;
          })
        );
        //NOTE: Need to try and get the matched numbers to stay highlighted. Kinda like this => else if (numbers.includes(number.isMatched: true))
      } else {
        setTimeout(
          () =>
            setNumbers((prevNumbers) =>
              prevNumbers.map((number) => {
                // number.isMatched === false ? { ...number, isFlipped: false} : number
                return number.isMatched
                  ? { ...number, isFlipped: true }
                  : { ...number, isFlipped: false, isMatched: false };
              })
            ),
          550
        );
      }
    }
  }

  function createNumbers() {
    const numberArray = [];
    for (let i = 1; i <= 8; i++) {
      const number = {
        id: nanoid(),
        value: i,
        isFlipped: false,
        isMatched: false,
      };
      const duplicateNumber = {
        id: nanoid(),
        value: i,
        isFlipped: false,
        isMatched: false,
      };
      numberArray.push(number, duplicateNumber);
    }
    const randomisedNumbers = numberArray.sort(() => Math.random() - 0.5);
    return randomisedNumbers;
  }

  function flipNumbers(id: string) {
    setNumbers((prevNumbers) =>
      prevNumbers.map((number) => {
        return number.id === id
          ? { ...number, isFlipped: !number.isFlipped }
          : number;
      })
    );
  }

  const circles = numbers.map((number) => {
    return (
      <CircleButton
        onFlipNumber={() => flipNumbers(number.id)}
        key={number.id}
        isFlipped={number.isFlipped}
        isMatched={number.isMatched}
      >
        {number.value}
      </CircleButton>
    );
  });

  return (
    <>
      {menuModalOpen && (
        <MenuModal onStartGame={onStartGame} onOpenMenu={onOpenMenu} />
      )}
      {/* <SoloGameOver onStartGame={onStartGame} /> */}
      <div className="game-board-container game-board-container__four-by-four">
        {circles}
      </div>
      <ScoreBox score={score} />
    </>
  );
}

export default FourByFour;
