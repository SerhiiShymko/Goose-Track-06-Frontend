import { React, useEffect } from 'react';
import { WrapperChart } from './statistics.styled';
import {
  BarChart,
  // Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import {
  countUserTasks,
  culcStatistikData,
  FilterTasksByDay,
} from './utils/utils';
import { selectTasks } from 'redux/tasks/selectors';
import { useDispatch } from 'react-redux';
import {
  CustomizedBar,
  GradientBar,
} from './CustomizedChartComponents/components';
import { fetchTasks } from 'redux/tasks/operations';

// import {dataChart} from './data/dataChart'
import dataUserByMonth from './data/dataUser.json';

const dateByDay = '2023-08-26';

const Statistics = () => {
  const tasks = dataUserByMonth;
  //   const tasks = useSelector(selectTasks);
  const dispatch = useDispatch(selectTasks);
  const dateNow = Date.now();

  useEffect(() => {
    dispatch(fetchTasks(dateNow));
  }, [dispatch, dateNow]);

  const tasksByDay = countUserTasks(FilterTasksByDay(tasks, dateByDay));
  const tasksByMonth = countUserTasks(tasks);
  const dataChart = culcStatistikData(tasksByDay, tasksByMonth);

  return (
    <WrapperChart>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          margin={{ top: 40, right: 40, left: 20, bottom: 20 }}
          label="heaf"
          data={dataChart}
          barGap={14}
          barSize={27}
          barBorderRadius={5}
        >
          <CartesianGrid vertical={false} />
          {/* <Legend verticalAlign="top" align="right" iconType="circle" /> */}
          {/* <Label
            value='Tasks'
            position=''
          /> */}
          <XAxis
            dataKey="name"
            tick={{ fontSize: 14, color: '#343434', fontWeight: 400 }}
            tickMargin={18}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            tickLine={false}
            label={{
              offset: 20,
              value: 'Tasks',
              fontSize: 14,
              position: 'top',
            }}
            type="number"
            domain={[0, 100]}
            tickCount={7}
            tick={{ fontSize: 14, fontWeight: 400, color: '#343434' }}
            axisLine={false}
            tickMargin={25}
          />
          {/* {CustomizedMostPopularLabel({ x: 50, y: 10, value: 'Test' })} */}
          {GradientBar({ color: '#FFD2DD', id: 'linearDay' })}
          {GradientBar({ color: '#3E85F3', id: 'linearMonth' })}
          {CustomizedBar({
            dataKey: 'day',
            dataChart,
            colorGradient: 'url(#linearDay)',
          })}
          {CustomizedBar({
            dataKey: 'month',
            dataChart,
            colorGradient: 'url(#linearMonth)',
          })}
        </BarChart>
      </ResponsiveContainer>
    </WrapperChart>
  );
};

export default Statistics;
