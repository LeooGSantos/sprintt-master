export default function Registro() {
  return (
    <div className="registro-container">
      <div className="Tituloo">
        <h2>Faça seu Registro</h2>
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="numero">Numero de Telefone:</label>
          <input type="text" id="numero" name="numero" required />
        </div>
        <div className="form-group">
          <label htmlFor="end">Endereço:</label>
          <input type="text" id="end" name="end" required />
        </div>
        <div className="form-group">
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" name="senha" required />
        </div>
        <div className="form-group">
          <label htmlFor="confirmarSenha">Confirmar Senha:</label>
          <input type="password" id="confirmarSenha" name="confirmarSenha" required />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}