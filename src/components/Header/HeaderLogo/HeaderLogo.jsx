const {
  WrapperCurrentPage,
  CalendarLogoWrapper,
  CurrentPageWithLogo,
  SpanWraper,
} = require('./HeaderLogo.styled');

const HeaderLogo = () => {
  return (
    <>
      <WrapperCurrentPage>
        <CalendarLogoWrapper />
        <CurrentPageWithLogo>
          Calendar
          <SpanWraper>
            {' '}
            <span style={{ color: '#3E85F3' }}>Let go</span> of the past and focus on the present!
          </SpanWraper>
        </CurrentPageWithLogo>
      </WrapperCurrentPage>
    </>
  );
};

export default HeaderLogo;