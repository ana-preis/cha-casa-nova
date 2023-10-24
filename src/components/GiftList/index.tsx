import { giftList } from '../../configs/gift_list';
import './styles.css'

const GiftList = () => {
  return (
    <div className="list-container flex-column">
      {giftList.map((gift) => {
        return(
          <div className='list-item flex-row'>
            <img 
              className="list-item-img"
              alt={gift.name}
              src={gift.src}
            />
            <h3 className='list-item-title'>{gift.name}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default GiftList;