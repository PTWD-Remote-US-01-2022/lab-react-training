import DiceEmpty from '../assets/images/dice-empty.png';
import Dice1 from '../assets/images/dice1.png';
import Dice2 from '../assets/images/dice2.png';
import Dice3 from '../assets/images/dice3.png';
import Dice4 from '../assets/images/dice4.png';
import Dice5 from '../assets/images/dice5.png';
import Dice6 from '../assets/images/dice6.png';
import { randomValueGenerator } from '../utils/utilities.js';
import { useState } from 'react';

const Dice = () => {
  const diceImages = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];
  const [selectedDice, setSelectedDice] = useState(
    randomValueGenerator(diceImages)
  );
  const toggleDice = () => {
    setSelectedDice(DiceEmpty);
    setTimeout(() => {
      setSelectedDice(randomValueGenerator(diceImages));
    }, 1000);
  };

  return (
    <div>
      <img
        src={selectedDice}
        alt="dice"
        style={{ height: '250px' }}
        onClick={toggleDice}
      />
    </div>
  );
};
export default Dice;
