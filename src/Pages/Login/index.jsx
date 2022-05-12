import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../Services/api";
import { useHistory } from "react-router-dom";

import { Container, ChangeForms } from "./style";
import Header from "../../components/Header";
import { useState } from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { Redirection } from "../Register/styles";

function LoginPage() {
  const [condition, setCondition] = useState(false);
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  const schema = yup.object().shape({
    email: yup.string().email("Email Inválido").required("Campo obrigatório!"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 digitos")
      .required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmitFunction(data) {
    if (condition === false) {
      api
        .get("/login", data)
        .then((response) => {
          history.push("/admin");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <>
      <Header />
      <ChangeForms>
        {condition === true ? (
          <>
            <p
              className="change-user-login employee-true"
              onClick={() => setCondition(true)}
            >
              Funcionário
            </p>
            <p
              className="change-user-login company-false"
              onClick={() => setCondition(false)}
            >
              Empresa
            </p>
          </>
        ) : (
          <>
            <p
              className="change-user-login employee-false"
              onClick={() => setCondition(true)}
            >
              Funcionário
            </p>
            <p
              className="change-user-login company-true"
              onClick={() => setCondition(false)}
            >
              Empresa
            </p>
          </>
        )}
      </ChangeForms>
      <Container>
        <section className="title-form-login">
          <p>Login</p>
        </section>

        {condition === true && (
          <section className="section-login-employee">
            <input
              className="input-login"
              name="idFuncionario"
              placeholder="ID do funcionário"
            />
          </section>
        )}

        {condition === false && (
          <form
            className="form-login-company"
            onSubmit={handleSubmit(onSubmitFunction)}
          >
            <input
              className="input-login"
              name="Email"
              placeholder="Email"
              {...register("email")}
            />
            <input
              className="input-login"
              name="password"
              placeholder="Senha"
              {...register("password")}
            />
          </form>
        )}

        <Button
          onClick={() => handleNavigation("/admin")}
          className="btn-login"
        >
          Entrar
        </Button>
      </Container>
      <Redirection>
        <p>
          Já não está cadastrado? <Link to="/register">Clique aqui</Link>
        </p>
      </Redirection>
    </>
  );
}

export default LoginPage;
