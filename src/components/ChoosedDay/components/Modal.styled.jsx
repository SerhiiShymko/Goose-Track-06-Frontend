import { styled } from "styled-components";

export const ContainerForm = styled.div`
  width: 396px;
  height: 360px;

  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
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