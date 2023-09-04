import React, { useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/navigation';

import { ReactComponent as LeftArrow } from '../../images/mainPage/leftArrow.svg';
import { ReactComponent as RightArrow } from '../../images/mainPage/rightArrow.svg';
import noPhoto from '../../images/mainPage/noPhoto.png';

import { Stars } from './Stars';

import {
  Container,
  Title,
  AvatarWrapper,
  AvatarImg,
  Name,
  SliderCard,
  ReviewText,
  SwiperNavBox,
  SwiperNavBtn,
  UserInfo,
  ReviewContainer,
} from './ReviewsSlider.styled';

import { fetchReviews } from 'redux/reviews/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectReviews } from 'redux/reviews/selectors';

// import { reviews } from 'data/reviews_example';

const ReviewsSlider = () => {
  const dispatch = useDispatch();
  const reviews = useSelector(selectReviews);

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  const slides = reviews;

  SwiperCore.use([Autoplay]);

  return (
    <section>
      <Container>
        <Title>Reviews</Title>
        <div>
          <Swiper
            initialSlide={1}
            slidesPerView={1}
            autoplay={{ delay: 4000 }}
            navigation={{
              prevEl: '#prev-button',
              nextEl: '#next-button',
            }}
            modules={[Navigation]}
            direction={'horizontal'}
            autoHeight={true}
            spaceBetween={24}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              1440: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
            }}
          >
            {slides.map(slide => (
              <SwiperSlide key={slide.owner._id}>
                <SliderCard>
                  <ReviewContainer>
                    <AvatarWrapper>
                      {slide.owner.avatarURL ? (
                        <AvatarImg
                          src={slide.owner.avatarURL}
                          alt="UserAvatar"
                        />
                      ) : (
                        <AvatarImg src={noPhoto} alt="UserAvatar" />
                      )}
                    </AvatarWrapper>
                    <UserInfo>
                      <Name>{slide.owner.name}</Name>
                      <Stars rating={slide.rating} />
                    </UserInfo>
                  </ReviewContainer>
                  <ReviewText>{slide.comment}</ReviewText>
                </SliderCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <SwiperNavBox>
          <SwiperNavBtn id="prev-button">
            <LeftArrow />
          </SwiperNavBtn>
          <SwiperNavBtn id="next-button">
            <RightArrow />
          </SwiperNavBtn>
        </SwiperNavBox>
      </Container>
    </section>
  );
};
export default ReviewsSlider;
