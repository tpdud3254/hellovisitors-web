import PropTypes from "prop-types";
import styled from "styled-components";

const Divider = styled.div`
    height: ${(props) => props.thickness}px;
    background-color: ${(props) => props.color};
    width: 100%;
    margin: 20px 0px;
`;

function HorizontalDivider({ thickness = 1, color = "black" }) {
    return <Divider thickness={thickness} color={color} />;
}

HorizontalDivider.propTypes = {
    thickness: PropTypes.number,
    color: PropTypes.string,
};
export default HorizontalDivider;
