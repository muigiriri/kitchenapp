import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Wine from "./Wine";
import Food from "./Food";

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={< Food
          itemNames={
            [
              ["spicy", "fish"],
              ["toast", "& egg"],
              ["veggy", "salad"],
              ["tomato", "salad"],
              ["egg", "salad"]
            ]
          }
          itemImages={["food-1", "food-2", "food-3", "food-4", "food-5"]}
          itemFullNames={[
            "spicy fish with chilli",
            "toast egg & avocado",
            "raw vegetable salad",
            "leafy salad with dressing",
            "breakfast egg salad",
          ]}
          credits={
            [
              [
                "food-1",
                "https://unsplash.com/@widenka?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
                "Martin Widenka",
                "https://unsplash.com/s/photos/food-in-plate?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
                "unsplash.com"
              ],
              [
                "food-2",
                "https://www.pexels.com/photo/cooked-food-704569/",
                "Daria Shevtsova",
                "https://www.pexels.com",
                "pexels.com"
              ],
              [
                "food-3",
                "https://www.pexels.com/photo/photo-of-sliced-vegetables-on-ceramic-plate-3872373/",
                "Polina Tankilevitch",
                "https://www.pexels.com",
                "pexels.com"
              ],
              [
                "food-4",
                "https://unsplash.com/@qqq_saharok?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
                "Ala",
                "https://unsplash.com/s/photos/food-in-plate?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
                "unsplash.com"
              ],
              [
                "food-5",
                "https://unsplash.com/@thisisralston?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
                "Chris Ralston",
                "https://unsplash.com/s/photos/food-in-plate?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
                "unsplash.com"
              ],
            ]
          } />}></Route>
        <Route path='/wine' element={< Wine
          itemNames={
            [
              ["cappu-", "ccino"],
              ["lemon", "tea"],
              ["hot", "choco"],
              ["milk", "coffee"],
              ["yog-", "hurt"]
            ]
          }
          itemImages={["drink-1", "drink-2", "drink-3", "drink-4", "drink-5"]}
          itemFullNames={[
            "cappuccino",
            "lemon tea",
            "hot chocolate",
            "hot milk chocolate",
            "cold yoghurt in a bowl",
          ]}
          credits={
            [
              [
                "drink-1",
                "https://www.pexels.com/photo/cappuccino-in-white-ceramic-cup-on-white-ceramic-saucer-2396220/",
                "Tyler Nix",
                "https://www.pexels.com",
                "pexels.com"
              ],
              [
                "drink-2",
                "https://www.pexels.com/photo/white-tulips-on-brown-wooden-table-3750858/",
                "Кристина Александрова",
                "https://www.pexels.com",
                "pexels.com"
              ],
              [
                "drink-3",
                "https://www.pexels.com/photo/sliced-orange-fruit-on-white-ceramic-plate-9022941/",
                "Enrique Ríos",
                "https://www.pexels.com",
                "pexels.com"
              ],
              [
                "drink-4",
                "https://www.pexels.com/photo/a-coffee-drink-with-steamed-milk-3680186/",
                "Valeriia Miller",
                "https://www.pexels.com",
                "pexels.com"
              ],
              [
                "drink-5",
                "https://www.pexels.com/photo/yogurt-on-a-bowl-5191834/",
                "Shameel mukkath",
                "https://www.pexels.com",
                "pexels.com"
              ],
            ]
          } />}></Route>
      </Routes>
    </Router>
  );
}
// Photo by Polina Tankilevitch: https://www.pexels.com/photo/photo-of-sliced-vegetables-on-ceramic-plate-3872373/


export default App;



