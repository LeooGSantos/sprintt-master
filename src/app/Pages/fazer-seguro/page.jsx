// @react
import React from 'react';

export default function FazerSeguro() {
  return (
    <div className="fazer-seguro-page">
      <div className="lado-esquerdo">
        <h2>Seguro Bike da Porto</h2>
        <p>Seguro</p>
      </div>
      <div className="lado-direito">
        <form>
          <label htmlFor="marca">Marca</label>
          <input type="text" id="marca" />

          <label htmlFor="modelo">Modelo</label>
          <input type="text" id="modelo" />

          <label htmlFor="preco">Preço</label>
          <input type="text" id="preco" />

          <label htmlFor="chassi">Número do Chassi (Número de série)</label>
          <input type="text" id="chassi" />

          <button type="button">Confirmar Número do Chassi</button>

          <label htmlFor="tempoPossui">Tempo que Possui a Bicicleta</label>
          <input type="text" id="tempoPossui" />

          <label htmlFor="acessorios">Acessórios</label>
          <input type="text" id="acessorios" />

          <label htmlFor="uso">Uso da Bike</label>
          <input type="text" id="uso" />

          <p>Ao clicar em "Continuar" você confirma os dados.</p>

          <button type="submit">Continuar</button>
        </form>
      </div>
    </div>
  );
}
