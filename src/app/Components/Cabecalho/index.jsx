import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className="cabecalho">
      <h2>MEUS PRODUTOS</h2>
      <nav>
        <ul>
          <li>
            <Link href="/bike">
              <button>Bike</button>
            </Link>
          </li>
          <li>
            <Link href="/fazerseguro">
              <button>Fazer Seguro</button>
            </Link>
          </li>
          <li>
            <Link href="/planosseguro">
              <button>Planos de Seguro</button>
            </Link>
          </li>
          <li>
            <Link href="/principal">
              <button>Principal</button>
            </Link>
          </li>
          <li>
            <Link href="/rms">
              <button>RMs</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
