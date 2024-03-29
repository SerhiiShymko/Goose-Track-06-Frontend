import { styled } from 'styled-components';
import { ReactComponent as close } from '../../../images/tascs/x-close.svg';
import { ReactComponent as Plus } from '../../../images/tascs/addTask.svg';
import { ReactComponent as Pencil } from '../../../images/tascs/pencil-2.svg';

export const ContainerForm = styled.div`
  width: 396px;
  height: 360px;
  padding: 40px 28px;

  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  background: ${({ theme }) => theme.colors.backgroundAccent};
  box-shadow: 0px 4px 16px 0px
    ${({ theme }) =>
      theme.name === 'light'
        ? 'rgba(17, 17, 17, 0.1)'
        : 'rgba(17, 17, 17, 0.10)'};
  position: relative;
  @media screen and (max-width: 767px) {
    width: 303px;
    height: 336px;
    padding:48px 18px 40px 18px;
  }
`;
export const ButtonAdd = styled.button`
  border-radius: 8px;
  background: #3e85f3;
  display: flex;
  width: 178px;
  height: 48px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap:8px;

  color: #fff;
  text-align: center;
  /* font-family: 'InterSemiBold'; */
  font-weight: 600;
  font-size: 14px;
  line-height: 18px; /* 128.571% */
   @media screen and (max-width: 767px) {
    width:135px;
    height:42px;
   }
`;
export const SvgPlus = styled(Plus)`
  width: 20px;
  height: 20px;
  stroke: rgba(255, 255, 255, 1);
`;
export const SvgPencil = styled(Pencil)`
  width: 18px;
  height: 18px;
  stroke: rgba(255, 255, 255, 1);
`;

export const ButtonCancel = styled.button`
  border-radius: 8px;
  background:rgba(239, 239, 239, 1);
  /* background: ${({ theme }) => theme.colors.backgroundBtnCancelTask}; */
  display: flex;
  width: 144px;
  height: 48px;
  justify-content: center;
  align-items: center;

  /* color: ${({ theme }) => theme.colors.colorBtnCancelTask}; */
  color:#111;
  text-align: center;
  /* font-family: 'InterSemiBold'; */
  font-weight: 600;
  font-size: 14px;
  line-height: 18px; /* 128.571% */
   @media screen and (max-width: 767px) {
    width:118px;
    height:42px;
   }
`;
export const SvgClose = styled(close)`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
  stroke: ${({ theme }) => theme.colors.colorAccent};

  &:hover path {
    stroke: rgba(62, 133, 243, 1);
  }
`;
export const TextLabel = styled.label`
  display: flex;
  width: 340px;
  height: 68px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;

  color: ${({ theme }) => theme.colors.colorLabelModal};
  /* font-family: 'InterMedium'; */
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  @media screen and (max-width: 767px) {
    width: 267px;
    height: 42px;
    margin-bottom: 16px;
  }
`;
export const TextInput = styled.input`
  width: 340px;
  height: 46px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  background: ${({ theme }) => theme.colors.backgroundModalFields};

  color: ${({ theme }) => theme.colors.colorBody};
  /* font-family: 'InterSemiBold'; */
  font-weight: 600;
  font-size: 14px;
  line-height: 18px; /* 128.571% */
  padding: 14px 18px;
  &:hover {
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
  }
  @media screen and (max-width: 767px) {
    width: 267px;
    height: 42px;
  }
`;
export const ContainerTime = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 14px;
  margin: 18px 0;
  @media screen and (max-width: 767px) {
    gap:15px;
    margin-bottom:16px;
  }
`;
export const Timelabel = styled.label`
  display: flex;
  width: 163px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;

  color: ${({ theme }) => theme.colors.colorLabelModal};
  /* font-family: 'InterMedium'; */
  font-weight: 500;
  font-size: 12px;
  line-height: 14px; /* 116.667% */
  @media screen and (max-width: 767px) {
    width: 126px;
  }
`;
export const TimeInput = styled.input`
  width: 163px;
  height: 46px;
  flex-shrink: 0;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.backgroundModalFields};
  /* border: none; */
  /* rgba(220, 227,229, 0.8) */
  border: 1px solid ${props => props.$border};

  color: ${({ theme }) => theme.colors.colorBody};
  /* font-family: 'InterSemiBold' */
  font-weight: 600;
  font-size: 14px;
  line-height: 18px; /* 128.571% */

  padding: 14px 0 14px 18px;
  cursor: pointer;
  &:hover {
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
  @media screen and (max-width: 767px) {
    width: 126px;
    height: 42px;
  }
`;
export const ContainerRadio = styled.div`
  display: flex;
  width: 197px;
  height: 18px;
  align-items: flex-start;
  gap: 16px;
  flex-shrink: 0;
  margin-top: 10px;
  margin-bottom: 32px;
   @media screen and (max-width: 767px) {
    margin-top:0;
   }
`;
export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
`;
export const RadioInput = styled.input`
  position: relative;
  height: 22px;
  width: 22px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${props => props.$background};
    transform: translate(-50%, -50%);
    visibility: visible;
  }
  &:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    /* background-color: rgba(114, 194, 248, 0.5); */
    transform: translate(-50%, -50%);
    border: 2px solid ${props => props.$border};
  }
`;
export const RadioLabel = styled.label`
  display: flex;
  color: ${({ theme }) => theme.colors.colorBody};
  cursor: pointer;
`;
export const FormContainer = styled.form`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
