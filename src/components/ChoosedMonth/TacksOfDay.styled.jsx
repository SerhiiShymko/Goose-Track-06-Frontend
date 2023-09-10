import { PRIORITY } from 'data/constants';
import styled from 'styled-components';

export const ListOfElements = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 44px;
  height: 44px;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
    height: 14px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background: #beafaf;
  }
  &::-webkit-scrollbar-track {
    border-radius: 12px;
    background: #f2f2f2;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(left, #8391a6, #536175);
  }

  @media screen and (min-width: 768px) {
    width: 92px;
    height: 64px;
  }
  @media screen and (min-width: 1440px) {
    width: 140px;
    height: 64px;
  }
`;

export const Element = styled.div`
  padding: 4px 8px;
  min-height: 18px;
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
    min-height: 26px;
  }
  @media screen and (min-width: 1440px) {
    padding: 4px 12px;
  }
`;
