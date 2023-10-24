import { useState } from "react";
import GiftList from "../../components/GiftList";
import Header from "../../components/Header";
import './styles.css'
import Modal from "../../components/Modal";
import Button from "../../components/Button";
import { giftList } from "../../configs/gift_list";
import { GiftOptions } from "../../types/GiftOptions";

const List = () => {

  const [showModal, setShowModal] = useState<boolean>(false);
  const [inputNameValue, setInputNameValue] = useState<string>("")
  const [giftsFromModal, setGiftsFromModal] = useState<GiftOptions[]>([])

  const saveNewGift = () => {
    console.log(JSON.stringify(giftsFromModal))
    // save kvs giftsfrommodal
    return null
  }
  console.log(giftsFromModal)

  return (
    <div>
      <Header/>
      <div className="main-container">
        <div className="container-title flex-column">
          <h1>Lista de Presentes</h1>
          <span>Lembrando que são apenas sugestões, fiquem a vontade para trazer o que quiserem</span>
          <Button
            text="Registrar meu presente!"
            className="container-title-btn"
            onClick={() => setShowModal(true)}
          />
        </div>
        <GiftList />
        {
          showModal &&
          <Modal 
            handleOnSave={saveNewGift}
            showModal={setShowModal} 
            inputValue={inputNameValue} 
            setInputValue={setInputNameValue}
            setGifts={setGiftsFromModal}       
          />
        }
      </div>
    </div>
  )
}

export default List;