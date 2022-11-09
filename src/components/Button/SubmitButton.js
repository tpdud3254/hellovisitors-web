import styled from "styled-components";
import colors from "../../styles/colors";

const SubmitButton = styled.input`
    background-color: ${colors.subColor.yellow};
    padding: 10px 20px;
    margin-top: 20px;
    border-radius: 15px;
    color: white;
    font-weight: 500;
    opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;

export default SubmitButton;
