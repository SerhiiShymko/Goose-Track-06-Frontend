import dayjs from 'dayjs';
import { ContainerColendar, ContainerData, DataItem, DataNumber, DayText, ListData } from './DayCalendarHead.styled';
// import { color } from 'styled-system';
// import {AnimatedPopup} from './Popup'

const DayCalendarHead = () => {

  // Current Day
  const currentDay = dayjs("2023-08-29");

  // const day = tagHeute.format('ddd');
  // console.log(tagHeute);
  // const nextTag = dayjs().add(1, 'day');
  // console.log(nextTag.format('d'));
  // dayjs('2019-01-25');
 
  const weekday = currentDay.format('d');
  const difference = Number(weekday) - 1;
  const mon = currentDay.subtract(difference, 'day');

  let week = [];
  for (let i = 0; i < 7; i += 1) {
    week.push(mon.add(i, 'day'));
  }
  const hendelCurrentDay = day => {
    if (day === weekday) {
      return '#3E85F3';
    }
    return;
  };
  const hendelCurrentDayColor = day => {
    if (day === weekday) {
      return '#FFF';
    }
    return '#343434';
  };
  return (
    <ContainerColendar>
      <ContainerData>
        <ListData>
          {week.map(date => (
            <DataItem key={date.format('D')}>
              <DayText>{date.format('ddd')}</DayText>
              <DataNumber
                $background={hendelCurrentDay(date.format('d'))}
                $color={hendelCurrentDayColor(date.format('d'))}
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
