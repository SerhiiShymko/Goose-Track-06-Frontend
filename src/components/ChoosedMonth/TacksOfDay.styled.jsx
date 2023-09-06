import { PRIORITY } from 'data/constants';
import styled from 'styled-components';

export const ListOfElements = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 44px;

  @media screen and (min-width: 768px) {
    width: 92px;
  }
  @media screen and (min-width: 1440px) {
    width: 140px;
  }
`;

export const Element = styled.div`
  padding: 4px 8px;
  border-radius: 8px;
  background: ${props =>
    props.$priority === PRIORITY.LOW
      ? '#ceeefd'
      : props.$priority === PRIORITY.MEDIUM
      ? '#FCF0D4'
      : '#FFD2DD'};
  color: ${props =>
    props.$priority === PRIORITY.LOW
      ? '#3E85F3'
      : props.$priority === PRIORITY.MEDIUM
      ? '#F3B249'
      : '#EA3D65'};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 10px;
  font-weight: 700;
  line-height: 1.4;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28571;
  }
  @media screen and (min-width: 1440px) {
    padding: 4px 12px;
  }
`;
