import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className="cabecalho">
      <ul>
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/Pages/fazer-seguro">Fazer Seguro</Link>
        </li>
        <li>
          <Link href="/Pages/planos-seguro">Planos Seguro</Link>
        </li>
        <li>
          <Link href="/Pages/rms">RMs</Link>
        </li>
        <li className="login-register">
            <Link href="/Pages/login">
              <button>Login</button>
            </Link>
            <Link href="/Pages/registro">
              <button>Registrar-se</button>
            </Link>
          </li>
      </ul>
    </header>
  );
} 