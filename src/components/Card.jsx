import { say } from "../utils";

const Card = ({ color, name, icon, set }) => {
  const handleClick = (e) => {
    say(e.target.id);
  };
  return (
    <div
      className={`card ${color}`}
      key={`${set}-${name}`}
      onClick={handleClick}
      id={name}
    >
      <span id={name} role="img" aria-label={name}>
        {icon}
      </span>
      <h1 id={name}>{name}</h1>
    </div>
  );
};

export default Card;
