// const Header = (props) => <h1>(props.title)</h1>;
const Header = ({ title }) => <h1>{title}</h1>;

const header = (props) => {
  const { title, name, age } = props;

  // const a = "algo";
  // const b = "aquello";
  // penado por la ley esto te hace perder sueldo

  return <h1>{title}</h1>;
};

export default Header;

// se pueden exportar varios componentes a la vez
