import dayjs from 'dayjs';
import { ContainerColendar, ContainerData, DataItem, DataNumber, DayText, ListData } from './DayCalendarHead.styled';
// import { color } from 'styled-system';
// import {AnimatedPopup} from './Popup'

// import { DivEl, OverflowEl } from './ChoosedDay.styled';
const DayCalendarHead = () => {
  const tagHeute = dayjs();
  const day = tagHeute.format('dd');
  console.log(tagHeute);
  console.log(dayjs('2019-01-25').add(1, 'day').subtract(1, 'year').year(2009));
  console.log(day);
  return (
    <ContainerColendar>
      <ContainerData>
        <ListData>
          <DataItem>
            <DayText>Mon</DayText>
            <DataNumber>7</DataNumber>
          </DataItem>
          <DataItem>
            <DayText>Tue</DayText>
            <DataNumber>8</DataNumber>
          </DataItem>
          <DataItem>
            <DayText>Wed</DayText>
            <DataNumber>9</DataNumber>
          </DataItem>
          <DataItem>
            <DayText>Thu</DayText>
            <DataNumber>10</DataNumber>
          </DataItem>
          <DataItem>
            <DayText>Fri</DayText>
            <DataNumber>11</DataNumber>
          </DataItem>
          <DataItem>
            <DayText>Sat</DayText>
            <DataNumber>12</DataNumber>
          </DataItem>
          <DataItem>
            <DayText>Sun</DayText>
            <DataNumber>13</DataNumber>
          </DataItem>
        </ListData>
      </ContainerData>
      {/* <ContainerData>
        <ListData>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
        </ListData>
      </ContainerData> */}
    </ContainerColendar>
  );
  
};

export default DayCalendarHead;

// dayjs.extend(minMax);
