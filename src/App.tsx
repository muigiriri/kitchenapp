import { useEffect, useReducer, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import { Icons } from "./components/Icons";
import MiniCard from "./components/MiniCard";
import Typewriter from 'typewriter-effect';
import Review from "./components/Review";
import Likes from "./components/Likes";
import Dislikes from "./components/Dislikes";

/**
 * UI states described in a switch statement
 */
type UiActions =
  | { type: string | "ONE"; }
  | { type: string | "TWO"; }
  | { type: string | "THREE"; }
  | { type: string | "FOUR"; }
  | { type: string | "FIVE"; }
const uiState = (state: InitialState, action: UiActions) => {
  // destructuring the action
  const { type, likes } = action;
  // state.likes = state.likes ? 0 : state.likes;
  // state.dislikes = state.dislikes ? 0 : state.dislikes;
  switch (type) {
    case "ONE": {
      return {
        ...state,
        showFoodLarge: ["flex", "hidden", "hidden", "hidden", "hidden"],
        nameTop: "roast",
        nameBottom: "beef",
        currentSliderPosition: 0,
        likes: 40,
        dislikes: 90,
        score: ((state.likes / (state.likes + state.dislikes)) * 5).toFixed(1)
      };
    }
    case "TWO": {
      return {
        ...state,
        showFoodLarge: ["hidden", "flex", "hidden", "hidden", "hidden"],
        nameTop: "pilau",
        nameBottom: "masala",
        currentSliderPosition: 168,
        likes: 40,
        dislikes: 110,
        score: ((state.likes / (state.likes + state.dislikes)) * 5).toFixed(1)
      };
    }
    case "THREE": {
      return {
        ...state,
        showFoodLarge: ["hidden", "hidden", "flex", "hidden", "hidden"],
        nameTop: "bread",
        nameBottom: "and egg",
        currentSliderPosition: 336,
        likes: 40,
        dislikes: 20,
        score: ((state.likes / (state.likes + state.dislikes)) * 5).toFixed(1)
      };
    }
    case "FOUR": {
      return {
        ...state,
        showFoodLarge: ["hidden", "hidden", "hidden", "flex", "hidden"],
        nameTop: "boiled",
        nameBottom: "dumplin",
        currentSliderPosition: 504,
        likes: 40,
        dislikes: 10,
        score: ((state.likes / (state.likes + state.dislikes)) * 5).toFixed(1)
      };
    }
    case "FIVE": {
      return {
        ...state,
        showFoodLarge: ["hidden", "hidden", "hidden", "hidden", "flex"],
        nameTop: "spiced",
        nameBottom: "githeri",
        currentSliderPosition: 672,
        likes: 40,
        dislikes: 20,
        score: ((state.likes / (state.likes + state.dislikes)) * 5).toFixed(1)
      };
    }
    default:
      break;
  }
  return state;
};

function App() {
  const animateClass = "animate_food";
  const actionList = ["ONE", "TWO", "THREE", "FOUR", "FIVE"];

  // state
  const [i, setI] = useState(0);
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

  // SET REDUCER
  const initialState: InitialState = {
    showFoodLarge: ["flex", "hidden", "hidden", "hidden", "hidden"],
    currentSliderPosition: 0,
    nameTop: "roast",
    nameBottom: "beef",
    likes: 20,
    dislikes: 15,
    score: ((20 / (20 + 15)) * 5).toFixed(1)
  };
  const [state, dispatch] = useReducer(uiState, initialState);
  let {
    showFoodLarge,
    currentSliderPosition, nameTop, nameBottom, likes, dislikes, score
  } = state;

  // reset items to beggining
  if (i >= actionList.length) setI(0);

  useEffect(() => {
    const slider = setInterval(() => {
      dispatch({ type: actionList[i] })
      setI(n => n + 1)
    }, 5000);
    return () => clearInterval(slider);
  }, [i])



  return (
    <>
      <header className="w-full ">
        <div className="container mx-auto  flex items-end justify-end h-14">
          <span className="mr-8">{Icons.search}</span>
          <span className="">{Icons.menu}</span>
        </div>
      </header>
      <main className="w-full flex flex-col  h-screen-nav">
        <section className="container mx-auto flex-1">
          <article className="grid grid-cols-12 gap-x-6 h-full">
            <div className="col-span-8 ">
              <div className="flex flex-col justify-center h-full">
                <section className="flex gap-8">
                  {/* img */}
                  <div className="flex w-[460px] aspect-square relative">
                    <img src="img/food-1.png" alt="food-1" className={`${showFoodLarge[0]} ${animateClass}`} />
                    <img src="img/food-2.png" alt="food-2" className={`${showFoodLarge[1]} ${animateClass}`} />
                    <img src="img/food-3.png" alt="food-3" className={`${showFoodLarge[2]} ${animateClass}`} />
                    <img src="img/food-4.png" alt="food-4" className={`${showFoodLarge[3]} ${animateClass}`} />
                    <img src="img/food-5.png" alt="food-5" className={`${showFoodLarge[4]} ${animateClass}`} />
                  </div>
                  {/* text */}
                  <div className="flex flex-col justify-center">
                    <span className="text-lg mb-4">Most Loved dishes</span>
                    <span className="text-8xl font-thin font-sans uppercase">
                      <Typewriter
                        options={{
                          strings: nameTop,
                          autoStart: true,
                          pauseFor: 5000,
                          delay: 30,
                          deleteSpeed: 50,
                          loop: true,
                          cursor: ""
                        }}
                      />
                    </span>
                    <span className="text-8xl font-black font-sans uppercase">
                      <Typewriter
                        options={{
                          strings: nameBottom,
                          autoStart: true,
                          pauseFor: 5000,
                          delay: 30,
                          deleteSpeed: 50,
                          loop: true,
                          cursor: ""
                        }}
                      />
                    </span>
                    <div className="flex mt-12">
                      <span className="flex items-center mr-20">
                        {Icons.play}
                        <p className="text-sm capitalize ml-3">Play video</p>
                      </span>
                      <span className="flex items-center">
                        {Icons.phone}
                        <p className="text-sm capitalize ml-3">Order food</p>
                      </span>
                    </div>
                  </div>
                </section>
                <section className="flex justify-between items-center ">
                  <span className="flex justify-center">{Icons.chevronLeft}</span>
                  <div className="flex gap-6 relative">
                    <div className="w-36 flex h-52 rounded-3xl bg-slate-100 absolute -z-10 transition-all duration-150 ease-in-out" style={{ left: `${currentSliderPosition}px` }}></div>
                    <MiniCard
                      image="food-1.png"
                      name="roasted beef and spinach"
                      clickEvent={() => {
                        // reset id onclick to allow continuation to the next item
                        setI(0);
                        // then dispatch the state
                        dispatch({ type: "ONE" })
                      }} />
                    <MiniCard
                      image="food-2.png"
                      name="sato sapi pak adin"
                      clickEvent={() => {
                        setI(1);
                        dispatch({ type: "TWO" })
                      }} />
                    <MiniCard
                      image="food-3.png"
                      name="agg and brown bread"
                      clickEvent={() => {
                        setI(2);
                        dispatch({ type: "THREE" })
                      }} />
                    <MiniCard
                      image="food-4.png"
                      name="dumplings with a chop stick"
                      clickEvent={() => {
                        setI(3);
                        dispatch({ type: "FOUR" })
                      }} />
                    <MiniCard
                      image="food-5.png"
                      name="spiced githeri"
                      clickEvent={() => {
                        setI(4);
                        dispatch({ type: "FIVE" })
                      }} />
                  </div>
                  <span className="flex justify-center">{Icons.chevronRight}</span>
                </section>
              </div>
            </div>
            <div className="col-span-4  font-sans">
              <div className="flex justify-center h-full items-center p-4">
                <article className="bg-slate-100 rounded-3xl text-slate-800 w-full h-[640px] flex flex-col justify-between p-12">
                  <div className="flex justify-between">
                    <p className="font-bold">Overview</p>
                    <p className="">Ingredients</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex mb-8 relative">
                      <span className="flex justify-center items-end p-4 w-[120px] h-[150px] rounded-3xl bg-slate-300">
                        {Icons.star}
                      </span>
                      <Review i={showFoodLarge[0]} likes={oneLike} dislikes={oneDisLike} />
                      <Review i={showFoodLarge[1]} likes={twoLike} dislikes={twoDisLike} />
                      <Review i={showFoodLarge[2]} likes={threeLike} dislikes={threeDisLike} />
                      <Review i={showFoodLarge[3]} likes={fourLike} dislikes={fourDisLike} />
                      <Review i={showFoodLarge[4]} likes={fiveLike} dislikes={fiveDisLike} />
                    </div>
                    <div className={`${showFoodLarge[0]} flex-col animate_chef`}>
                      <h2 className="font-bold text-xl mb-1">Chef Feny</h2>
                      <h6 className="text-slate-600 text-sm font-medium mb-2">Dapur umum tamanan</h6>
                      <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Felis natoque ac moles tempor, sed fermentum.</p>
                    </div>
                    <div className={`${showFoodLarge[1]} flex-col animate_chef`}>
                      <h2 className="font-bold text-xl mb-1">Chef Feny</h2>
                      <h6 className="text-slate-600 text-sm font-medium mb-2">Dapur umum tamanan</h6>
                      <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Felis natoque ac moles tempor, sed fermentum.</p>
                    </div>
                    <div className={`${showFoodLarge[2]} flex-col animate_chef`}>
                      <h2 className="font-bold text-xl mb-1">Chef Feny</h2>
                      <h6 className="text-slate-600 text-sm font-medium mb-2">Dapur umum tamanan</h6>
                      <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Felis natoque ac moles tempor, sed fermentum.</p>
                    </div>
                    <div className={`${showFoodLarge[3]} flex-col animate_chef`}>
                      <h2 className="font-bold text-xl mb-1">Chef Feny</h2>
                      <h6 className="text-slate-600 text-sm font-medium mb-2">Dapur umum tamanan</h6>
                      <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Felis natoque ac moles tempor, sed fermentum.</p>
                    </div>
                    <div className={`${showFoodLarge[4]} flex-col animate_chef`}>
                      <h2 className="font-bold text-xl mb-1">Chef Feny</h2>
                      <h6 className="text-slate-600 text-sm font-medium mb-2">Dapur umum tamanan</h6>
                      <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Felis natoque ac moles tempor, sed fermentum.</p>
                    </div>
                  </div>
                  <div className={`${showFoodLarge[0]} gap-4`}>
                    <span onClick={(e) => { e.preventDefault(); setOneLike(n => n += 1) }} className="flex items-center px-5 h-14 bg-slate-200 hover:bg-slate-400 cursor-pointer rounded-full">
                      {Icons.thumbsUp}
                      <span className="ml-2 mt-1">{oneLike}</span>
                    </span>
                    <span onClick={(e) => { e.preventDefault(); setOneDislike(n => n += 1) }} className="flex items-center px-5 h-14 bg-slate-200 hover:bg-slate-400 cursor-pointer rounded-full">
                      {Icons.thumbsDown}
                      <span className="ml-2 mt-1">{oneDisLike}</span>
                    </span>
                  </div>
                  <div className={`${showFoodLarge[1]} gap-4`}>
                    <span onClick={(e) => { e.preventDefault(); setTwoLike(n => n += 1) }} className="flex items-center px-5 h-14 bg-slate-200 hover:bg-slate-400 cursor-pointer rounded-full">
                      {Icons.thumbsUp}
                      <span className="ml-2 mt-1">{twoLike}</span>
                    </span>
                    <span onClick={(e) => { e.preventDefault(); setTwoDislike(n => n += 1) }} className="flex items-center px-5 h-14 bg-slate-200 hover:bg-slate-400 cursor-pointer rounded-full">
                      {Icons.thumbsDown}
                      <span className="ml-2 mt-1">{twoDisLike}</span>
                    </span>
                  </div>
                  <div className={`${showFoodLarge[2]} gap-4`}>
                    <span onClick={(e) => { e.preventDefault(); setThreeLike(n => n += 1) }} className="flex items-center px-5 h-14 bg-slate-200 hover:bg-slate-400 cursor-pointer rounded-full">
                      {Icons.thumbsUp}
                      <span className="ml-2 mt-1">{threeLike}</span>
                    </span>
                    <span onClick={(e) => { e.preventDefault(); setThreeDislike(n => n += 1) }} className="flex items-center px-5 h-14 bg-slate-200 hover:bg-slate-400 cursor-pointer rounded-full">
                      {Icons.thumbsDown}
                      <span className="ml-2 mt-1">{threeDisLike}</span>
                    </span>
                  </div>
                  <div className={`${showFoodLarge[3]} gap-4`}>
                    <span onClick={(e) => { e.preventDefault(); setFourLike(n => n += 1) }} className="flex items-center px-5 h-14 bg-slate-200 hover:bg-slate-400 cursor-pointer rounded-full">
                      {Icons.thumbsUp}
                      <span className="ml-2 mt-1">{fourLike}</span>
                    </span>
                    <span onClick={(e) => { e.preventDefault(); setFourDislike(n => n += 1) }} className="flex items-center px-5 h-14 bg-slate-200 hover:bg-slate-400 cursor-pointer rounded-full">
                      {Icons.thumbsDown}
                      <span className="ml-2 mt-1">{fourDisLike}</span>
                    </span>
                  </div>
                  <div className={`${showFoodLarge[4]} gap-4`}>
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
          </article>
        </section>
        <section className="container mx-auto">
          <article className="w-full flex gap-6 items-center justify-center h-40 ">
            <span className="flex items-center justify-center hover:bg-slate-300 bg-slate-300 h-24 aspect-square rounded-3xl">{Icons.food}</span>
            <span className="flex items-center justify-center hover:bg-slate-300 h-24 aspect-square rounded-3xl">{Icons.wine}</span>
            <span className="flex items-center justify-center hover:bg-slate-300 h-24 aspect-square rounded-3xl">{Icons.chat}</span>
            <span className="flex items-center justify-center hover:bg-slate-300 h-24 aspect-square rounded-3xl">{Icons.profile}</span>
            <span className="flex items-center justify-center hover:bg-slate-300 h-24 aspect-square rounded-3xl">{Icons.mic}</span>
          </article>
        </section>
        <span className="absolute bottom-[50%] -left-[30%] -z-10">
          <img src="ring.png" alt="huge ring" />
        </span>
      </main>
    </>
  );
}

export default App;

interface InitialState {
  showFoodLarge: Array<string>,
  currentSliderPosition: number,
  nameTop: string,
  nameBottom: string,
  likes: number,
  dislikes: number,
  score: any
}