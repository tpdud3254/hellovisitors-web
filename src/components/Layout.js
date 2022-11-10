import styled from "styled-components";
import Header from "./Header";
import PropTypes from "prop-types";

const Container = styled.div`
    height: ${(props) => props.height}px;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: column;
`;

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.layoutColor};
    width: 80%;
    max-width: 1200px;
    min-height: 600px;
    border-radius: 50px;
`;

function Layout({ children, headerShown = true }) {
    const height = window.innerHeight;
    return (
        <Container height={height}>
            <Wrapper>
                {headerShown === true ? <Header /> : null}
                <Content>{children}</Content>
            </Wrapper>
        </Container>
    );
}

Layout.propTypes = {
    headerShown: PropTypes.bool,
};
export default Layout;
