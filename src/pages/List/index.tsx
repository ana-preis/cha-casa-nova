import React from 'react';
import { 
  useEffect, 
  // useMemo, 
  useState 
} from "react";
import GiftList from "../../components/GiftList";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import Button from "../../components/Button";
import { GiftOption } from "../../types/GiftOption";
import './styles.scss'
// import { GiftClient } from "../../api/giftListClient";
// import { example } from "../../api/example";
// import { kv } from "@vercel/kv";

const List = () => {

  const [giftList] = useState<GiftOption[]>([])
  const [showModal, setShowModal] = useState<boolean>(false);
  const [giverName, setGiverName] = useState<string>("")
  const [giftsFromModal, setGiftsFromModal] = useState<GiftOption[]>([])

  // const giftClient = useMemo(() => new GiftClient(), []); 

  useEffect(() => {
    const fetchGifts = async () => {
      try {
        // const gifts = await giftClient.getAllGifts() as unknown as GiftOption[];
        // const gifts = await kv.hgetall('gift:list')
        // const gifts = example();
        // const gifts = await fetch('api/kv');
        // gifts.json()
        //   .then(() => console.log(' no componente '));
        // setGiftList(gifts);
        // return
      } catch (error) {
        // console.log(error)
      }
    }
    fetchGifts();
  }, [])

  const saveNewGift = async () => {
    // console.log(JSON.stringify(giftsFromModal))
    giftsFromModal.forEach(async (gift) => {
      try {
        // await giftClient.setGift(gift)
        // return
      } catch (error) {
        // console.log(error)
      }
    })
  }
  

  return (
    <div>
      <Header/>
      <div className="main-container">
        <div className="container-title flex-column">
          <h1>Lista de Presentes</h1>
          <span>Lembrando que são apenas sugestões, fiquem a vontade para trazer o que quiserem :D</span>
          <Button
            text="Registrar meu presente!"
            className="container-title-btn"
            onClick={() => setShowModal(true)}
          />
        </div>
        <GiftList 
          gifts={giftList}
        />
        {
          showModal &&
          <Modal
            handleSelectedGifts={saveNewGift}
            showModal={setShowModal}
            inputValue={giverName}
            setGiver={setGiverName}
            setSelected={setGiftsFromModal}
            giftList={giftList}          
          />
        }
      </div>
    </div>
  )
}

export default List;