import './styles.css';
import Button from "../Button";
import DropdownCheckbox from "../DropdownCheckbox";
import { GiftOption } from '../../pages/types/GiftOption';
import { useState } from 'react';

interface ModalProps {
  giftList: GiftOption[];
  handleSelectedGifts: () => Promise<void>;
  inputValue: string;
  setGiver: React.Dispatch<React.SetStateAction<string>>;
  showModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSelected: React.Dispatch<React.SetStateAction<GiftOption[]>>;
}

const Modal = (props: ModalProps) => {

  const { handleSelectedGifts, inputValue, setGiver, showModal, giftList, setSelected } = props

  return (
    <div className="modal-container">
      <div className="modal-save-gift flex-column ai-center">
        <button className="flex-row exit-modal-btn" onClick={() => showModal(false)}>
          <img src="./exit.svg" alt="ext"/>  
        </button>
        <h1 className="modal-header">Registre sua compra!</h1>
        <div className="flex-column ai-center">
          <p>
            Seu nome:
          </p>
          <input
            className="input-name modal-input"
            type="text"
            onChange={(e) => setGiver(e.target.value)}
            value={inputValue}
          />
          <p>
            Escolha o presente escolhido abaixo:
          </p>
          <DropdownCheckbox
            giftList={giftList}
            setGiftsSelected={setSelected} 
          />
          <Button text="Salvar meu presente!" className="save-btn" onClick={() => handleSelectedGifts()}/>
        </div>
      </div>
    </div> 
  )
}

export default Modal;