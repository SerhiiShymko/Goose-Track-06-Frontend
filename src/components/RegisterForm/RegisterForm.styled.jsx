import styled from 'styled-components';
import { ReactComponent as IconLogin } from '../../images/loginPage/IconLogin.svg';
import { ReactComponent as IconError } from '../../images/registrPage/email-error-outline.svg';
import { ReactComponent as IconSucces } from '../../images/registrPage/email-done.svg';
// ----------------------------------------------------------------------------

export const Box = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;
// ----------------------------------------------------------------------------

export const SuccesIcon = styled(IconSucces)`
  position: absolute;
  top: 50%;
  left: 87%;
  @media screen and (min-width: 768px) {
    left: 90%;
  }
`;
// ----------------------------------------------------------------------------

export const ErrorIcon = styled(IconError)`
  position: absolute;
  top: 39%;
  left: 87%;
  @media screen and (min-width: 768px) {
    left: 90%;
  }
`;
// ----------------------------------------------------------------------------

export const IconForm = styled(IconLogin)`
  height: 18px;
  width: 18px;
  stroke: #ffff;
  margin-left: 11px;

  @media screen and (min-width: 768px) {
    height: 20px;
    width: 20px;
  }
`;
// ----------------------------------------------------------------------------

export const AuthContainer = styled.div`
  background: #dcebf7;
`;

// ----------------------------------------------------------------------------
export const AuthForm = styled.form`
  // -------забрати
  outline: 1px solid #3e85f3;
  // -------забрати

  padding: 40px 24px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  display: inline-block;
  text-align: start;
  border-radius: 8px;
  background: #fff;

  @media screen and (min-width: 375px) {
    width: 335px;
    height: 470px;
    padding: 40px;
  }
  @media screen and (min-width: 768px) {
    width: 480px;
    height: 520px;
  }
`;
// ----------------------------------------------------------------------------
export const AuthLabel = styled.label`
  position: relative;
  color: ${props => props.color || '1px solid #dce3e5'};
  padding: 40px 24px;
  width: 100%;
  padding: 0px;
  margin: 0px;
`;
// ----------------------------------------------------------------------------
export const AuthInput = styled.input`
  display: block;
  border-radius: 8px;
  border: ${props => props.border || '1px solid #dce3e5'};
  background: #fff;
  box-sizing: border-box;
  padding: 14px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: ${props => props.marginbottom || '24px'};
  -webkit-box-shadow: 0 0 0px 1000px transparent inset;
  &:hover {
    border-color: #111;
  }
  @media screen and (min-width: 375px) {
    padding: 18px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: ${props => props.marginbottom || '18px'};
  }
`;
// ----------------------------------------------------------------------------
export const FormTitle = styled.h1`
  margin: 0px;
  margin-bottom: 32px;
  color: #3e85f3;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;
// ----------------------------------------------------------------------------
export const FormText = styled.p`
  color: ${props => props.color || '#111'};
  margin: 0px;
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
// ----------------------------------------------------------------------------
export const Text = styled.p`
  margin: 0px;
  margin-bottom:24px;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  margin-bottom:: ${props => props.marginbottom || '24px'};
  color: ${props => props.color || '#DA1414'};
  @media screen and (min-width: 768px) {
    margin-bottom:18px;
  }
`;
// ----------------------------------------------------------------------------
export const SubmitButton = styled.button`
  ${'' /* font-family: Inter; */}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 46px;
  cursor: pointer;
  border-radius: 16px;
  background: #3e85f3;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.28px;
  border: none;
  &:hover {
    background: #2b78ef;
  }

  @media screen and (min-width: 768px) {
    height: 56px;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.36px;
  }
`;
