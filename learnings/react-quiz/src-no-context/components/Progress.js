function Progress({ i, n, points, total, answer }) {
  const currQ = i + +(answer !== null);
  return (
    <div className="progress">
      <progress max={n} value={currQ} />
      <p>
        Question <strong>{currQ}</strong>/{n}
      </p>
      <p>
        {points} <strong>/{total}</strong>
      </p>
    </div>
  );
}

export default Progress;
