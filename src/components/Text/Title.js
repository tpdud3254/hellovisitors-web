import styled from "styled-components";
import colors from "../../styles/colors";
import PropTypes from "prop-types";

const STitle = styled.div`
    color: ${colors.mainColor};
    font-weight: 600;
    font-size: 25px;
    margin: 20px;
`;

function Title({ title }) {
    return <STitle>{title}</STitle>;
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Title;
