import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Avatar from "../../components/Avatar/Avatar";
import Button from "../../components/Button/Button";
import SubmitButton from "../../components/Button/SubmitButton";
import VerticalDivider from "../../components/Divider/VerticalDivider";
import { auth, db } from "../../firebase";
import colors from "../../styles/colors";
import Content from "./Content";
const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-evenly;
    align-items: center;
`;
const Wrapper = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Left = styled(Wrapper)`
    align-items: flex-start;
    padding: 0 30px;
`;

const Right = styled(Wrapper)`
    align-items: center;
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 20px;
`;

const TitleText = styled.div`
    display: flex;
    align-items: center;
    font-weight: 600;
    margin-left: 10px;
    font-size: 25px;

    div {
        font-size: 30px;
        color: ${colors.subColor.yellow};
    }
`;

const CreateHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const CreateHomeText = styled.div`
    font-size: 20px;
`;

function Home() {
    const { uid } = auth.currentUser;
    const [username, setUsername] = useState("");
    const [homeId, setHomeId] = useState(null);

    const visitorsBook = null;
    const neighborUpdates = null;
    const visitedNeighbor = null;

    const getUsername = async () => {
        const profileRef = doc(db, "profile", uid);
        const docSnap = await getDoc(profileRef);

        if (docSnap.exists()) {
            const { username, home } = docSnap.data();
            setUsername(username);
            setHomeId(home);
        } else {
            console.log("No such document!");
        }
    };

    useEffect(() => {
        getUsername();
    });

    return (
        <Container>
            <Left>
                <TitleContainer>
                    <Avatar />
                    <TitleText>
                        <div>{username}</div>님, 환영합니다!
                    </TitleText>
                </TitleContainer>
                <Content title="최근 방명록">
                    {visitorsBook ? null : null}
                </Content>
                <Content title="이웃의 최근 활동">
                    {neighborUpdates ? null : null}
                </Content>
                <Content title="내가 최근 방문한 이웃">
                    {neighborUpdates ? null : null}
                </Content>
            </Left>
            <VerticalDivider thickness={1} color={colors.subColor.green} />
            <Right>
                <div>
                    {homeId ? (
                        "달력"
                    ) : (
                        <CreateHome>
                            <CreateHomeText>
                                아직 {username}님의 집을 만들지 않으셨나요?
                            </CreateHomeText>
                            <Button value="집 만들러 가기" fontSize={16} />
                        </CreateHome>
                    )}
                </div>
            </Right>
        </Container>
    );
}

export default Home;
