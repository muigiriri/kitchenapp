import React from 'react'

function ImgLg({ items, displayCurrent }:
  { items: Array<string>; displayCurrent: Array<string> }) {
  return (
    <div className="flex w-[230px] lg:w-[460px] aspect-square relative">
      <img src={`img/${items[0]}.png`} alt="food" className={`w-[420px] animate_food ${displayCurrent[0]}`} />
      <img src={`img/${items[1]}.png`} alt="food" className={`w-[420px] animate_food ${displayCurrent[1]}`} />
      <img src={`img/${items[2]}.png`} alt="food" className={`w-[420px] animate_food ${displayCurrent[2]}`} />
      <img src={`img/${items[3]}.png`} alt="food" className={`w-[420px] animate_food ${displayCurrent[3]}`} />
      <img src={`img/${items[4]}.png`} alt="food" className={`w-[420px] animate_food ${displayCurrent[4]}`} />
    </div>
  )
}

export default ImgLg