import styled from "styled-components";
import Title from "../Text/Title";
import PropTypes from "prop-types";

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

function Form({ children, title }) {
    return (
        <FormContainer>
            <Title title={title}></Title>
            {children}
        </FormContainer>
    );
}

Form.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Form;
