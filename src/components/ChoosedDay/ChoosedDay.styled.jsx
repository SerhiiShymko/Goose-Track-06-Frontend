import styled from 'styled-components';

export const TaskName = styled.h2`
  margin: 2px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin-bottom: 107px; */
`;

export const TextInTitle = styled.span`
  color: #111;
  text-align: center;
  font-family: InterBold;
  font-size: 20px;
  line-height: 24px; /* 120% */
`;

export const ButtonAddTask = styled.button`
  border-radius: 8px;
  border: 1px dashed #3e85f3;
  background: #e3f3ff;

  display: flex;
  width: 304px;
  height: 52px;
  padding: 16px 20px 16px 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  margin: 0 auto 0 auto;

  position: absolute;
  left: 20px;
  bottom: 28px;
`;
export const LogoPlus = styled.img`
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0;
`;

// export const LogoPlusCircle = styled.img`
//   width: 24px;
//   height: 24px;
// `;

export const TextInButton = styled.span`
  color: #111;
  text-align: center;
  font-family: InterSemiBold;
  font-size: 14px;
  line-height: 18px; /* 128.571% */
`;

export const TaskBorder = styled.div`
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  background: #fff;

  display: flex;
  width: 304px;
  max-height: 522px;
  min-height: 125px;
  padding: 18px 20px 28px 20px;
  flex-direction: column;
  /* align-items: flex-start; */
  gap: 18px;
  flex-shrink: 0;
  position: relative;
`;

export const TaskContainer = styled.div`
    display: flex;
    gap: 27px;    
`
// Task
export const TaskListContainer = styled.ul`
  margin: 0;
  margin-bottom: 112px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
  
`;

export const TaskItemContainer = styled.li`
  list-style: none;
  width: 272px;
  height: 80px;
  flex-shrink: 0;

  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  background: #f7f6f9;
  padding: 14px 14px 18px 14px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TaskText = styled.p`
  margin: 0;

  overflow: hidden;
  color: #111;
  text-overflow: ellipsis; 
  font-family: InterMedium;
  font-size: 14px;
 
  line-height: 18px; /* 128.571% */
`;

export const TaskPriority = styled.span`
  font-family: InterSemiBold;

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
`;
export const TaskLogoList = styled.div`
  padding: 0;

  display: flex;
  align-items: flex-end;
  gap:10px;
`;

export const TaskImageUser = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  border: 1.8px solid #3E85F3;  
`;

export const KontrolWrapper =styled.div`
  display:flex;
  justify-content:space-between;
`

export const WrapperUser=styled.div`
  display:flex;
  gap:8px;
  align-items:flex-end;
`