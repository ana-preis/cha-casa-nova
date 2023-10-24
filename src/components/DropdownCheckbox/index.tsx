import { useEffect, useState } from "react";
import './styles.css'
import { giftList } from "../../configs/gift_list";
import { GiftOptions } from "../../types/GiftOptions";

interface DropdownCheckboxProps {
  setGifts: React.Dispatch<React.SetStateAction<GiftOptions[]>>;
}

const DropdownCheckbox = (props: DropdownCheckboxProps) => {
  const { setGifts } = props;
  const [disabledItems, setDisabledItems] = useState<number[]>([])

  useEffect(() => {
    const unavailableGits = giftList.filter((g) => g.status === "unavailable")
    const unavailableGitsIDs = unavailableGits.map((g) => g.index)
    setDisabledItems(unavailableGitsIDs)
  }, [])

  const mountList = (): {key: string, value: string}[] => {
    let gifts: {key: string, value: string}[] = [];
    giftList.forEach((gift) => {
      gifts = gifts.concat( { key: `${gift.index}`, value: gift.name } )
    })
    return gifts;
  }

  const [list, setList] = useState(mountList());

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      const selectedGift = giftList.find((g) => g.index === Number(value))
      if (selectedGift) {
        setGifts((prevCheckedItems) => [...prevCheckedItems, selectedGift])
      }
    } else {
      setGifts((prevCheckedItems) => {
        return prevCheckedItems.filter((item) => item.index !==  Number(value))
      });
    }
  };

  return (
    <div className="dropdown-checkbox" data-control="checkbox-dropdown">

      <div className="flex-column ai-center">

        {list.map((item) => (
          <label key={item.key} className="dropdown-option">
            <input
              type="checkbox"
              name="dropdown-group"
              value={item.key}
              onChange={handleCheckboxChange}
              className="checkbox"
              disabled={disabledItems.includes(Number(item.key))}
            />
            {item.value}
          </label>
        ))}
      </div>
    </div>
  );
};

export default DropdownCheckbox;
