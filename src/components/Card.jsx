const Card = ({ color, name, icon, set, click }) => {
  return (
    <div
      className={`card ${color}`}
      key={`${set}-${name}`}
      onClick={click}
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
