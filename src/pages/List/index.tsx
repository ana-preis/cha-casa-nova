import React from 'react';
import { 
  useEffect,
  useState 
} from "react";
import GiftList from "../../components/GiftList";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import Button from "../../components/Button";
import { GiftOption } from "../../types/GiftOption";
import './styles.scss'

const List = () => {

  const [giftList, setGiftList] = useState<GiftOption[]>([])
  const [showModal, setShowModal] = useState<boolean>(false);
  const [giverName, setGiverName] = useState<string>("")
  const [giftsFromModal, setGiftsFromModal] = useState<GiftOption[]>([])
  const baseUrl = process.env.VERCEL_URL;

  useEffect(() => {
    const fetchGifts = async () => {
      try {
        // const gifts = await giftClient.getAllGifts() as unknown as GiftOption[];
        // const gifts = await kv.hgetall('gift:list')
        // const gifts = example();
        console.log(`${baseUrl}/api/gifts`)
        const gifts = await fetch(`${baseUrl}/api/gifts`);
        gifts.json()
          .then((data) => setGiftList(data));
        // setGiftList(gifts);
        // return
      } catch (error) {
        // console.log(error)
      }
    }
    fetchGifts();
  }, [])
  console.log('gift list: ', giftList)
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