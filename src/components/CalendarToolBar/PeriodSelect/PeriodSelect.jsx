import { format } from "date-fns"
import { BtnTypeSelectDay, BtnTypeSelectMonth, PeriodTypeSelect } from "./PeriodSelect.styled"

export const PeriodSelect = () => {
  const date = format(new Date(), 'yyyy-MM-dd')
  const month = format(new Date(), 'yyyy-MM')
  return (
      
        <PeriodTypeSelect>
        <BtnTypeSelectMonth to={`month/${month}`}>
          Month
        </BtnTypeSelectMonth>
        <BtnTypeSelectDay to={`day/${date}`}>Day</BtnTypeSelectDay>
      </PeriodTypeSelect>
    )
}