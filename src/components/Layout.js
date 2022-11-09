import styled from "styled-components";
import Header from "./Header";

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
    height: 75%;
    border-radius: 50px;
`;

function Layout({ children }) {
    const height = window.innerHeight;
    return (
        <Container height={height}>
            <Wrapper>
                <Header />
                <Content>{children}</Content>
            </Wrapper>
        </Container>
    );
}

export default Layout;
