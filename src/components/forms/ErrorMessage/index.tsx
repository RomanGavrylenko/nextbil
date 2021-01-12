import styled from 'styled-components';

interface ErrorMessageProps {
    isShow: boolean;
}

export const ErrorMessage = styled.div<ErrorMessageProps>`
    display: ${(props) => (props.isShow ? 'block' : 'none')};
    margin-top: 5px;
    padding-left: 18px;
    font-family: RobotoRegular;
    font-size: 10px;
    line-height: 13px;
    color: #e82828;
`;
