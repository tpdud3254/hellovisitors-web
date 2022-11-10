import PropTypes from "prop-types";
import styled from "styled-components";
import HorizontalDivider from "../../components/Divider/HorizontalDivider";
import colors from "../../styles/colors";

const ContentContainer = styled.div`
    width: 100%;
    margin-bottom: 25px;
`;
const ContentTitle = styled.div`
    margin-bottom: -10px;
    padding-left: 5px;
    color: ${colors.mainColor};
    font-size: 16px;
`;

const SContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.5);
    width: 100%;
    height: 50px;
    margin-top: -13px;
`;

const NotFoundText = styled.div`
    color: rgba(0, 0, 0, 0.5);
`;

function Content({ title, children }) {
    return (
        <ContentContainer>
            <ContentTitle>{title}</ContentTitle>
            <HorizontalDivider thickness={1} color={colors.subColor.skyblue} />
            <SContent>
                {children ? null : (
                    <NotFoundText>{title}이 없습니다.</NotFoundText>
                )}
            </SContent>
        </ContentContainer>
    );
}

Content.propTypes = {
    title: PropTypes.string.isRequired,
};
export default Content;
