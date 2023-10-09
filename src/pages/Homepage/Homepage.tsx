import Header from '../../components/Header';
import Slider from '../../components/Slider';
import { slideData } from '../../configs/variables';
import './styles.scss';

const Homepage = () => {
  return (
    <div>
      <Header />
      <Slider slides={slideData} heading='Teste'/>
      <div className='main-container flex-column'>
        <img src='first.jpg' className='first-img'/>
      </div>
    </div>
  )
}

export default Homepage;