import React from 'react';
import { Button, LogoutSvg } from './LogoutBtn.styled';
// import PropTypes from 'prop-types'

function LogoutBtn(props) {
  return (
    <Button type="button">
      Log out <LogoutSvg />
    </Button>
  );
}

// LogoutBtn.propTypes = {

// }

export default LogoutBtn;
