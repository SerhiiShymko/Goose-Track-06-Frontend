import { CalendarModal } from "components/CalendarModal/CalendarModal";
import { BtnPaginatorLeft, BtnPaginatorRight, ButtonForOpenCalendar, PeriodPaginator, WrapperPagination } from "./WrapperPaginator.styled";
import { ImgPaginatorNext, ImgPaginatorPrev } from "../CalendarToolBar.styled";
import { useState } from "react";
import Prev from '../../../images/calendar/chevron-left.svg'
import Next from '../../../images/calendar/chevron-left.svg'

export const WrapperPaginator = ({ dayInterval, onNext, onPrev, dateToday }) => {
    const [open, setOpen] = useState(false);
    return (
        <WrapperPagination>
        <ButtonForOpenCalendar
          type="button"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {dateToday}
        </ButtonForOpenCalendar>
        {open && <CalendarModal onNext={onNext} onPrev={onPrev} dateToday={dateToday} dayInterval={dayInterval} />}
        <PeriodPaginator>
          <BtnPaginatorLeft onClick={onPrev}>
            <ImgPaginatorPrev src={Prev} alt="prev" width={16} height={16} />
          </BtnPaginatorLeft>
          <BtnPaginatorRight onClick={onNext}>
            <ImgPaginatorNext src={Next} alt="next" width={16} height={16} />
          </BtnPaginatorRight>
        </PeriodPaginator>
      </WrapperPagination>
    )
}