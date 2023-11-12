import { giftList } from '../../configs/gift_list';
import { GiftOptions } from '../../types/GiftOptions';
import Slider from '../Slider';
import './styles.css'

const GiftList = () => {

  const getSlideData = (gift: GiftOptions) => {
    let slideData: { src: string; index: number; headline: string; }[] = [];
    gift.imageList.forEach((i: string, index: number) => {
      slideData.push({
        src: i,
        index,
        headline: ""
      })
    })
    return slideData;
  }

  const getStatus = (status: string) => { 
    switch (status) {
      case "available":
        return "Dispon'ivel"
      case "unavailable":
        return "J'a foi comprado"
    }
      
  }

  return (
    <div className="list-container flex-column">
      {giftList.map((gift) => {
        return(
          <div className='list-item'>
            <div className='item-description'>
              <h3>{gift.name}</h3>
              <p>{gift.description} | Status: {getStatus(gift.status)}</p>
            </div>
            <Slider slides={getSlideData(gift)} heading='Teste' bgColor='bgColorLight'/>
          </div>
        )
      })}
    </div>
  )
}

export default GiftList;