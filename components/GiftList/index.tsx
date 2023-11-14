import { GiftOption } from '../../pages/types/GiftOption';
import Slider from '../Slider';
import './styles.css'

interface GiftListProps {
  gifts: GiftOption[];
}

const GiftList = (props: GiftListProps) => {

  const { gifts } = props

  const getSlideData = (gift: GiftOption) => {
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
      {gifts.map((gift) => {
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