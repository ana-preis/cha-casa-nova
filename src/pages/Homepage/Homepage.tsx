import Header from '../../components/Header';
import Slider from '../../components/Slider';
import { slideData } from '../../configs/variables';
import { ENDERECO, DIA, HORARIO } from '../../configs/variables';
import './styles.scss';

const Homepage = () => {
  return (
    <div>
      <Header />
      <div className='main-container flex-column'>
        <Slider slides={slideData} heading='Teste'/>
        <div className='home-text-container'>
          <p>Estamos muito felizes em poder convidar você para o nosso Chá de Casa Nova!</p>
          <p>Aguardamos muito tempo pra ter nosso apartamento prontinho e passamos por diversos B.O.s de obra 🫠. 
            Agora queremos dividir com você nosso lar! Vem tomar uns drinks e jogar conversa fora!</p>
          <p>Endereço: {ENDERECO}</p>
          <p>Dia: {DIA}</p>
          <p>Dia: {HORARIO}</p>
          <p>Também deixamos aqui em cima uma listinha de presentes como sugestão pra quem se sentir confortável. 
            Se preferir, pode também transferir o valor no PIX. Lembrando que é só sugestão! 
            O que mais queremos é a sua presença 🥰
          </p>
        </div>
      </div>
    </div>
  )
}

export default Homepage;