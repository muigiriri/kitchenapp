import React from 'react'
import { Icons } from './Icons';

function Likes({ i, value, clickEvent }: { i: string; value: number; clickEvent: any }) {
  return (
    <span onClick={clickEvent} className={`${i} items-center px-5 h-14 bg-slate-200 rounded-full`}>
      {Icons.thumbsDown}
      <span className="ml-2 mt-1">{value}</span>
    </span>
  )
}


export default Likes