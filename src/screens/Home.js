import styled from "styled-components";
import colors from "../styles/colors";

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    align-items: center;
`;
const Wrapper = styled.div``;
const Line = styled.div`
    width: 2px;
    height: 90%;
    background-color: ${colors.subColor.green};
`;

function Home() {
    return (
        <Container>
            <Wrapper>
                <div>고세영님 환영합니다</div>
                <div>최근 방명록</div>
                <div>최근 이웃 업데이트</div>
                <div>내가 최근 방문한 이웃</div>
            </Wrapper>
            <Line></Line>
            <Wrapper>
                <div>달력</div>
            </Wrapper>
        </Container>
    );
}

export default Home;
