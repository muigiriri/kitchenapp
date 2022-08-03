import React, { useState } from 'react'
import { Icons } from './Icons';
import Review from './Review';

function Overview({ displayCurrent }: { displayCurrent: Array<string> }) {

  const [oneLike, setOneLike] = useState(120);
  const [oneDisLike, setOneDislike] = useState(12);
  const [twoLike, setTwoLike] = useState(85);
  const [twoDisLike, setTwoDislike] = useState(90);
  const [threeLike, setThreeLike] = useState(170);
  const [threeDisLike, setThreeDislike] = useState(120);
  const [fourLike, setFourLike] = useState(160);
  const [fourDisLike, setFourDislike] = useState(60);
  const [fiveLike, setFiveLike] = useState(120);
  const [fiveDisLike, setFiveDislike] = useState(20);

  return (
    <div className="col-span-12 lg:col-span-4 font-sans">
      <div className="flex justify-center h-full items-center p-6 lg:p-4">
        <article className="bg-slate-100 rounded-xl lg:rounded-3xl text-slate-800 w-full lg:h-[640px] flex flex-col justify-between p-6 lg:p-12">
          <div className="flex justify-between mb-4">
            <p className="font-bold">Overview</p>
            <p className="">Ratings</p>
          </div>
          <div className="flex flex-col">
            <div className="flex mb-8 relative">
              <span className="flex justify-center items-end p-4 w-[120px] h-[150px] rounded-3xl bg-slate-300">
                {Icons.star}
              </span>
              <Review i={displayCurrent[0]} likes={oneLike} dislikes={oneDisLike} />
              <Review i={displayCurrent[1]} likes={twoLike} dislikes={twoDisLike} />
              <Review i={displayCurrent[2]} likes={threeLike} dislikes={threeDisLike} />
              <Review i={displayCurrent[3]} likes={fourLike} dislikes={fourDisLike} />
              <Review i={displayCurrent[4]} likes={fiveLike} dislikes={fiveDisLike} />
            </div>
            <div className={`${displayCurrent[0]} flex-col animate_chef`}>
              <h2 className="font-bold text-xl mb-1">Chef Feny</h2>
              <h6 className="text-slate-600 text-sm font-medium mb-4 lg:mb-2">Dapur umum tamanan</h6>
              <p className='mb-4 text-sm lg:text-base'>Lorem ipsum dolor sit amet, consecte adipiscing elit. Felis natoque ac moles tempor, sed fermentum.</p>
            </div>
            <div className={`${displayCurrent[1]} flex-col animate_chef`}>
              <h2 className="font-bold text-xl mb-1">Chef Feny</h2>
              <h6 className="text-slate-600 text-sm font-medium mb-4 lg:mb-2">Dapur umum tamanan</h6>
              <p className='mb-4 text-sm lg:text-base'>Lorem ipsum dolor sit amet, consecte adipiscing elit. Felis natoque ac moles tempor, sed fermentum.</p>
            </div>
            <div className={`${displayCurrent[2]} flex-col animate_chef`}>
              <h2 className="font-bold text-xl mb-1">Chef Feny</h2>
              <h6 className="text-slate-600 text-sm font-medium mb-4 lg:mb-2">Dapur umum tamanan</h6>
              <p className='mb-4 text-sm lg:text-base'>Lorem ipsum dolor sit amet, consecte adipiscing elit. Felis natoque ac moles tempor, sed fermentum.</p>
            </div>
            <div className={`${displayCurrent[3]} flex-col animate_chef`}>
              <h2 className="font-bold text-xl mb-1">Chef Feny</h2>
              <h6 className="text-slate-600 text-sm font-medium mb-4 lg:mb-2">Dapur umum tamanan</h6>
              <p className='mb-4 text-sm lg:text-base'>Lorem ipsum dolor sit amet, consecte adipiscing elit. Felis natoque ac moles tempor, sed fermentum.</p>
            </div>
            <div className={`${displayCurrent[4]} flex-col animate_chef`}>
              <h2 className="font-bold text-xl mb-1">Chef Feny</h2>
              <h6 className="text-slate-600 text-sm font-medium mb-4 lg:mb-2">Dapur umum tamanan</h6>
              <p className='mb-4 text-sm lg:text-base'>Lorem ipsum dolor sit amet, consecte adipiscing elit. Felis natoque ac moles tempor, sed fermentum.</p>
            </div>
          </div>
          <div className={`${displayCurrent[0]} gap-4`}>
            <span onClick={(e) => { e.preventDefault(); setOneLike(n => n += 1) }} className="flex items-center px-5 h-14 bg-slate-200 hover:bg-slate-400 cursor-pointer rounded-full">
              {Icons.thumbsUp}
              <span className="ml-2 mt-1">{oneLike}</span>
            </span>
            <span onClick={(e) => { e.preventDefault(); setOneDislike(n => n += 1) }} className="flex items-center px-5 h-14 bg-slate-200 hover:bg-slate-400 cursor-pointer rounded-full">
              {Icons.thumbsDown}
              <span className="ml-2 mt-1">{oneDisLike}</span>
            </span>
          </div>
          <div className={`${displayCurrent[1]} gap-4`}>
            <span onClick={(e) => { e.preventDefault(); setTwoLike(n => n += 1) }} className="flex items-center px-5 h-14 bg-slate-200 hover:bg-slate-400 cursor-pointer rounded-full">
              {Icons.thumbsUp}
              <span className="ml-2 mt-1">{twoLike}</span>
            </span>
            <span onClick={(e) => { e.preventDefault(); setTwoDislike(n => n += 1) }} className="flex items-center px-5 h-14 bg-slate-200 hover:bg-slate-400 cursor-pointer rounded-full">
              {Icons.thumbsDown}
              <span className="ml-2 mt-1">{twoDisLike}</span>
            </span>
          </div>
          <div className={`${displayCurrent[2]} gap-4`}>
            <span onClick={(e) => { e.preventDefault(); setThreeLike(n => n += 1) }} className="flex items-center px-5 h-14 bg-slate-200 hover:bg-slate-400 cursor-pointer rounded-full">
              {Icons.thumbsUp}
              <span className="ml-2 mt-1">{threeLike}</span>
            </span>
            <span onClick={(e) => { e.preventDefault(); setThreeDislike(n => n += 1) }} className="flex items-center px-5 h-14 bg-slate-200 hover:bg-slate-400 cursor-pointer rounded-full">
              {Icons.thumbsDown}
              <span className="ml-2 mt-1">{threeDisLike}</span>
            </span>
          </div>
          <div className={`${displayCurrent[3]} gap-4`}>
            <span onClick={(e) => { e.preventDefault(); setFourLike(n => n += 1) }} className="flex items-center px-5 h-14 bg-slate-200 hover:bg-slate-400 cursor-pointer rounded-full">
              {Icons.thumbsUp}
              <span className="ml-2 mt-1">{fourLike}</span>
            </span>
            <span onClick={(e) => { e.preventDefault(); setFourDislike(n => n += 1) }} className="flex items-center px-5 h-14 bg-slate-200 hover:bg-slate-400 cursor-pointer rounded-full">
              {Icons.thumbsDown}
              <span className="ml-2 mt-1">{fourDisLike}</span>
            </span>
          </div>
          <div className={`${displayCurrent[4]} gap-4`}>
            <span onClick={(e) => { e.preventDefault(); setFiveLike(n => n += 1) }} className="flex items-center px-5 h-14 bg-slate-200 hover:bg-slate-400 cursor-pointer rounded-full">
              {Icons.thumbsUp}
              <span className="ml-2 mt-1">{fiveLike}</span>
            </span>
            <span onClick={(e) => { e.preventDefault(); setFiveDislike(n => n += 1) }} className="flex items-center px-5 h-14 bg-slate-200 hover:bg-slate-400 cursor-pointer rounded-full">
              {Icons.thumbsDown}
              <span className="ml-2 mt-1">{fiveDisLike}</span>
            </span>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Overview