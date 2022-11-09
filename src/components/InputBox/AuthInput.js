import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../styles/colors";

const AuthInput = styled.input`
    border: 2px solid ${colors.subColor.green};
    min-width: 300px;
    padding: 10px 20px;
    border-radius: 20px;
    margin: 5px;
    &:focus {
        border-color: ${colors.mainColor};
    }
`;

export default AuthInput;
