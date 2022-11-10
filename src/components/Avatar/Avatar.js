import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../styles/colors";

const SAvatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    background-color: white;
    border: 1px solid ${colors.subColor.skyblue};
`;

function Avatar() {
    return (
        <SAvatar>
            <FontAwesomeIcon icon={faUser} color="rgba(0,0,0,0.5)" size="lg" />
        </SAvatar>
    );
}

Avatar.propTypes = {};
export default Avatar;
