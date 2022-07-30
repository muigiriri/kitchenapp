import React from 'react'

function Review({ i, likes, dislikes }: { i: string; likes: number; dislikes: number }) {
  let score = ((likes / (likes + dislikes)) * 5);

  return (
    <span className={`${i} absolute left-10 top-4 text-8xl font-bold animate_review ${score < 2 ? "text-red-600" : (score > 3 && score < 4 ? "text-orange-600" : "text-teal-700")}`}>{score.toFixed(1)}</span>
  )
}

export default Review