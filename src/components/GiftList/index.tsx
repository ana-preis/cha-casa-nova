import { useState, useEffect } from 'react';
import { GiftOption } from '../../types/GiftOption';
import Slider from '../Slider';
import './styles.css'

interface GiftListProps {
  gifts: GiftOption[];
}

const GiftList = (props: GiftListProps) => {

  const { gifts } = props

  const [giftsComponent, setGiftsComponents] = useState<GiftOption[]>([])

  useEffect(() => {
    setGiftsComponents(gifts)
  }, [gifts])

  const getSlideData = (gift: GiftOption) => {
    let slideData: { src: string; index: number; headline: string; }[] = [];
    gift.imageList?.forEach((i: string, index: number) => {
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
        return "Disponível"
      case "unavailable":
        return "Já foi comprado"
    } 
  }

  const renderGifts = () => {
    return giftsComponent.map((gift) => {
      if (gift.index) {
        return (
          <div className='list-item'>
            <div className='item-description'>
              <h3>{gift.name}</h3>
              <p>{gift.description} | Status: {getStatus(gift.status)}</p>
            </div>
            <Slider slides={getSlideData(gift)} heading='Teste' bgColor='bgColorLight'/>
          </div>
        )
      }
      return null;
    })
  }

  console.log('gifts component: ', giftsComponent)

  return (
    <div className="list-container flex-column">
      {renderGifts()}
    </div>
  )
}

export default GiftList;