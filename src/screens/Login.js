import { useForm } from "react-hook-form";
import styled from "styled-components";
import colors from "../styles/colors";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import PageTitle from "../components/PageTitie";
import FormError from "../components/Message/FormError";
import { Link, useNavigate } from "react-router-dom";
import routes from "../routes";
import AuthForm from "../components/Form/AuthForm";
import AuthInput from "../components/InputBox/AuthInput";
import SubmitButton from "../components/Button/SubmitButton";
import HorizontalDivider from "../components/Divider/HorizontalDivider";
import { auth } from "../firebase";

const Wrapper = styled.div`
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const BottomWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
        color: ${colors.subColor.orange};
        margin: 10px;
    }
`;

function Login() {
    const navigate = useNavigate();

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

            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    let message = "";
                    if (error.code === "auth/invalid-email") {
                        message = "맞지 않는 이메일 형식입니다.";
                    } else if (error.code === "auth/user-disabled") {
                        message = "사용자를 찾을 수 없습니다.";
                    } else if (error.code === "auth/user-not-found") {
                        message = "사용자를 찾을 수 없습니다.";
                    } else if (error.code === "auth/wrong-password") {
                        message = "비밀번호가 맞지 않습니다.";
                    } else {
                        message = error.message;
                    }

                    return setError("result", {
                        message,
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
            <PageTitle title="Login" />
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
                            value={loading ? "Loading" : "Login"}
                            disabled={!formState.isValid || loading}
                        />
                    </form>
                </Wrapper>
            </AuthForm>
            <HorizontalDivider thickness={2} color={"rgba(0,0,0,0.1)"} />
            <BottomWrapper>
                <span>계정이 없으신가요?</span>
                <Link to={routes.signUp}>Sign Up</Link>
            </BottomWrapper>
        </div>
    );
}

export default Login;
