import Header from '../../components/Header';
import './styles.css';

const Hints = () => {
  return (
    <div>
      <Header />
      <div className='main-container flex-column'>
        <div className='hints-text-container'>
          <h1>Dicas e Observações</h1>
          <p>- Caso voce possua conta no Santander, a loja online da Camicado está no sistema Esphera de pontos. Assim os gastos no cartao 
            de crédito são transformados em pontos.</p>
          <p>- Para compras de toalha de mesa, trilhos, capas de sousplat e de almofadas eu indico muito a Shein, que tem produtos baratinhos.</p>
          <p>- Qualquer produto da Zara Home e Westwing Now nós vamos amar, tem muito bom gosto, mas também tem um preço mais salgado</p>
          <p>- Outras lojas que posso indicar são o Mercado Livre e Shopee, que sempre tem tudo</p>
          <p>- Caso a a compra seja online e a entrega ficar para depois da festinha, não tem problema, não temos pressa em nada!</p>
        </div>
      </div>
    </div>
  )
}

export default Hints;