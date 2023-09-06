import styled from 'styled-components';

import calendar_goos_desktop from 'images/header/header_goos_desktop.png';
import calendar_goos_desktopx2 from 'images/header/header_goos_desktop@x2.png';

export const WrapperCurrentPage = styled.div`
  display: flex;
  width: 360px;
`;
export const SpanWraper = styled.span`
  margin-top: 8px;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
`;
export const CurrentPageWithLogo = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* width: 183px; */
  color: ${({ theme }) => theme.colors.colorAccent};
  text-shadow: 0px 9.4px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
`;

export const CalendarLogoWrapper = styled.div`
  margin-right: 6px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-width: 1440px) {
    width: 71px;
    height: 68px;
    background-image: url(${calendar_goos_desktop});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${calendar_goos_desktopx2});
    }
  }
`;
