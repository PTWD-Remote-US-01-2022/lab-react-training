const Rating = ({ children }) => {
  const displayStar = (star) => {
    let starDisplay = '';

    for (let i = 0; i < 5; i++) {
      i < star ? (starDisplay += '★') : (starDisplay += '☆');
    }
    return starDisplay;
  };

  return <div>{displayStar(children)}</div>;
};
export default Rating;

//children ->3
// 0 < 3
// ★
// 1 < 3
// ★★
// 2 < 3
// ★★★
// 3 < 3
// ★★★☆
// 4 < 3
// ★★★☆☆
