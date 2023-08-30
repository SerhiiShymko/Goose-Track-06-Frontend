import React from 'react';
import {
  BarChart,
  Bar,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import {
  countUserTasks,
  culcStatistikData,
  FilterTasksByDay,
} from './utils/utils';
import { selectTasks } from 'redux/tasks/selectors';
import {
  CustomizedBar,
  CustomizedMostPopularLabel,
  GradientBar,
} from './CustomizedChartComponents/components';

import { WrapperChart } from './statistics.styled';
import dataUserByMonth from './data/dataUser.json';
// import {dataChart} from './data/dataChart'

const dateByDay = '2023-08-26';

const Statistics = () => {
  const tasks = dataUserByMonth
//   const tasks = useSelector(selectTasks);
  
  const tasksByDay = countUserTasks(FilterTasksByDay(tasks, dateByDay));
  const tasksByMonth = countUserTasks(tasks);
  const dataChart = culcStatistikData(tasksByDay, tasksByMonth);

  return (
    <WrapperChart>
      <ResponsiveContainer width="100%" height="97%">
        <BarChart
          margin={{ top: 70, right: 40, left: 20, bottom: 0 }}
          data={dataChart}
          barGap={14}
          barSize={27}
          barBorderRadius={5}
        >
          <CartesianGrid vertical={false} />

          <Legend
            formatter={value => value.charAt(0).toUpperCase() + value.slice(1)}
            align="right"
            wrapperStyle={{ top: '-100px' }}
            iconType="circle"
            height={36}
          />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 14, color: '#343434', fontWeight: 400 }}
            tickMargin={18}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            tickLine={false}
            type="number"
            domain={[0, 100]}
            tickCount={7}
            tick={{ fontSize: 14, fontWeight: 400, color: '#343434' }}
            axisLine={false}
            tickMargin={25}
          />
          <Tooltip />
          {CustomizedMostPopularLabel({
            x: 27,
            y: 35,
            value: 'Tasks',
            offset: 50,
          })}
          {GradientBar({ color: '#FFD2DD', id: 'linearDay' })}
          {GradientBar({ color: '#3E85F3', id: 'linearMonth' })}
          <Bar
            dataKey="day"
            fill="url(#linearDay)"
            radius={8}
            label={{
              formatter: label => label + '%',
              fill: '#343434',
              fontSize: 16,
              position: 'top',
              weight: 500,
            }}
          />
          <Bar
            dataKey='month'
            fill='url(#linearMonth)'
            radius={8}
            label={{
              formatter: label => label + '%',
              fill: '#343434',
              fontSize: 16,
              position: 'top',
              weight: 500,
            }}
         />
        </BarChart>
      </ResponsiveContainer>
    </WrapperChart>
  );
};

export default Statistics;
