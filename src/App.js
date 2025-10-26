import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="container">
      <Avatar />
      <Desc />
      <SkillList />
    </div>
  );
}

function Avatar() {
  return <div className="box"></div>;
}

function Desc() {
  return (
    <div className="description">
      <h2>LovNimesh</h2>
      <p>
        I am a student of B.tch 2nd Year in LPU. I am a coding Enthusiast. Lorem
        ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Iure doloribus voluptate eum neque
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skills">
      <Skill skill="Html + Css😎" color="blue" />
      <Skill skill="Python👌" color="red" />
      <Skill skill="Cpp🤟" color="yellow" />
      <Skill skill="Javascript👍" color="orange" />
    </div>
  );
}

function Skill(props) {
  return <span style={{ backgroundColor: props.color }}>{props.skill} </span>;
}
