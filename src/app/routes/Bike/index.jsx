import Link from 'next/link';

export default function Bike() {
  return (
    <div className="bike-page">
      <h1>Fazer Seguro</h1>
      <p>Faça seu seguro agora, de forma dinâmica e rápida!</p>
      <button>
        <Link to="/FazerSeguro">Faça já</Link>
      </button>

      <h2>Ver Seus Seguros de Bike</h2>
      <p>Veja seus seguros aqui!</p>
      <button>
        <Link to="/PlanosSeguro">Ver seguros</Link>
      </button>
    </div>
  );
}
 