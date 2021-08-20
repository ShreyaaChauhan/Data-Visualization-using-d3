export const Eyes = ({ eyeOffsetX, eyeOffsetY, eyeRadius }) => (
  <g>
    <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} fill="black" />
    <circle cx={eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} fill="black" />
  </g>
);
