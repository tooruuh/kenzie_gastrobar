import { Container, Redirection, RegisterHeader } from "./styles";

import { Link } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../Services/api";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

function RegisterPage() {
  const history = useHistory();
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    email: yup.string().email("Email Inválido").required("Campo obrigatório!"),
    confEmail: yup
      .string()
      .oneOf([yup.ref("email")], "Emails diferentes")
      .required("Campo obrigatório!"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 digitos")
      .required("Campo obrigatório!"),
    confPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas Diferentes")
      .required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmitFunction(data) {
    api
      .post("/register", data)
      .then((response) => {
        toast.success('Conta criada com sucesso! ', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
        history.push("/login")
      })
      .catch((err) => {
        toast.error('Ocorreu um erro no registro!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
        console.log(err)
      });
  }

  return (
    <>
      <RegisterHeader>
        <h1>Kenzie Gastrobar</h1>
      </RegisterHeader>
      <Container>
        <section className="title-form-register">
          <p>Cadastro</p>
        </section>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <label>
            {!!errors.name?.message && <span> {errors.name.message}</span>}
          </label>
          <input name="name" placeholder="Nome" {...register("name")} />
          <label>
            {!!errors.email?.message && <span> {errors.email.message}</span>}
          </label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          <label>
            {!!errors.confEmail?.message && (
              <span> {errors.confEmail.message}</span>
            )}
          </label>
          <input
            name="confEmail"
            type="email"
            placeholder="Confirmar email"
            {...register("confEmail")}
          />
          <label>
            {!!errors.password?.message && (
              <span> {errors.confPassword.message}</span>
            )}
          </label>
          <input
            name="password"
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          <label>
            {!!errors.confPassword?.message && (
              <span> {errors.confPassword.message}</span>
            )}
          </label>
          <input
            name="confPassword"
            type="password"
            placeholder="Confirmar senha"
            {...register("confPassword")}
          />
          <button type="submit">Cadastrar</button>
        </form>
      </Container>
      <Redirection>
        <p>
          Já está cadastrado? <Link to="/login">Faça seu login</Link>
        </p>
      </Redirection>
    </>
  );
}

export default RegisterPage;
