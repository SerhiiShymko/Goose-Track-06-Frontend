import styled from 'styled-components';
import { ReactComponent as ArrowCircle } from '../../images/tascs/arrow-circle-right.svg';
import { ReactComponent as addTask } from '../../images/tascs/addTask.svg';
import { ReactComponent as plusCircle } from '../../images/tascs/plus.svg';
import { ReactComponent as pencil } from '../../images/tascs/pencil-2.svg';
import { ReactComponent as trash } from '../../images/tascs/trash-2.svg';
import { ReactComponent as phAvatar } from '../../images/profile/phAvatar.svg';

export const MainContainer = styled.div`
  @media screen and (min-width: 1140px) {
    margin: 32px;
    width: 1087px;
  }
  @media screen and (max-width: 1139px) {
    margin: 24px 32px;
    width: 704px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  @media screen and (max-width: 767px) {
    width: 335px;
    margin: 24px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
`;

export const TaskName = styled.h2`
  margin: 2px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextInTitle = styled.span`
  color: ${({ theme }) => theme.colors.colorAccent};
  text-align: center;
  /* font-family: InterBold; */
  font-size: 20px;
  line-height: 24px; /* 120% */
`;

export const ButtonAddTask = styled.button`
  border-radius: 8px;
  border: 1px dashed #3e85f3;
  background: ${({ theme }) => theme.colors.backgroundBtnAddTask};

  display: flex;

  padding: 16px 20px 16px 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  margin: 0 auto 0 auto;

  position: absolute;
  left: 20px;
  bottom: 28px;
  @media screen and (min-width: 768px) {
    width: 304px;
    height: 52px;
  }
  @media screen and (max-width: 767px) {
    width: 299px;
    height: 48px;
  }
  cursor: pointer;
  &:hover {
    border: 1px solid #3e85f3;
    /* background: #cce7fc; */
  }
`;
export const LogoPlus = styled.img`
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0;
`;

export const TextInButton = styled.span`
  color: ${({ theme }) => theme.colors.colorAccent};
  text-align: center;
  font-family: InterSemiBold;
  font-size: 14px;
  line-height: 18px; /* 128.571% */
`;

export const TaskBorder = styled.div`
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.colorCalendarBorder};
  background: ${({ theme }) => theme.colors.backgroundSubcomponents};

  display: flex;

  min-height: 125px;
  padding: 18px 20px 28px 20px;
  flex-direction: column;

  gap: 18px;
  flex-shrink: 0;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 344px;
    max-height: 568px;
  }
  @media screen and (max-width: 767px) {
    width: 335px;
    max-height: 432px;
  }
`;

export const TaskContainer = styled.div`
  display: flex;
  align-items: flex-start;
  @media screen and (min-width: 375px) {
    gap: 20px;
  }

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
  @media screen and (min-width: 1140px) {
    gap: 27px;
  }
  @media screen and (max-width: 1139px) {
    width: 704px;
    overflow-y: hidden;
    overflow-x: auto;
    /* white-space: nowrap; */
    /* margin-right: -13px; */

    &::-webkit-scrollbar {
      width: 364px;
      height: 14px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 12px;
      background: #e7e5e5;
    }
    &::-webkit-scrollbar-track {
      border-radius: 12px;
      background: #f2f2f2;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(left, #8391a6, #536175);
    }
  }
  @media screen and (max-width: 767px) {
    width: 347px;
    padding-right: 12px;
  }
`;
// Task
export const TaskListContainer = styled.ul`
  margin: 0;
  margin-bottom: 102px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;

  overflow-y: auto;
  overflow-x: hidden;
  margin-right: -13px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background: #e7e5e5;
  }
  &::-webkit-scrollbar-track {
    border-radius: 12px;
    background: #f2f2f2;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(left, #8391a6, #536175);
  }

  @media screen and (max-width: 767px) {
    &::-webkit-scrollbar {
      width: 6px;
      height: 334px;
    }
    margin-right: -15px;
  }
`;

export const TaskItemContainer = styled.li`
  list-style: none;
  flex-shrink: 0;

  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  background: ${({ theme }) => theme.colors.backgroundBody};
  padding: 14px 14px 18px 14px;
  /* display: inline-grid; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 300px;
    height: 112px;
  }
  @media screen and (max-width: 767px) {
    width: 299px;
    height: 108px;
  }
`;

export const TaskText = styled.p`
  margin: 0;

  overflow: hidden;
  color: ${({ theme }) => theme.colors.colorAccent};
  text-overflow: ellipsis;
  font-family: InterMedium;
  font-size: 14px;

  line-height: 18px; /* 128.571% */
`;

export const TaskPriority = styled.span`
  /* font-family: InterSemiBold; */
  font-weight: 600;
  color: #f7f6f9;
  text-align: center;
  font-size: 10px;
  line-height: 12px; /* 120% */

  /* background: #EA3D65; */
  background: ${props => props.$background};

  padding: 4px 12px;
  border-radius: 4px;
`;
export const TaskLogo = styled.img`
  width: 16px;
  height: 16px;
  &:hover {
    fill: rgba(62, 133, 243, 1);
  }
  & path {
    fill: red;
  }
  cursor: pointer;
`;
export const SvgArrow = styled(ArrowCircle)`
  width: 16px;
  height: 16px;
  cursor: pointer;
  stroke: ${({ theme }) => theme.colors.colorAccent};

  &:hover path {
    stroke: rgba(62, 133, 243, 1);
  }
`;
export const SvgAddTask = styled(addTask)`
  width: 24px;
  height: 24px;
  stroke: ${({ theme }) => theme.colors.colorAccent};
`;
export const SvgPlusCircle = styled(plusCircle)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  stroke: ${({ theme }) => theme.colors.colorAccent};

  &:hover path {
    stroke: rgba(62, 133, 243, 1);
  }
`;

export const SvgPencil = styled(pencil)`
  width: 16px;
  height: 16px;
  cursor: pointer;
  stroke: ${({ theme }) => theme.colors.colorAccent};

  &:hover path {
    stroke: rgba(62, 133, 243, 1);
  }
`;

export const SvgTrash = styled(trash)`
  width: 16px;
  height: 16px;
  cursor: pointer;
  stroke: ${({ theme }) => theme.colors.colorAccent};

  &:hover path {
    stroke: #f12a34;
  }
`;

export const TrashButton = styled.button`
  width: 16px;
  height: 16px;
`;

export const TaskLogoList = styled.div`
  padding: 0;

  display: flex;
  align-items: flex-end;
  gap: 10px;
`;

export const TaskImageUser = styled(phAvatar)`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  border: 1.8px solid #3e85f3;
  padding: 5px;
  background: lightgray 50% / cover no-repeat;
`;

export const KontrolWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WrapperUser = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;
`;
