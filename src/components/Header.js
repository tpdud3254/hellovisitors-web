import { faHome, faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import colors from "../styles/colors";
import SearchInputBox from "./InputBox/SearchInput";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import routes from "../routes";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 50px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

const Column = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Row = styled.div`
    color: ${colors.subColor.beige};
    margin: 0px 5px;
    cursor: pointer;
    svg {
        font-size: ${(props) => (props.iconSize ? props.iconSize : 20)}px;
    }
`;

function Header() {
    const navigate = useNavigate();
    const logOutUser = () => {
        auth.signOut().then((result) => {});
    };

    return (
        <Container>
            <Wrapper>
                <Column>
                    <Row>
                        <FontAwesomeIcon icon={faHome} />
                    </Row>
                </Column>
                <Column>
                    <SearchInputBox placeholder="이웃을 검색해 보세요!" />
                    <Row iconSize="23">
                        <FontAwesomeIcon icon={faHouseUser} />
                    </Row>
                    <Row>
                        <FontAwesomeIcon icon={faUser} />
                    </Row>
                    <Row onClick={logOutUser}>logout</Row>
                </Column>
            </Wrapper>
        </Container>
    );
}

export default Header;
