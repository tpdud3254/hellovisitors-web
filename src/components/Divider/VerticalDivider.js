import PropTypes from "prop-types";
import styled from "styled-components";

const Divider = styled.div`
    height: 90%;
    background-color: ${(props) => props.color};
    width: ${(props) => props.thickness}px;
`;

function VerticalDivider({ thickness = 1, color = "black" }) {
    return <Divider thickness={thickness} color={color} />;
}

VerticalDivider.propTypes = {
    thickness: PropTypes.number,
    color: PropTypes.string,
};
export default VerticalDivider;
