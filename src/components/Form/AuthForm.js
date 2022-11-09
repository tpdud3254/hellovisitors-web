import styled from "styled-components";
import Title from "../Text/Title";
import PropTypes from "prop-types";

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

function AuthForm({ children, title }) {
    return (
        <FormContainer>
            <Title title={title}></Title>
            {children}
        </FormContainer>
    );
}

AuthForm.propTypes = {
    title: PropTypes.string.isRequired,
};

export default AuthForm;
