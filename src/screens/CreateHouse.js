import { useForm } from "react-hook-form";
import styled from "styled-components";
import colors from "../styles/colors";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import PageTitle from "../components/PageTitie";
import FormError from "../components/Message/FormError";
import { Link, useNavigate } from "react-router-dom";
import routes from "../routes";
import Form from "../components/Form/Form";
import AuthInput from "../components/InputBox/AuthInput";
import SubmitButton from "../components/Button/SubmitButton";
import HorizontalDivider from "../components/Divider/HorizontalDivider";
import { auth, db } from "../firebase";
import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { async } from "@firebase/util";

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

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0px;
`;

const InputText = styled.div`
    font-size: 16px;
    margin-right: 10px;
    color: rgba(0, 0, 0, 0.6);
`;

const Input = styled.input`
    background-color: white;
    padding: 5px 15px;
    width: 300px;
    height: 25px;
`;
function CreateHome() {
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

    const onValid = async () => {
        if (!loading) {
            setLoading(true);

            const { houseName, houseIntro } = getValues();

            const user = auth.currentUser;

            const docRef = await addDoc(collection(db, "house"), {
                uid: user.uid,
                houseName,
                houseIntro,
                createdAt: Date.now(),
                updatedAt: Date.now(),
            });

            const profileRef = doc(db, "profile", user.uid);

            await updateDoc(profileRef, {
                house: docRef.id,
            });

            navigate(`${routes.house}/${docRef.id}`);

            setLoading(false);
        }
    };

    const clearLoginErrors = () => {
        clearErrors("result");
    };

    //TODOS: 사진 업로드
    return (
        <div>
            <PageTitle title="Create house" />
            <Form title="나의 하우스 만들기">
                <Wrapper>
                    <form onSubmit={handleSubmit(onValid)}>
                        <InputContainer>
                            <InputText>하우스 이름</InputText>
                            <Input
                                {...register("houseName", {
                                    required: "House name is required.",
                                })}
                                type="text"
                                placeholder="House name"
                                onFocus={clearLoginErrors}
                            />
                        </InputContainer>
                        <InputContainer>
                            <InputText>하우스 소개</InputText>
                            <Input
                                {...register("houseIntro", {
                                    required: "House name is required.",
                                })}
                                type="text"
                                placeholder="Introduction"
                                onFocus={clearLoginErrors}
                            />
                        </InputContainer>
                        {/* <InputContainer>
                            <InputText>하우스 사진</InputText>
                            <Input
                                {...register("houseIntro", {
                                    required: "House name is required.",
                                })}
                                type="text"
                                placeholder="Introduction"
                                onFocus={clearLoginErrors}
                            />
                        </InputContainer> */}
                        <FormError
                            message={formState.errors?.result?.message}
                        />
                        <SubmitButton
                            type="submit"
                            value={loading ? "Loading" : "Create House"}
                            disabled={!formState.isValid || loading}
                        />
                    </form>
                </Wrapper>
            </Form>
        </div>
    );
}

export default CreateHome;
