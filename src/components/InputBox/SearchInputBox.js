import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import colors from "../../styles/colors";
import PropTypes from "prop-types";

const SearchContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px 15px;
    min-width: 350px;
    height: 30px;
    border-radius: 15px;
    border: 2px solid ${colors.subColor.beige};
    margin-right: 15px;
    color: ${colors.subColor.beige};

    input {
        width: 100%;
        margin-right: 10px;
        &::placeholder {
            color: ${colors.subColor.beige};
            opacity: 0.4;
        }
    }
`;

function SearchInputBox({ placeholder }) {
    return (
        <SearchContainer>
            <input type="text" placeholder={placeholder}></input>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
        </SearchContainer>
    );
}

SearchInputBox.propTypes = {
    placeholder: PropTypes.string,
};
export default SearchInputBox;
