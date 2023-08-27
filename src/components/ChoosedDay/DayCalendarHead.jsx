import dayjs from 'dayjs';
import { color } from 'styled-system';
import {AnimatedPopup} from './Popup'

import { DivEl, OverflowEl } from './ChoosedDay.styled';
const DayCalendarHead = () => {
  const tagHeute = dayjs();
  const day = tagHeute.format('dd');
  console.log(tagHeute);
  console.log(dayjs('2019-01-25').add(1, 'day').subtract(1, 'year').year(2009));
  console.log(day);
  return <></>;
};

export default DayCalendarHead;

// dayjs.extend(minMax);
