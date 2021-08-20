export const FaceContainer = ({
  children,
  width,
  height,
  centerX,
  centerY,
}) => (
  <div className="icon">
    <svg width={width} height={height} viewBox="0 0 960 500">
      <g transform={`translate(${centerX},${centerY})`}>{children}</g>
    </svg>
  </div>
);
