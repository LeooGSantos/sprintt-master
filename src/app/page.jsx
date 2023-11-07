import Link from 'next/link';
import Cabecalho from './Components/Cabecalho/index';

export default function Home() {
  return (
    <div className="pagina-principal">
      <h1>Seguro Bike da Porto</h1>
      <h2>Seguro</h2>
      <p>Uma solução completa que oferece proteção e serviços para você se aventurar sem medo.</p>
      <Link href="/PlanosSeguro">
        <button>Cote já</button>
      </Link>
      <p>Com o Seguro Bike da Porto Seguro, é pedalar e relaxar.</p>
      <p>Faça o seguro agora!!</p>
    </div>
  );
}
