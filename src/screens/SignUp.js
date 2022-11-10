import { useForm } from "react-hook-form";
import styled from "styled-components";
import colors from "../styles/colors";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import PageTitle from "../components/PageTitie";
import FormError from "../components/Message/FormError";
import { Link, useNavigate } from "react-router-dom";
import routes from "../routes";
import AuthForm from "../components/Form/AuthForm";
import AuthInput from "../components/InputBox/AuthInput";
import SubmitButton from "../components/Button/SubmitButton";
import HorizontalDivider from "../components/Divider/HorizontalDivider";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

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

function SignUp() {
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

            const { email, password, username } = getValues();

            // const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                .then(async (userCredential) => {
                    // Signed in
                    const user = userCredential.user;

                    try {
                        const docRef = doc(db, "profile", user.uid);
                        await setDoc(
                            docRef,
                            {
                                uid: user.uid,
                                username,
                                follower: 0,
                                following: 0,
                                home: null,
                                createdAt: Date.now(),
                                updatedAt: Date.now(),
                            }
                            // { merge: true }
                        );

                        navigate(routes.home);
                    } catch (e) {
                        console.error("Error adding document: ", e);
                    }
                })
                .catch((error) => {
                    let message = "";
                    if (error.code === "auth/invalid-email") {
                        message = "맞지 않는 이메일 형식입니다.";
                    } else if (error.code === "auth/email-already-in-use") {
                        message = "사용중인 이메일 입니다.";
                    } else if (error.code === "auth/operation-not-allowed") {
                        message = "계정이 비활성화 되었습니다.";
                    } else if (error.code === "auth/weak-password") {
                        message = "더 강력한 비밀번호를 사용해주십시오.";
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
            <AuthForm title="SIGN IN">
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
                            {...register("username", {
                                required: "userName is required.",
                            })}
                            type="text"
                            placeholder="Username"
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
                            value={loading ? "Loading" : "Sign up"}
                            disabled={!formState.isValid || loading}
                        />
                    </form>
                </Wrapper>
            </AuthForm>
            <HorizontalDivider thickness={2} color={"rgba(0,0,0,0.1)"} />
            <BottomWrapper>
                <span>계정이 있으신가요?</span>
                <Link to={routes.home}>Login</Link>
            </BottomWrapper>
        </div>
    );
}

export default SignUp;
