const Card = ({ color, name, icon, set, click, replaySound }) => {
  return (
    <div
      className={`card ${color}`}
      key={`${set}-${name}`}
      onClick={click}
      id={name}
    >
      <button className="replay-button" onClick={replaySound}>
        <span role="img" aria-label="Replay Sound">
          🔊
        </span>
      </button>
      <span id={name} role="img" aria-label={name}>
        {icon}
      </span>
      <h1 id={name}>{name}</h1>
    </div>
  );
};

export default Card;
