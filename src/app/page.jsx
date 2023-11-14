import Link from 'next/link';

export default function Home() {
  return (
    <div className="pagina-principal">
      <h1>Seguro de bicicletas da Porto</h1>
      <p>Uma solução completa.</p>
      <p>Com o Seguro Bike da Porto Seguro, é pedalar e relaxar.</p>
      <p>Faça seu seguro agora!</p>
      <Link href="/Pages/planos-seguro"> 
        <button>Cote já</button>
      </Link>
    </div>
  );
}






