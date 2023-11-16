import React from 'react';
import Header from '../../components/Header';
import './styles.css';

const Hints = () => {
  return (
    <div>
      <Header />
      <div className='main-container flex-column'>
        <div className='hints-text-container'>
          <h1>Dicas e Observacoes</h1>
          <p>- Caso voce possua conta no Santander, a loja online da Camicado est'a no sistema Esphera de pontos. Assim os gastos no cartao de credito sao transformados em pontos.</p>
          <p>- Para compras de toalha de mesa, trilhos, capas de sousplat e de almofadas eu indico muito a Shein, que tem produtos baratinhos.</p>
          <p>- Qualquer produto da Zara Home e Westwing Now n'os vamos amar, tem muito bom gosto, mas tambem tem um preco mais salgado</p>
          <p>- Outras lojas que posso indicar 'e o Mercado Livre e Shopee que sempre tem tudo</p>
        </div>
      </div>
    </div>
  )
}

export default Hints;