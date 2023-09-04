import { BtnTypeSelectDay, BtnTypeSelectMonth, PeriodTypeSelect } from "./PeriodSelect.styled"

export const PeriodSelect = () => {
    return (
        <PeriodTypeSelect>
        <BtnTypeSelectMonth to="month/:currentDate">
          Month
        </BtnTypeSelectMonth>
        <BtnTypeSelectDay to="day/:currentDay">Day</BtnTypeSelectDay>
      </PeriodTypeSelect>
    )
}