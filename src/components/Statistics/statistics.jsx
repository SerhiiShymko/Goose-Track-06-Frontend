import React from 'react';
import { useTheme } from 'styled-components';
import { useSelector } from 'react-redux';
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
import useResize, {
  countUserTasks,
  culcStatistikData,
  FilterTasksByDay,
} from './utils/utils';
import { selectTasks } from 'redux/tasks/selectors';
import {
  CustomizedMostPopularLabel,
  GradientBar,
} from './CustomizedChartComponents/components';
import { WrapperChart } from './statistics.styled';
import { format } from 'date-fns';

const Statistics = () => {
  const tasks = useSelector(selectTasks);
  const theme = useTheme();
  const widthViewPort = useResize();

  const selectDate = useSelector(state => state.auth.currentDate);
  const currentDate = format(selectDate, 'yyyy-MM-dd');

  const tasksByDay = countUserTasks(FilterTasksByDay(tasks, currentDate));
  const tasksByMonth = countUserTasks(tasks);
  const dataChart = culcStatistikData(tasksByDay, tasksByMonth);

  return (
    <WrapperChart>
      <ResponsiveContainer width="100%" height="97%">
        <BarChart
          margin={{ top: 70, right: 14, left: 14, bottom: 0 }}
          data={dataChart}
          barGap={widthViewPort < 768 ? 8 : 14}
          barSize={widthViewPort < 768 ? 22 : 27}
          barBorderRadius={5}
        >
          <CartesianGrid vertical={false} />
          <Legend
            formatter={value =>
              'By ' + value.charAt(0).toUpperCase() + value.slice(1)
            }
            width={179}
            height={18}
            align={widthViewPort < 768 ? 'left' : 'right'}
            iconType="circle"
            wrapperStyle={{
              fontSize: widthViewPort < 768 ? 14 : 16,
              top: widthViewPort < 768 ? -40 : -90,
              color: theme.colors.colorBody,
            }}
          />
          <XAxis
            dataKey="name"
            tick={{ fill: theme.colors.colorBody }}
            tickMargin={18}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            tickLine={false}
            type="number"
            domain={[0, 100]}
            tickCount={7}
            tick={{
              fontWeight: 400,
              fill: theme.colors.colorBody,
            }}
            axisLine={false}
            tickMargin={25}
          />
          <Tooltip />
          {CustomizedMostPopularLabel({
            x: 22,
            y: 35,
            value: 'Tasks',
            offset: 50,
            fontWeight: 600,
            fill: theme.colors.colorBody,
          })}
          {GradientBar({ color: '#FFD2DD', id: 'linearDay' })}
          {GradientBar({ color: '#3E85F3', id: 'linearMonth' })}
          <Bar
            dataKey="day"
            fill="url(#linearDay)"
            radius={8}
            formatter={label => label}
            label={{
              formatter: label => label + '%',
              fill: theme.colors.colorBody,
              fontSize: widthViewPort < 768 ? 12 : 16,
              position: 'top',
              weight: 500,
            }}
          />
          <Bar
            dataKey="month"
            fill="url(#linearMonth)"
            radius={8}
            formatter={label => label}
            label={{
              formatter: label => label + '%',
              fill: theme.colors.colorBody,
              fontSize: widthViewPort < 768 ? 12 : 16,
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
