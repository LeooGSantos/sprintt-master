import Link from 'next/link';

export default function PlanosSeguro() {
  return (
    <div className="planos-seguro-page">
      <div className="quadrado">
        <h2>Pedal Essencial</h2>
        <p>O plano gratuito* para você experimentar um dos serviços essenciais oferecidos, de acordo com as suas necessidades.</p>
        <button>
          <Link href="/FazerSeguro">Faça já</Link>
        </button>
      </div>

      <div className="quadrado">
        <h2>Pedal Leve</h2>
        <p>Você gosta de pedalar e está buscando um plano de serviços intermediário? O Pedal leve da Porto é para você.</p>
        <button>
          <Link href="/FazerSeguro">Faça já</Link>
        </button>
      </div>

      <div className="quadrado">
        <h2>Pedal Elite</h2>
        <p>Conte com diversos serviços capazes de elevar suas aventuras para o próximo nível.</p>
        <button>
          <Link href="/FazerSeguro">Faça já</Link>
        </button>
      </div>
    </div>
  );
}
