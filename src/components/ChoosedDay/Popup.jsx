import { Popper } from '@mui/base';
import * as React from 'react';
import { SvgArrow } from './ChoosedDay.styled';
import { PopperItem, PopperList, PopperText } from './popup.sryled';
import { CATEGORY } from '../../data/constants';
// import { ClickAwayListener } from '@mui/base';

export default function SimplePopper({ category,changeTask }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  let firstLink = "";
  let secondLink = "";

  if (category === CATEGORY.TODO) {
    firstLink = "In progress"
    secondLink = "Done";    
  }
  if (category === CATEGORY.INPROGRESS) {
    firstLink = 'To do';
    secondLink = 'Done';
  }
  if (category === CATEGORY.DONE) {
    firstLink = 'To do';
    secondLink = 'In progress';
  }

  const handleClick = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFirst = event => {
    console.log(event)
    setAnchorEl(null);
    // changeTask()
  }
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <>
      <SvgArrow aria-describedby={id} type="button" onClick={handleClick} />
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <PopperList>
          <PopperItem>
            <PopperText>{firstLink}</PopperText>
            <SvgArrow onClick={handleFirst} />
          </PopperItem>
          <PopperItem>
            <PopperText>{secondLink}</PopperText>
            <SvgArrow onClick={handleClose} />
          </PopperItem>
        </PopperList>
      </Popper>
    </>
  );
}
