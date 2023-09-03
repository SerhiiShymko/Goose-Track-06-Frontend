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
import useResize, {
  countUserTasks,
  culcStatistikData,
  FilterTasksByDay,
} from './utils/utils';
import { selectTasks } from 'redux/tasks/selectors';
import { useDispatch } from 'react-redux';

import {
  // CustomizedBar,
  CustomizedMostPopularLabel,
  GradientBar,
} from './CustomizedChartComponents/components';

import { StatisticWrapper, WrapperChart } from './statistics.styled';
// import dataUserByMonth from './data/dataUser.json';
import { useEffect } from 'react';
import { fetchTasks } from 'redux/tasks/operations';
import { useSelector } from 'react-redux';

import dayjs from 'dayjs';

// import {dataChart} from './data/dataChart'

const dateByDay = '2023-08-25';

const Statistics = () => {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch(selectTasks);
  /**
   * Дата фейкова
   */
  const dateNow = dayjs('2023-08-25').format('YYYY-MM-DD');
  // const dateNow = '2023-08-25';
  // const tasks = dataUserByMonth;

  useEffect(() => {
    dispatch(fetchTasks(dateNow));
  }, [dispatch, dateNow]);

const sizeViewPort = useResize();
// console.log(sizeViewPort)

  const handleSizes = sizeViewPort => {
    if (sizeViewPort >= 376) {

    }
  }
  const tasksByDay = countUserTasks(FilterTasksByDay(tasks, dateByDay));
  const tasksByMonth = countUserTasks(tasks);
  const dataChart = culcStatistikData(tasksByDay, tasksByMonth);

  // const colorTextByDay = 'red';
  return (
    <StatisticWrapper>
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
              formatter={value =>
                'By ' + value.charAt(0).toUpperCase() + value.slice(1)
              }
              width={179}
              wrapperStyle={{
                fontSize: { formatter: fontSize => fontSize + 2 },
                top: '-100px',
                right: '-20px',
              }}
              iconType="circle"
              height={36}
            />
            <XAxis
              dataKey="name"
              tick={{ color: '#343434' }}
              tickMargin={18}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              tickLine={false}
              type="number"
              domain={[0, 100]}
              tickCount={7}
              tick={{ fontWeight: 400, color: '#343434' }}
              axisLine={false}
              tickMargin={25}
            />
            <Tooltip />
            {CustomizedMostPopularLabel({
              x: 27,
              y: 35,
              value: 'Tasks',
              offset: 50,
              fontWeight: 600,
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
                // fontSize: { formatter: fontSize => fontSize + 2 },
                position: 'top',
                weight: 500,
              }}
            />
            <Bar
              dataKey="month"
              fill="url(#linearMonth)"
              radius={8}
              label={{
                formatter: label => label + '%',
                fill: '#343434',
                // fontSize: { formatter: fontSize => fontSize + 2 },
                position: 'top',
                weight: 500,
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </WrapperChart>
    </StatisticWrapper>
  );
};

export default Statistics;
