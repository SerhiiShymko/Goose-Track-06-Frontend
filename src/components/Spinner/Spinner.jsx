import { Blocks } from 'react-loader-spinner';
import { SpinnerStyled } from './Spinner.styled';

export default function Spinner() {
  return (
    <SpinnerStyled>
      <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    </SpinnerStyled>
  );
}
