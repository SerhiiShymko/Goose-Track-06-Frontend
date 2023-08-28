import { Popper } from '@mui/base';
import * as React from 'react';
import { SvgArrow } from './ChoosedDay.styled';
import { PopperItem, PopperList, PopperText } from './popup.sryled';

export default function SimplePopper() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <>
      <SvgArrow aria-describedby={id} type="button" onClick={handleClick} />
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <PopperList>
          <PopperItem>
            <PopperText>In progress</PopperText>
            <SvgArrow />
          </PopperItem>
          <PopperItem>
            <PopperText>Done</PopperText>
            <SvgArrow />
          </PopperItem>
        </PopperList>
      </Popper>
    </>
  );
}
