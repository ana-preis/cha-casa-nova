import './styles.css';
import Button from "../Button";
import DropdownCheckbox from "../DropdownCheckbox";
import { GiftOptions } from '../../types/GiftOptions';

interface ModalProps {
  handleOnSave: () => void;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  showModal: React.Dispatch<React.SetStateAction<boolean>>;
  setGifts: React.Dispatch<React.SetStateAction<GiftOptions[]>>;
}

const Modal = (props: ModalProps) => {

  const { handleOnSave, inputValue, setInputValue, showModal, setGifts } = props

  return (
    <div className="modal-container">
      <div className="modal-save-gift flex-column ai-center">
        <button className="flex-row exit-modal-btn" onClick={() => showModal(false)}>
          <img src="./exit.svg" alt="ext"/>  
        </button>
        <h2 className="modal-header">Presentes</h2>
        <div className="flex-column ai-center">
          <p>
            Seu nome:
          </p>
          <input
            className="input-name modal-input"
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <p>
            Escolha o presente escolhido abaixo:
          </p>
          <DropdownCheckbox 
            setGifts={setGifts} 
          />
          <Button text="Salvar meu presente!" className="save-btn" onClick={handleOnSave}/>
        </div>
      </div>
    </div> 
  )
}

export default Modal;