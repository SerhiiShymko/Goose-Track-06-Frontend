import {
  endOfMonth,
  format,
  startOfMonth,
  startOfWeek,
  eachDayOfInterval,
  endOfWeek,
  addDays,
} from 'date-fns';

import {
  ModalCalendar,
  Caption,
  ListItem,
  WeekDays,
  Day,
  LineBlock
} from './CalendarToolBar.styled';
import { Container } from 'styles/Container';
import Prev from '../../images/calendar/chevron-left.svg';
import Next from '../../images/calendar/chevron-right.svg';
import Line from '../../images/calendar/Separator.svg'
import { nanoid } from 'nanoid';

export const CalendarToolbar = () => {
  const date = format(new Date(), 'MMMM yyyy');
  const startDayOfMonth = startOfMonth(new Date());
  const startDayOfWeek = startOfWeek(new Date(), { weekStartsOn: 1 });
  const endDayOfMonth = endOfMonth(new Date());
  const endDayOfWeek = endOfWeek(new Date(), { weekStartsOn: 1 });

  const result = eachDayOfInterval({
    start: startDayOfWeek,
    end: endDayOfWeek,
  });

  const weekDays = [];
  for (let day = 0; day < 7; day++) {
    weekDays.push(format(addDays(startDayOfWeek, day), 'EEEEE'));
  }

  return (
    <Container>
      <button type="button">{date}</button>
      <ModalCalendar>
        <Caption>
          <ListItem>
            <img src={Prev} alt="prev" width={18} height={18} />
          </ListItem>
          <li>{date}</li>
          <ListItem>
            <img src={Next} alt="next" width={18} height={18} />
          </ListItem>
        </Caption>
        <WeekDays>
          {weekDays.map(day => (
            <Day key ={nanoid()}>{day}</Day>
          ))}
        </WeekDays>
        <LineBlock>
          <img src={Line} alt="line" width={328} height={1}/>
        </LineBlock>
      </ModalCalendar>
      </Container>
  );
};
