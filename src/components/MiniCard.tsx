import React from 'react'

function MiniCard({ image, name, clickEvent, showCurr }: { image: string; name: string; clickEvent: any; showCurr: string }) {
  return (
    <div onClick={clickEvent} className="col-span-10 lg:col-span-2 border lg:border-none lg:py-6 rounded-3xl hover:bg-slate-50 cursor-pointer relative">
      <div className={`${showCurr} h-full w-full rounded-3xl bg-slate-100 absolute top-0 -z-10 transition-all duration-150 ease-in-out width_slider`}></div>
      <div className="flex lg:flex-col items-center lg:justify-center p-2">
        <span className="w-[60px] lg:w-9/12 aspect-square lg:mb-2 flex items-center justify-center">
          <img src={`img/mini-img/${image}`} alt="mini food" className="object-contain" />
        </span>
        <p className="text-sm text-slate-800 px-4 lg:text-center capitalize">{name}</p>
      </div>
    </div>
  )
}

export default MiniCard