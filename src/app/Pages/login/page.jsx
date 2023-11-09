export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div className="form-group">
          <label htmlFor="login">E-mail ou Nome de Usuário:</label>
          <input type="text" id="login" name="login" required />
        </div>
        <div className="form-group">
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" name="senha" required />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
