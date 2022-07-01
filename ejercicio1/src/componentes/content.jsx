const Content = ({ courseInfo }) => {
  return (
    <div>
      {courseInfo.map((info) => (
        <p key={info.key}>
          {info.part} {info.excercises}
        </p>
      ))}
    </div>
  );
};

export default Content;
