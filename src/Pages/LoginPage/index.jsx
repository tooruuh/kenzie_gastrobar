import { Container, ChangeForms } from "./style";

function LoginPage() {
  return (
    <>
      <ChangeForms>
        <p className="change-user-login">Empresa</p>
        <p className="change-user-login">Funcionário</p>
      </ChangeForms>
      <Container>
        <section className="title-form-login">
          <p>Login</p>
        </section>
      </Container>
    </>
  );
}

export default LoginPage;
