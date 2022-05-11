import { Container, ChangeForms } from "./style";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Header from "../../components/Header";
import { useState } from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { Redirection } from "../Register/styles";
import { useContext } from "react";
import { LoginContext } from "../../Providers/login";

function LoginPage() {
  const { loginCompany, loginEmployee } = useContext(LoginContext);

  const [condition, setCondition] = useState(false);
  const [employeeId, setEmployeeId] = useState("");

  const schema = yup.object().shape({
    email: yup.string().email("Email Inválido").required("Campo obrigatório!"),
    password: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmitFunction(data) {
    if (condition === false) {
      loginCompany(data);
    }
  }

  function handleLoginEmployee(id) {
    if (condition === true) {
      loginEmployee(id);
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
              onChange={(event) => setEmployeeId(event.target.value)}
              className="input-login"
              name="idFuncionario"
              placeholder="ID do funcionário"
              type="number"
            />
          </section>
        )}

        <form
          className="form-login-company"
          onSubmit={handleSubmit(onSubmitFunction)}
        >
          {condition === false && (
            <>
              <input
                className="input-login"
                name="Email"
                placeholder="Email"
                {...register("email")}
              />
              <input
                className="input-login"
                name="password"
                type='password'
                placeholder="Senha"
                {...register("password")}
              />
            </>
          )}
          <Button
            type="submit"
            onClick={() => handleLoginEmployee(employeeId)}
            className="btn-login"
          >
            Entrar
          </Button>
        </form>

        <Redirection>
          <p>
            Já não está cadastrado? <Link to="/register">Clique aqui</Link>
          </p>
        </Redirection>
      </Container>
    </>
  );
}

export default LoginPage;
