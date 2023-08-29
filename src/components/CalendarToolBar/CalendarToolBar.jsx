import { format, add } from 'date-fns';

import { ModalCalendar, Caption, ListItem } from './CalendarToolBar.styled';
import { Container } from 'styles/Container';
import Prev from '../../images/calendar/chevron-left.svg';
import Next from '../../images/calendar/chevron-right.svg';

export const CalendarToolbar = () => {
  const date = format(new Date(), 'MMMM yyyy');
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
      </ModalCalendar>
    </Container>
  );
};
