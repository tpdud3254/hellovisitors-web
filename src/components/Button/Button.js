import styled from "styled-components";
import colors from "../../styles/colors";
import PropTypes from "prop-types";

const SButton = styled.div`
    background-color: ${colors.subColor.skyblue};
    padding: 10px 20px;
    margin-top: 20px;
    border-radius: 15px;
    color: white;
    font-weight: 500;
    opacity: ${(props) => (props.disabled ? "0.5" : "1")};
    cursor: pointer;
    span {
        font-size: ${(props) => props.fontSize}px;
    }
`;

function Button({ value, fontSize = 14, onClick }) {
    return (
        <SButton fontSize={fontSize} onClick={onClick}>
            <span>{value}</span>
        </SButton>
    );
}

Button.propTypes = {
    value: PropTypes.string.isRequired,
    fontSize: PropTypes.number,
    onClick: PropTypes.func.isRequired,
};
export default Button;
