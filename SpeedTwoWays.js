function SpeedTwoWays({ title, data }) {
  const [item1, item2] = data;
  const score1 = item1.score;
  const score2 = item2.score;
  const theta1 = 180 - (score1 / 100) * 180;
  const theta2 = 180 - (score2 / 100) * 180;
  const theta1Rad = (theta1 * Math.PI) / 180;
  const theta2Rad = (theta2 * Math.PI) / 180;
  const r = 100;
  const cx = 150;
  const cy = 150;
  const x1 = r * Math.cos(theta1Rad);
  const y1 = r * Math.sin(theta1Rad);
  const x2 = r * Math.cos(theta2Rad);
  const y2 = r * Math.sin(theta2Rad);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>{title}</h2>
      <svg width="300" height="200">
        <g transform={`translate(${cx}, ${cy}) scale(1, -1)`}>
          <path
            d={`M ${-r} 0 A ${r} ${r} 0 0 1 ${r} 0`}
            fill="none"
            stroke="black"
            strokeWidth="2"
          />
          <line x1="0" y1="0" x2={x1} y2={y1} stroke="red" strokeWidth="2" />
          <line x1="0" y1="0" x2={x2} y2={y2} stroke="blue" strokeWidth="2" />
        </g>
        <text x={cx - r} y={cy + 20} textAnchor="middle">0%</text>
        <text x={cx} y={cy + 20} textAnchor="middle">50%</text>
        <text x={cx + r} y={cy + 20} textAnchor="middle">100%</text>
      </svg>
      <div>
        <p>{item1.label}: {score1}%</p>
        <p>{item2.label}: {score2}%</p>
      </div>
    </div>
  );
}

export default SpeedTwoWays;