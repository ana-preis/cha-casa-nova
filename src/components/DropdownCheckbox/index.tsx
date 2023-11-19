import React from 'react';
import { useEffect, useState } from "react";
import './styles.css'
import { GiftOption } from '../../types/GiftOption';

interface DropdownCheckboxProps {
  giftList: GiftOption[];
  setGiftsSelected: React.Dispatch<React.SetStateAction<GiftOption[]>>;
}

const DropdownCheckbox = (props: DropdownCheckboxProps) => {
  const { setGiftsSelected, giftList } = props;
  const [disabledItems, setDisabledItems] = useState<number[]>([])

  useEffect(() => {
    const unavailableGits = giftList.filter((g) => g.status === "unavailable")
    const unavailableGitsIDs = unavailableGits.map((g) => g.index)
    setDisabledItems(unavailableGitsIDs)
  }, [giftList])

  const mountList = (): {key: string, value: string}[] => {
    let gifts: {key: string, value: string}[] = [];
    giftList.forEach((gift) => {
      gifts = gifts.concat( { key: `${gift.index}`, value: gift.name } )
    })
    return gifts;
  }

  const [list] = useState(mountList());

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      const selectedGift = giftList.find((g) => g.index === Number(value))
      if (selectedGift) {
        setGiftsSelected((prevCheckedItems) => [...prevCheckedItems, selectedGift])
      }
    } else {
      setGiftsSelected((prevCheckedItems) => {
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
