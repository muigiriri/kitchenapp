import { useEffect, useReducer, useRef, useState } from "react";
import { Icons } from "./components/Icons";
import MiniCard from "./components/MiniCard";
import { NavLink } from "react-router-dom";
import ImgLg from "./components/ImgLg";
import ItemText from "./components/ItemText";
import Overview from "./components/Overview";

/**
 * UI states described in a switch statement
 */
type UiActions =
  | { type: string | "ONE"; }
  | { type: string | "TWO"; }
  | { type: string | "THREE"; }
  | { type: string | "FOUR"; }
  | { type: string | "FIVE"; }

function Food({ itemNames, itemImages, itemFullNames, credits }:
  { itemNames: Array<Array<string>>; itemImages: Array<string>; itemFullNames: Array<string>; credits: Array<Array<string>> }) {
  const uiState = (state: InitialState, action: UiActions) => {
    // destructuring the action
    const { type } = action;
    switch (type) {
      case "ONE": {
        return {
          ...state,
          displayCurrent: ["flex", "hidden", "hidden", "hidden", "hidden"],
          itemName: itemNames[0],
          currentSliderPosition: 0,
        };
      }
      case "TWO": {
        return {
          ...state,
          displayCurrent: ["hidden", "flex", "hidden", "hidden", "hidden"],
          itemName: itemNames[1],
          currentSliderPosition: 20,
        };
      }
      case "THREE": {
        return {
          ...state,
          displayCurrent: ["hidden", "hidden", "flex", "hidden", "hidden"],
          itemName: itemNames[2],
          currentSliderPosition: 40,
        };
      }
      case "FOUR": {
        return {
          ...state,
          displayCurrent: ["hidden", "hidden", "hidden", "flex", "hidden"],
          itemName: itemNames[3],
          currentSliderPosition: 60,
        };
      }
      case "FIVE": {
        return {
          ...state,
          displayCurrent: ["hidden", "hidden", "hidden", "hidden", "flex"],
          itemName: itemNames[4],
          currentSliderPosition: 80,
        };
      }
      default:
        break;
    }
    return state;
  };
  const actionList = ["ONE", "TWO", "THREE", "FOUR", "FIVE"];

  // state
  const [i, setI] = useState(0);
  const [chat, setChat] = useState(false);

  // SET REDUCER
  const initialState: InitialState = {
    displayCurrent: ["flex", "hidden", "hidden", "hidden", "hidden"],
    currentSliderPosition: 24,
    itemName: itemNames[0],
  };
  const [state, dispatch] = useReducer(uiState, initialState);
  let {
    displayCurrent,
    currentSliderPosition, itemName
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
        <div className="container mx-auto  flex items-end justify-end h-14 px-6">
          <span className="mr-8">{Icons.search}</span>
          <span className="">{Icons.menu}</span>
        </div>
      </header>
      <main className="w-full flex flex-col h-auto lg:h-screen-nav">
        <section className="container mx-auto h-auto lg:h-full">
          <article className="grid grid-cols-12 gap-x-6 h-full">
            <div className="col-span-12 lg:col-span-8 p-6">
              <div className="flex flex-col justify-center h-full">
                <section className="flex flex-wrap lg:flex-nowrap gap-8">
                  {/* large img */}
                  <ImgLg items={itemImages} displayCurrent={displayCurrent} />
                  {/* text */}
                  <ItemText title="Most Loved dishes" itemName={itemName} />
                </section>
                <section className="flex justify-between items-center">
                  <span className="hidden lg:flex justify-center">{Icons.chevronLeft}</span>
                  <div className="flex my-6 lg:my-0">
                    <div className="grid grid-cols-10 gap-2 lg:gap-6">
                      <MiniCard
                        image={`${itemImages[0]}.png`}
                        name={`${itemFullNames[0]}`}
                        showCurr={displayCurrent[0]}
                        clickEvent={() => {
                          // reset id onclick to allow continuation to the next item
                          setI(0);
                          // then dispatch the state
                          dispatch({ type: "ONE" })
                        }} />
                      <MiniCard
                        image={`${itemImages[1]}.png`}
                        name={`${itemFullNames[1]}`}
                        showCurr={displayCurrent[1]}
                        clickEvent={() => { setI(1); dispatch({ type: "TWO" }) }} />
                      <MiniCard
                        image={`${itemImages[2]}.png`}
                        name={`${itemFullNames[2]}`}
                        showCurr={displayCurrent[2]}
                        clickEvent={() => { setI(2); dispatch({ type: "THREE" }) }} />
                      <MiniCard
                        image={`${itemImages[3]}.png`}
                        name={`${itemFullNames[3]}`}
                        showCurr={displayCurrent[3]}
                        clickEvent={() => { setI(3); dispatch({ type: "FOUR" }) }} />
                      <MiniCard
                        image={`${itemImages[4]}.png`}
                        name={`${itemFullNames[4]}`}
                        showCurr={displayCurrent[4]}
                        clickEvent={() => { setI(4); dispatch({ type: "FIVE" }) }} />
                    </div>
                  </div>
                  <span className="hidden lg:flex justify-center">{Icons.chevronRight}</span>
                </section>
              </div>
            </div>
            {/* overview card */}
            <Overview displayCurrent={displayCurrent} />
          </article>
        </section>
        <section className="w-screen mx-auto h-screen lg:h-auto">
          <article className="w-full flex items-center justify-center lg:h-40 current_page">
            <div className="grid grid-cols-5 gap-2">
              <NavLink to="/" className="col-span-1 flex items-center justify-center hover:bg-slate-300 h-12 lg:h-24 aspect-square rounded-3xl">{Icons.food}</NavLink>
              <NavLink to="/wine" className="col-span-1 flex items-center justify-center hover:bg-slate-300 h-12 lg:h-24 aspect-square rounded-3xl">{Icons.wine}</NavLink>
              <span onClick={() => setChat((x) => x ? false : true)} className={`${chat ? "bg-slate-200" : "bg-none"} flex col-span-1 items-center justify-center hover:bg-slate-300 h-12 lg:h-24 aspect-square rounded-3xl relative cursor-pointer`}>
                {Icons.chat}
                <div className={`${chat ? "opacity-100 scale-100" : "opacity-0 scale-0"} flex flex-col items-center absolute bottom-[180%] lg:bottom-[140%] border-2 border-slate-200 w-screen lg:w-[400px] rounded-t-3xl lg:rounded-3xl bg-slate-50 px-8 py-10 transition-all duration-200 ease-in-out origin-bottom`}>
                  <div className="flex justify-between w-full">
                    <p className="font-bold">UI Design Credits</p>
                    <p className="">❤️</p>
                  </div>
                  <div className="flex flex-col gap-4 pt-6 w-full mb-6">
                    <article className="flex items-center justify-between">
                      <span className="flex items-center">
                        <img src="dribbble.svg" alt="food" className="w-8 mr-2" />
                        <a href="https://dribbble.com/zazulyaziz" target="_blank" className="text-xs lg:text-sm hover:underline capitalize">zazuly aziz</a>
                      </span>
                      <a href="https://dribbble.com/zazulyaziz" target="_blank" className="text-xs lg:text-sm hover:underline">dribble</a>
                    </article>
                  </div>
                  <div className="flex justify-between w-full">
                    <p className="font-bold">Photo Credits</p>
                    <p className="">❤️</p>
                  </div>
                  <div className="flex flex-col gap-4 pt-6 w-full">
                    {credits.map(item => (
                      <article className="flex items-center justify-between">
                        <span className="flex items-center">
                          <img src={`/img/mini-img/${item[0]}.png`} alt="food" className="w-8 mr-2" />
                          <a href={`${item[1]}`} target="_blank" className="text-xs lg:text-sm hover:underline">{item[2]}</a>
                        </span>
                        <a href={`${item[3]}`} target="_blank" className="text-xs lg:text-sm hover:underline">{item[4]}</a>
                      </article>
                    ))}
                  </div>
                  <span className="absolute -bottom-[30px] w-4 h-4 bg-slate-200 border rounded-xl"></span>
                </div>
              </span>
              <span className="col-span-1 flex items-center justify-center hover:bg-slate-300 h-12 lg:h-24 aspect-square rounded-3xl">{Icons.profile}</span>
              <span className="col-span-1 flex items-center justify-center hover:bg-slate-300 h-12 lg:h-24 aspect-square rounded-3xl">{Icons.mic}</span>
            </div>
          </article>
        </section>
        <span className="absolute bottom-[70%] lg:bottom-[50%] -left-[90%] lg:-left-[30%] -z-10">
          <img src="ring.png" alt="huge ring" />
        </span>
      </main>
    </>
  );
}
// Photo by <a href="https://unsplash.com/@widenka?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Martin Widenka</a> on <a href="https://unsplash.com/s/photos/food-in-plate?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
export default Food;

interface InitialState {
  displayCurrent: Array<string>,
  currentSliderPosition: number,
  itemName: Array<string>,
}