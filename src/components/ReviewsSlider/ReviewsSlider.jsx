// import React from 'react';

// import { Stars } from './Stars';
// import {
//   // ArrowLeft,
//   // ArrowRight,
//   // ColorContainer,
//   // Comment,
//   // Image,
//   // ImgWrapper,
//   // MainContainerSlider,
//   // Name,
//   // ReviewsTitle,
//   // SliderContainer,
//   SliderDescription,
//   SliderImage,
//   SliderMenuContainer,
//   SliderMenuHeader,
//   SliderMenuLeftSlider,
//   SliderMenuProfileWrapper,
//   SliderMenuQuoteIcon,
//   SliderMenuRightSlider,
//   SliderName,
//   // Svg,
//   Wrapper,
// } from './ReviewsSlider.styled';
// // import { useSelector } from 'react-redux';
// // import { selectReviews } from 'redux/reviews/selectors';

// import { useState } from 'react';
// import { useEffect } from 'react';

// import { reviews } from 'data/reviews_example';

// function ReviewsSlider(props) {
//   // const reviews = useSelector(selectReviews);

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleClick = action => {
//     const len = reviews.length;

//     if (action === 'previous') {
//       if (currentIndex - 1 === -1) {
//         setCurrentIndex(len - 1);
//       } else {
//         setCurrentIndex(currentIndex - 1);
//       }
//     }

//     if (action === 'future') {
//       if (currentIndex + 1 === len) {
//         setCurrentIndex(0);
//       } else {
//         setCurrentIndex(currentIndex + 1);
//       }
//     }
//   };

//   useEffect(() => {
//     const myInterval = setInterval(() => {
//       handleClick('future');
//     }, 4000);

//     return () => clearInterval(myInterval);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [currentIndex]);

//   return (
//     <>
//       <SliderMenuContainer>
//         <SliderMenuHeader>Reviews</SliderMenuHeader>
//         <Wrapper>
//           {reviews.map((person, index) => {
//             return (
//               <SliderMenuProfileWrapper
//                 className={(() => {
//                   const len = reviews.length;

//                   if (currentIndex === 0 && index === len - 1) {
//                     return 'previous';
//                   } else if (currentIndex === len - 1 && index === 0) {
//                     return 'future';
//                   } else if (index === currentIndex) {
//                     return 'current';
//                   } else if (currentIndex > index) {
//                     return 'previous';
//                   } else {
//                     return 'future';
//                   }
//                 })()}
//                 key={person.owner._id}
//               >
//                 <SliderImage src={person.owner.avatarURL} />
//                 <SliderName>{person.owner.name}</SliderName>
//                 <Stars rating={person.rating} />
//                 <SliderDescription>{person.comment}</SliderDescription>
//               </SliderMenuProfileWrapper>
//             );
//           })}
//         </Wrapper>
//         <SliderMenuQuoteIcon />
//         <SliderMenuLeftSlider onClick={() => handleClick('previous')} />
//         <SliderMenuRightSlider onClick={() => handleClick('future')} />
//       </SliderMenuContainer>
//     </>
//   );
// }
// export default ReviewsSlider;
import React from 'react';

const ReviewsSlider = () => {
  return <div>ReviewsSlider</div>;
};

export default ReviewsSlider;
