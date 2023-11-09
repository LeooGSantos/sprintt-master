import Link from 'next/link';

export default function Cabecalho() {
  return (
    <header className="cabecalho">
      <nav>
        <ul>
          <li>
          <Link href="page.jsx">
              <button>Principal</button>
          </Link>

          </li>
          <li>
            <Link href="/Bike">
              <button>Bike</button>
            </Link>
          </li>
          <li>
            <Link href="/FazerSeguro">
              <button>Fazer Seguro</button>
            </Link>
          </li>
          <li>
          <Link href="/PlanosSeguro">
              <button>Planos de Seguro</button>
            </Link>
          </li>
          <li>
            <Link href="/RMs">
              <button>RMs</button>
            </Link>
          </li>
          <li className="login-register">
            <Link href="/app/login">
              <button>Login</button>
            </Link>
            <Link href="/app/registro">
              <button>Registrar-se</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
