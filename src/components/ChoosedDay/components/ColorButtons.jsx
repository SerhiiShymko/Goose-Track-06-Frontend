import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ColorButtons({ handleClose, hendlerDelete, number }) {
  const deleteTask = () => {
    hendlerDelete(number);
    return;
  }
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="success" onClick={deleteTask}>
        Yes
      </Button>
      <Button variant="outlined" color="error" onClick={handleClose}>
        No
      </Button>
    </Stack>
  );
}
