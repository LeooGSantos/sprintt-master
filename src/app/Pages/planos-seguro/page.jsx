import Link from 'next/link';

export default function PlanosSeguro() {
  return (
    <div className="planos-seguro-page">
      <div className="quadrado">  
        <h2>Pedal Essencial</h2>
        <img src="/img/2p.jpg" alt="Imagem1" className="imagem-plano" />
        <p>O plano gratuito* para você experimentar um dos serviços essenciais oferecidos.</p>
        <button>
          <Link href="/Pages/fazer-seguro">Faça já!</Link>
        </button>
      </div>

      <div className="quadrado">
        <h2>- Pedal Leve -</h2>
        <img src="/img/4p.jpg" alt="Imagem2" className="imagem-plano" />
        <p>Você gosta de pedalar e está buscando um plano de serviços intermediário? O Pedal leve da Porto é para você!</p>
        <button>
          <Link href="/Pages/fazer-seguro">Faça já</Link>
        </button>
      </div>

      <div className="quadrado">
        <h2>Pedal Elite</h2>
        <img src="/img/3p.jpg" alt="Imagem3" className="imagem-plano" />
        <p>Conte com diversos serviços capazes de elevar suas aventuras para o próximo nível.</p>
        <button>
          <Link href="/Pages/fazer-seguro">Faça já!</Link>
        </button>
      </div>
    </div>
  );
}