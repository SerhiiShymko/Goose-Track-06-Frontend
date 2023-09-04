import { styled } from "styled-components";
import { ReactComponent as close } from '../../../images/tascs/x-close.svg';

export const ContainerForm = styled.div`
  width: 396px;
  height: 360px;
  padding: 40px 28px;

  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
  position: relative;
`;
export const ButtonAdd = styled.button`
  border-radius: 8px;
  background: #3e85f3;

  display: flex;
  width: 178px;
  height: 48px;
  padding: 10px 165px 10px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`;

export const ButtonCancel = styled.button`
  border-radius: 8px;
  background: #efefef;

  display: flex;
  width: 144px;
  height: 48px;
  padding: 10px 165px 10px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`;
export const SvgClose = styled(close)`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;

  &:hover  path{
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

  color: rgba(52, 52, 52, 0.8);
  font-family: 'InterMedium';
  font-size: 12px;  
  line-height: 14px; 
`;
export const TextInput = styled.input`
  width: 340px;
  height: 46px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #f6f6f6;
  border: none;

  color: #343434;
  font-family: 'InterSemiBold';
  font-size: 14px;
  line-height: 18px; /* 128.571% */
  padding: 14px 18px;  
`;
export const ContainerTime = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 14px;
`;