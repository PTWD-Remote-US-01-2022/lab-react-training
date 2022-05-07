import { useState } from 'react';
import { randomValueGenerator } from '../utils/utilities';

const LikeButton = () => {
  const [like, setLike] = useState(0);
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const counter = () => {
    setLike((prevLike) => prevLike + 1);
  };

  return (
    <div>
      <button
        style={{ backgroundColor: randomValueGenerator(colors) }}
        onClick={counter}
      >
        {like} Likes
      </button>
    </div>
  );
};

export default LikeButton;
