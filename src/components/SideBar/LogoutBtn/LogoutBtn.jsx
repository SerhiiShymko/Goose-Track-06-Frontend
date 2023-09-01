import React from 'react';
import { Button, LogoutSvg } from './LogoutBtn.styled';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
// import PropTypes from 'prop-types'

function LogoutBtn(props) {
  const dispatch = useDispatch();

  const handleClick = () => dispatch(logOut());
  return (
    <Button type="button" onClick={handleClick}>
      Log out <LogoutSvg />
    </Button>
  );
}

// LogoutBtn.propTypes = {

// }

export default LogoutBtn;
