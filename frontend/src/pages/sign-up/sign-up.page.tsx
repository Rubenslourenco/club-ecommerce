import { FiLogIn } from "react-icons/fi";
import { useForm } from "react-hook-form";
import validator from "validator";

import CustomButton from "../../components/custom-button/custom-button.component";
import CustomInput from "../../components/custom-input/custom-input.component";
import Header from "../../components/header/header.component";
import {
  SignUpContainer,
  SignUpContent,
  SignUpHeadline,
  SignUpInputContainer,
} from "./sign-up.styles";
import InputErrorMessage from "../../components/input -error-message/input-erro-message.component";

interface SignUpForm {
  name: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpForm>();

  const watchPassword = watch("password");

  const handleSubmitPress = (data: SignUpForm) => {
    console.log({ data });
  };

  console.log({ errors });

  return (
    <>
      <Header />

      <SignUpContainer>
        <SignUpContent>
          <SignUpHeadline>Criar Conta</SignUpHeadline>

          <SignUpInputContainer>
            <p>Nome</p>
            <CustomInput
              hasError={!!errors?.name}
              placeholder="Digite seu nome"
              {...register("name", { required: true })}
            />
            {errors?.name?.type === "required" && (
              <InputErrorMessage>O nome é obrigatório.</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Sobrenome</p>
            <CustomInput
              hasError={!!errors?.lastName}
              placeholder="Digite seu Sobrenome"
              {...register("lastName", { required: true })}
            />
            {errors?.lastName?.type === "required" && (
              <InputErrorMessage>O sobrenome é obrigatório.</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>E-mail</p>
            <CustomInput
              hasError={!!errors?.email}
              placeholder="Digite seu E-mail"
              {...register("email", {
                required: true,
                validate: (value) => {
                  return validator.isEmail(value);
                },
              })}
            />
            {errors?.email?.type === "required" && (
              <InputErrorMessage>O email é obrigatório.</InputErrorMessage>
            )}

            {errors?.email?.type === "validate" && (
              <InputErrorMessage>
                Por favor , insira um email valido
              </InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Senha</p>
            <CustomInput
              hasError={!!errors?.password}
              placeholder="Digite sua senha"
              type={"password"}
              {...register("password", { required: true })}
            />
            {errors?.password?.type === "required" && (
              <InputErrorMessage>A senha é obrigatório.</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Confirmação de Senha</p>
            <CustomInput
              hasError={!!errors?.passwordConfirmation}
              placeholder="Digite novamente sua senha"
              type={"password"}
              {...register("passwordConfirmation", {
                required: true,
                validate: (value) => {
                  return value === watchPassword;
                },
              })}
            />
            {errors?.passwordConfirmation?.type === "required" && (
              <InputErrorMessage>
                A Confirmação de Senha é obrigatório.
              </InputErrorMessage>
            )}

            {errors?.passwordConfirmation?.type === "validate" && (
              <InputErrorMessage>
                A Confirmação de senha precisa ser igual a senha.
              </InputErrorMessage>
            )}
          </SignUpInputContainer>

          <CustomButton
            onClick={handleSubmit(handleSubmitPress)}
            startIcon={<FiLogIn size={18} />}
          >
            Criar Conta
          </CustomButton>
        </SignUpContent>
      </SignUpContainer>
    </>
  );
};

export default SignUpPage;
