const Total = ({ courseInfo }) => {
  let total = 0;

  courseInfo.map((info) => {
    total += info.excercises;
  });

  return <p>Number of excerises:{total}</p>;
};

export default Total;
