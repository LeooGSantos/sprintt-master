import Link from 'next/link';

export default function Login() {
  return (
    <div className="bike-page">
      <h1>Fazer Seguro</h1>
      <p>Faça seu seguro agora, de forma dinâmica e rápida!</p>
      <button>
        <Link href="/Pages/fazer-seguro">Fazer Seguro</Link>
      </button>

      <h2>Ver Seus Seguros de Bike</h2>
      <p>Veja seus seguros aqui!</p>
      <button>
        <Link href="/Pages/planos-seguro">Planos Seguro</Link>
      </button>
    </div>
  );
}
