import { createGlobalStyle, css } from 'styled-components';
import Regular from './Roboto-Regular.ttf';
import Bold from './Roboto-Bold.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: "RobotoRegular";
        src: url('${Regular}');
    }

    @font-face {
        font-family: "RobotoBold";
        src: url('${Bold}');
        font-weight: bold;
    }
`;

export const Roboto14 = css`
    font-family: 'RobotoRegular';
    font-size: 14px;
    line-height: 17px;
`;
