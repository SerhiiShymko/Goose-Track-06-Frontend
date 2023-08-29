import {
  Bar,
} from 'recharts';


export const GradientBar = ({ color, id }) => {
  return (
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="0" y2="100%">
        <stop offset="0%" stopColor="#fff" />
        <stop offset="100%" stopColor={color} />
      </linearGradient>
    </defs>
  );
};
export const CustomizedBar = ({ dataKey, data, colorGradient }) => {
  return (
    <Bar
      dataKey={dataKey}
      fill={colorGradient}
      radius={8}
      label={{
        formatter: label => label + '%',
        fill: '#343434',
        fontSize: 16,
        position: 'top',
        weight: 500,
      }}
    />
  );
};

// export const CustomizedMostPopularLabel = props => {
//   const { x, y, value } = props;
//   return (
//     <g>
//       <text x={x} y={y} fill="#000">
//         value
//       </text>
//     </g>
//   );
// };
