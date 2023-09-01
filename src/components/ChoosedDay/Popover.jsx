import * as React from 'react';
import {Popover} from '@mui/material';
import {Typography} from '@mui/material';
import { SvgTrash } from './ChoosedDay.styled';
import { ContainerPopover, PopoverButton } from './popup.sryled';




import ColorButtons from './components/ColorButtons';

export default function BasicPopover({number,hendlerDelete}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <PopoverButton>
      <SvgTrash
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      ></SvgTrash>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <ContainerPopover>
          <Typography sx={{ p: 2 }}>
            {' '}
            Are you sure you want to delete?
          </Typography>
          <ColorButtons
            handleClose={handleClose}
            hendlerDelete={hendlerDelete}
            number={ number}
          />
        </ContainerPopover>
      </Popover>
    </PopoverButton>
  );
}
