import { Popper } from '@mui/base';
import * as React from 'react';
import { SvgArrow } from './ChoosedDay.styled';
import { PopperButton, PopperItem, PopperList, PopperText } from './popup.sryled';
import { CATEGORY } from '../../data/constants';
// import { ClickAwayListener } from '@mui/base';

export default function SimplePopper({ category,changeTask,number }) {
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

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const handleFirst = event => {    
    const category = event.target.dataset.category;    

    if (category === 'In progress') {
      return changeTask(event.target.dataset.id, CATEGORY.INPROGRESS);
    }
    if (category === "To do") {
        return changeTask(event.target.dataset.id, CATEGORY.TODO);
    }
    if (category === 'Done') {
      return changeTask(event.target.dataset.id, CATEGORY.DONE);
    }

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
            <PopperButton
              onClick={handleFirst}
              data-id={number}
              data-category={firstLink}
            >
              <SvgArrow
                onClick={handleFirst}
                data-id={number}
                data-category={firstLink}
              />
            </PopperButton>
          </PopperItem>
          <PopperItem>
            <PopperText>{secondLink}</PopperText>
            <PopperButton
              onClick={handleFirst}
              data-id={number}
              data-category={secondLink}
            >
              <SvgArrow
                onClick={handleFirst}
                data-id={number}
                data-category={secondLink}
              />
            </PopperButton>
          </PopperItem>
        </PopperList>
      </Popper>
    </>
  );
}
