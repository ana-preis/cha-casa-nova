import Header from '../../components/Header';
import './styles.css';

const Contact = () => {
  return (
    <div>
      <Header />
      <div className='main-container flex-column'>
        <div className='contacts-text-container'>
          <h1>Fale comigo ou com o André</h1>
          <a href='https://wa.me/+5548999495099'>Zap da Ana</a>
          <br/>
          <a href='https://wa.me/+554899001905'>Zap do André</a>
        </div>
      </div>
    </div>
  )
}

export default Contact;