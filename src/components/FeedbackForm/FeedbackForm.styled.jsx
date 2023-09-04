import styled from 'styled-components';

import { ReactComponent as CloseSvgStyled } from 'images/sideBar/x-close.svg';
import { ReactComponent as PencilSvgStyled } from 'images/review/pencil.svg';
import { ReactComponent as TrashSvgStyled } from 'images/review/trash.svg';

export const FeedbackFormContainer = styled.div`
  position: relative;
  padding: 28px 20px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid;
  border-color: ${({ theme }) =>
    theme.name === 'light'
      ? 'rgba(220, 227, 229, 0.80)'
      : 'rgba(17, 17, 17, 0.05)'};
  background: ${({ theme }) => (theme.name === 'light' ? '#fff' : '#171820')};
  box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05);

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 468px;
  }
`;

export const CloseSvg = styled(CloseSvgStyled)`
  width: 24px;
  height: 24px;
  stroke: ${({ theme }) => theme.colors.colorBody};
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background-color: inherit;
  cursor: pointer;
`;

export const Paragraph = styled.p`
  color: ${({ theme }) =>
    theme.name === 'light'
      ? 'rgba(52, 52, 52, 0.8)'
      : 'rgba(250, 250, 250, 0.30)'};
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
`;

export const LeggendContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;

export const PencilSvg = styled(PencilSvgStyled)`
  width: 16px;
  height: 16px;
  stroke: #inherit;
`;

export const ButtonPencil = styled.button`
  display: flex;
  width: 30px;
  height: 30px;
  margin-right: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) =>
    theme.name === 'light' ? '#e3f3ff' : '#353647'};
  border-radius: 50px;
  cursor: pointer;
  stroke: #3e85f3;

  &:hover {
    background-color: #3e85f3;
    stroke: #fff;
  }
`;

export const TrashSvg = styled(TrashSvgStyled)`
  width: 16px;
  height: 16px;
  stroke: #inherit;
`;

export const ButtonTrash = styled.button`
  display: flex;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: rgba(234, 61, 101, 0.2);
  cursor: pointer;
  stroke: #ea3d65;

  &:hover {
    background-color: #ea3d65;
    stroke: #fff;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 130px;
  margin-top: 8px;
  margin-bottom: 14px;
  padding: 12px 14px;
  border: 1px solid;
  border-color: ${({ theme }) =>
    theme.name === 'light' ? '#f6f6f6' : 'rgba(255, 255, 255, 0.15)'};
  border-radius: 8px;
  background: ${({ theme }) =>
    theme.name === 'light' ? '#f6f6f6' : '#171820'};

  resize: none;

  color: ${({ theme }) => (theme.name === 'light' ? '#343434' : '#fff')};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;

  &::placeholder {
    color: #343434;
  }
`;

export const ButtonSubmit = styled.button`
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  border-radius: 8px;
  margin-right: 8px;
  padding: 12px 55px;
  background: #3e85f3;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    padding: 15px 89px;
  }
`;

export const ButtonCancel = styled.button`
  color: ${({ theme }) => (theme.name === 'light' ? '#343434' : '#fff')};
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  border-radius: 8px;
  padding: 12px 47px;
  background: ${({ theme }) =>
    theme.name === 'light' ? '#e5edfa' : '#21222C'};
  cursor: pointer;

  @media screen and (min-width: 768px) {
    padding: 15px 79px;
  }
`;

export const Text = styled.p`
  margin: 0px;
  margin-bottom:24px;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  margin-bottom:: ${props => props.marginbottom || '24px'};
  color: ${props => props.color || '#DA1414'};
  @media screen and (min-width: 375px) {
    margin-bottom:12px;

  }
  @media screen and (min-width: 768px) {
    margin-bottom:18px;
  }
`;
