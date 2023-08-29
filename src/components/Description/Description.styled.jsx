import styled from 'styled-components';

export const ListItem = styled.li`
  margin-bottom: 64px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    &:nth-of-type(2) {
      & div:nth-of-type(1) {
        margin-left: auto;
      }
    }
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 228px;
    justify-content: flex-end;
    &:nth-of-type(2) {
      flex-direction: row-reverse;
      align-items: flex-start;
      & div:nth-of-type(1) {
        margin-left: 0;
      }
    }
  }
`;
export const InfoWrapper = styled.div`
  @media (min-width: 768px) {
    max-width: 275px;
  }
`;
export const TitleWrapper = styled.h2`
  display: inline-flex;
  flex-direction: column;
  margin-bottom: 14px;

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`;
export const StyledNumber = styled.span`
  font-weight: 700;
  font-size: 80px;
  line-height: 1;
  color: #3e85f3;
  margin-bottom: 14px;
  @media (min-width: 768px) {
    font-size: 104px;
  }
`;
export const StyledLabel = styled.span`
  font-weight: 700;
  font-size: 32px;
  line-height: 1.25;
  text-transform: uppercase;
  border-radius: 44px;
  padding: 8px 18px;
  margin-bottom: 8px;

  background-color: #dcebf7;
  color: #3e85f3;

  @media (min-width: 768px) {
    padding: 6px 18px;
    font-size: 40px;
    line-height: 1.1;
  }
`;
export const StyledText = styled.span`
  font-weight: 700;
  font-size: 32px;
  line-height: 1.25;
  text-transform: uppercase;
  color: #171820;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }
`;
export const Info = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.3;
  color: #111111;

  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 48px;
  }
`;
