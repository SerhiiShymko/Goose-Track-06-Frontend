import dayjs from 'dayjs';
const DayCalendarHead = () => {
     
    const tagHeute = dayjs()
    const day=tagHeute.format('dd')
    console.log(tagHeute)
    console.log(
      dayjs('2019-01-25')
        .add(1, 'day')
        .subtract(1, 'year')
        .year(2009)
        
    );
        console.log(day)
  return (
    <>
      <ul>
              <li>Mon { }</li>
        <li>Tue</li>
        <li>Wed</li>
        <li>Thu</li>
        <li>Fri</li>
        <li>Sat</li>
        <li>Sun</li>
      </ul>
    </>
  );
};

export default DayCalendarHead;



// dayjs.extend(minMax);