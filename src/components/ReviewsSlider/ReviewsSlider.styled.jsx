import styled from 'styled-components';

export const Container = styled.div`
  width: 335px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 64px;
  @media screen and (min-width: 768px) {
    width: 704px;
    margin-bottom: 100px;
  }
  @media screen and (min-width: 1440px) {
    width: 1157px;
    margin-bottom: 118px;
  }
`;

export const Title = styled.h2`
  font-family: 'InterBold';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.14;
  color: #3e85f3;
  text-align: center;
  text-transform: uppercase;

  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
    margin-bottom: 50px;
  }
`;

export const SliderCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid #e7e5e5;

  height: 194px;

  padding: 24px 20px 24px 24px;
  overflow-y: scroll;
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    padding: 32px 32px 50px 32px;
  }
`;

export const AvatarWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  overflow: hidden;
`;

export const AvatarImg = styled.img`
  object-fit: cover;
  background-repeat: no-repeat;
  height: 50px;
  width: 50px;
`;
export const UserInfo = styled.div`
  margin-left: 18px;
`;

export const Name = styled.h2`
  font-family: 'InterBold';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  color: #343434;

  margin-bottom: 13px;
`;
export const StyledStars = styled.div`
  display: flex;
  justify-content: space-between;
  width: 110px;
`;

export const ReviewText = styled.p`
  font-family: 'InterMedium';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.3;
  color: rgba(17, 17, 17, 0.7);
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    margin-left: 68px;
  }
`;

export const ReviewContainer = styled.div`
  position: sticky;
  top: 0px;
  display: flex;
  background-color: #ffffff;
`;

export const SwiperNavBox = styled.div`
  width: 125px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  gap: 25px;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 767px) {
    width: 147px;
    height: 61px;
  }
`;

export const SwiperNavBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  width: 50px;
  height: 46px;
  cursor: pointer;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    width: 61px;
    height: 48px;
  }

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
