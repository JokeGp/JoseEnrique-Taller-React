import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./componentes/header";
import Content from "./componentes/content";
import Total from "./componentes/total";
// import App from './App'
// import './index.css'

// const Header = ({ course }) => (
//   <div>
//     <h1>{course}</h1>
//   </div>
// );

const App = () => {
  const course = `Half Stack Application Development`;
  // const part1 = `Fundamentals of React`;
  // const excercises1 = 10;
  // const part2 = `Using props to pass data`;
  // const excercises2 = 7;
  // const part3 = `State of a component`;
  // const excercises3 = 14;

  const courseInfo = [
    { part: `Fundamentals of react`, excercises: 10 },
    { part: `Using props to pass data`, excercises: 7 },
    { part: `State of a component`, excercises: 14 },
    { part: `Fretching resources from an API`, excercises: 9 },
  ];

  return (
    <div>
      <Header title={course} />
      <Content courseInfo={courseInfo} />
      <Total courseInfo={courseInfo} />
      {/* <p>
        {part1} {excercises1}
      </p>
      <p>
        {part2} {excercises2}
      </p>
      <p>
        {part3} {excercises3}
      </p>
      <p>Number of excercises {excercises1 + excercises2 + excercises3}</p> */}
    </div>
  );
};

// const app = () => {
//   const parts = [
//     `Fundamentals of React`,
//     `Using props to pass data`,
//     `State of a component`,
//   ];
//   const excercises = [10, 7, 14];
//   return (
//     <div>
//       <Header course="Half Stack Application Development" />
//       {/* <Content part={parts} excercise={excercises} /> */}
//       <Total total={excercises} />
//     </div>
//   );
// };

// const Content = ({ part }, { excercise }) => (
//   <ul>
//     {part.map((parts) => {
//       return <li key="{parts}">{parts}</li>;
//     })}
//   </ul>
// );

// const Total = ({ total }) => {
//   let temp = 0;
//   <ul>
//     {total.map((excercise) => {
//       temp = excercise + temp;
//       return temp;
//     })}
//     <li>{temp}</li>;
//   </ul>;
// };

// Todos los datos aún residen en el
// componente App, que pasa los datos necesarios a cada componente mediante props. Header se
// encarga de representar el nombre del curso, Content representa las partes y su número de ejercicios
// y Total representa el número total de ejercicios.

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
