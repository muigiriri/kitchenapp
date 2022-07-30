import React from 'react'

function MiniCard({ image, name, clickEvent }: { image: string; name: string; clickEvent: any }) {
  return (
    <div onClick={clickEvent} className="flex flex-col items-center w-36 py-6 rounded-3xl hover:bg-slate-50 cursor-pointer">
      <span className="w-9/12 aspect-square mb-2 flex items-center justify-center">
        <img src={`img/mini-img/${image}`} alt="mini food" className="object-contain" />
      </span>
      <p className="text-sm text-slate-800 px-4 text-center capitalize">{name}</p>
    </div>
  )
}

export default MiniCard