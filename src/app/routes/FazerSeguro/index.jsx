import { useState } from 'react';

export default function FazerSeguro() {
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [preco, setPreco] = useState('');
  const [chassi, setChassi] = useState('');
  const [tempoPossui, setTempoPossui] = useState('');
  const [acessorios, setAcessorios] = useState('');
  const [uso, setUso] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Você pode adicionar aqui a lógica para processar os dados do formulário.
  };

  return (
    <div className="fazer-seguro-page">
      <div className="lado-esquerdo">
        <h2>Seguro Bike da Porto</h2>
        <p>Seguro</p>
      </div>
      <div className="lado-direito">
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="marca">Marca</label>
          <input
            type="text"
            id="marca"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
          />

          <label htmlFor="modelo">Modelo</label>
          <input
            type="text"
            id="modelo"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
          />

          <label htmlFor="preco">Preço</label>
          <input
            type="text"
            id="preco"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
          />

          <label htmlFor="chassi">Número do Chassi (Número de série)</label>
          <input
            type="text"
            id="chassi"
            value={chassi}
            onChange={(e) => setChassi(e.target.value)}
          />

          <button type="button">Confirmar Número do Chassi</button>

          <label htmlFor="tempoPossui">Tempo que Possui a Bicicleta</label>
          <input
            type="text"
            id="tempoPossui"
            value={tempoPossui}
            onChange={(e) => setTempoPossui(e.target.value)}
          />

          <label htmlFor="acessorios">Acessórios</label>
          <input
            type="text"
            id="acessorios"
            value={acessorios}
            onChange={(e) => setAcessorios(e.target.value)}
          />

          <label htmlFor="uso">Uso da Bike</label>
          <input
            type="text"
            id="uso"
            value={uso}
            onChange={(e) => setUso(e.target.value)}
          />

          <p>Ao clicar em Continuar você confirma os dados.</p>

          <button type="submit">Continuar</button>
        </form>
      </div>
    </div>
  );
}
 