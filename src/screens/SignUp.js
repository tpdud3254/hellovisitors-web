import { useForm } from "react-hook-form";
import styled from "styled-components";
import colors from "../styles/colors";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import PageTitle from "../components/PageTitie";
import FormError from "../components/Message/FormError";
import { Link } from "react-router-dom";
import routes from "../routes";
import AuthForm from "../components/Form/AuthForm";
import AuthInput from "../components/InputBox/AuthInput";
import SubmitButton from "../components/Button/SubmitButton";
import HorizontalDivider from "../components/Divider/HorizontalDivider";

const Wrapper = styled.div`
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

function SignUp() {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState,
        setError,
        clearErrors,
        getValues,
    } = useForm();

    const onValid = () => {
        if (!loading) {
            setLoading(true);

            const { email, password } = getValues();

            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    if (
                        errorMessage.match("email") ||
                        errorMessage.match("user-not-found")
                    ) {
                        return setError("result", {
                            message: "사용자를 찾을 수 없습니다.",
                        });
                    } else if (errorMessage.match("password")) {
                        return setError("result", {
                            message: "비밀번호가 맞지 않습니다.",
                        });
                    }

                    return setError("result", {
                        message: errorMessage,
                    });
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    };

    const clearLoginErrors = () => {
        clearErrors("result");
    };

    return (
        <div>
            <PageTitle title="login" />
            <AuthForm title="LOG IN">
                <Wrapper>
                    <form onSubmit={handleSubmit(onValid)}>
                        <AuthInput
                            {...register("email", {
                                required: "Email is required.",
                            })}
                            type="text"
                            placeholder="Email"
                            onFocus={clearLoginErrors}
                        />
                        <AuthInput
                            {...register("password", {
                                required: "Email is required.",
                            })}
                            type="password"
                            placeholder="Password"
                            onFocus={clearLoginErrors}
                        />
                        <FormError
                            message={formState.errors?.result?.message}
                        />
                        <SubmitButton
                            type="submit"
                            value="Login"
                            disabled={!formState.isValid || loading}
                        />
                    </form>
                </Wrapper>
            </AuthForm>
        </div>
    );
}

export default SignUp;
