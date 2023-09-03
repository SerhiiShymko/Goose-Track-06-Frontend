import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import {
  ContainerColendar,
  ContainerData,
  DataItem,
  DataNumber,
  DayText,
  ListData,
} from './DayCalendarHead.styled';
import { useTheme } from 'styled-components';
// import { color } from 'styled-system';
// import {AnimatedPopup} from './Popup'

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = event => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return {
    width,
    isScreenSm: width <= 375,
    isScreenMd: width < 767,
    isScreenLg: width <= 1140,
  };
};





  

const DayCalendarHead = ({ currentDate }) => {

  const screen = useResize();
  // Current Day
  const currentDay = dayjs(currentDate);
  // const day = tagHeute.format('ddd');
  // console.log(tagHeute);
  // const nextTag = dayjs().add(1, 'day');
  // console.log(nextTag.format('d'));
  // dayjs('2019-01-25');

  
  let weekday = currentDay.format('d');
  if (Number(weekday) === 0) {
    weekday = 7;    
  }  

  const difference = Number(weekday) - 1;

  const mon = currentDay.subtract(difference, 'day');
  const theme = useTheme();

  let week = [];
  for (let i = 0; i < 7; i += 1) {
    week.push(mon.add(i, 'day'));
  }
 
  const hendelCurrentDay = day => {
    if (day === currentDay.format('YYYY-MM-DD')) {
      return '#3E85F3';
    }
    return;
  };
  const hendelCurrentDayColor = day => {
    if (day === currentDay.format("YYYY-MM-DD")) {
      return '#FFF';
    }
    return theme.colors.colorBody;
  };
  return (
    <ContainerColendar>
      <ContainerData>
        <ListData>
          {week.map(date => (
            <DataItem key={date.format('D')}>
              <DayText>
                {screen.isScreenMd
                  ? date.format('ddd').slice(0, 1)
                  : date.format('ddd')}
              </DayText>
              <DataNumber
                $background={hendelCurrentDay(date.format('YYYY-MM-DD'))}
                $color={hendelCurrentDayColor(date.format('YYYY-MM-DD'))}
              >
                {date.format('D')}
              </DataNumber>
            </DataItem>
          ))}
        </ListData>
      </ContainerData>
    </ContainerColendar>
  );
};

export default DayCalendarHead;

// dayjs.extend(minMax);
