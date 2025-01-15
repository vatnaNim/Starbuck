import React from "react";
import Home from "./component/HomePage/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "../src/App.css";
import ManuLayout from "./component/Menu/MenuPage/MenuLayout";
import ManuLink from "./component/Menu/MenuPage/MenuLink";
import {
  Con1,
  Con2,
  Con3,
  Con4,
  Con5,
  Con6,
  Con7,
  Con8,
  Con9,
  Con10,
  Con11,
  Con12,
  Con13,
  Con14,
  Con15,
  Con16,
  Con17,
  Con18,
  Con19,
  Con20,
  Con21,
} from "./component/Menu/MenuDataConponent/ConImport";
import Rewards from "./component/Rewards/Rewards";
import CardsPage from "./component/GiftCard/CardsPage";
import Favorites from "./component/Menu/BarConponent/Favorites";
import Previoud from "./component/Menu/BarConponent/Previoud";
import Featured from "./component/Menu/BarConponent/Featured";
import ProductItems from "./component/Menu/MenuPage/ProductItems";
import IcedDetail from "./component/Menu/Detail & Order/IcedFolder/IcedDetail";
import Iced2 from "./component/Menu/Detail & Order/IcedFolder/Iced2";
import Iced3 from "./component/Menu/Detail & Order/IcedFolder/Iced3";
import SignInPage from "./component/Form/SignIn/SignInPage";
import SignUpPage from "./component/Form/SignUp/SignUpPage";
import AmericanosCon from "./component/Menu/Detail & Order/Hotcoffee/AmericanosCon";
import FeaturedBlonde from "./component/Menu/Detail & Order/Hotcoffee/FeaturedBlonde";

const rounter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "MenuPage",
    element: <ManuLayout />,
    children: [
      {
        path: "Menu",
        element: <ProductItems />,
        children: [
          {
            index: true,
            element: <ManuLink />,
          },
          {
            path: "Iced-energy",
            element: <Con1 />,
          },
          {
            path: "Hot-coffees",
            element: <Con2 />,
          },
          {
            path: "Cold-coffees",
            element: <Con3 />,
          },
          {
            path: "Starbucks-refresher-beverages",
            element: <Con4 />,
          },
          {
            path: "Frappuccino-blended-beverages",
            element: <Con5 />,
          },
          {
            path: "Iced-tea-and-lemonade",
            element: <Con6 />,
          },
          {
            path: "Hot-teas",
            element: <Con7 />,
          },
          {
            path: "Milk-juice-more",
            element: <Con8 />,
          },
          {
            path: "Bottled-beverages",
            element: <Con9 />,
          },
          {
            path: "Hot-breakfast",
            element: <Con10 />,
          },
          {
            path: "Oatmeak-yogurt",
            element: <Con11 />,
          },
          {
            path: "Hot-breakfast",
            element: <Con12 />,
          },
          {
            path: "Bakery",
            element: <Con13 />,
          },
          {
            path: "Lunch",
            element: <Con14 />,
          },
          {
            path: "Snack-sweets",
            element: <Con15 />,
          },
          {
            path: "Whole-bean",
            element: <Con16 />,
          },
          {
            path: "VIA-instant",
            element: <Con17 />,
          },
          {
            path: "Cold-cups",
            element: <Con18 />,
          },
          {
            path: "Tumblers",
            element: <Con19 />,
          },
          {
            path: "Mugs",
            element: <Con20 />,
          },
          {
            path: "Other",
            element: <Con21 />,
          },
        ],
      },
      {
        path: "Favorites",
        element: <Favorites />,
      },
      {
        path: "Previoud",
        element: <Previoud />,
      },
      {
        path: "Featured",
        element: <Featured />,
      },
      {
        path: "IcedDetail",
        element: <IcedDetail />,
      },
      {
        path: "IcedDetail2",
        element: <Iced2 />,
      },
      {
        path: "IcedDetail3",
        element: <Iced3 />,
      },
      {
        path: "CoffeeAmericano",
        element: <AmericanosCon />,
      },
      {
        path: "FeaturedBlondeRoast",
        element: <FeaturedBlonde />,
      },
      {
        path: "IcedDetail3",
        element: <Iced3 />,
      },
    ],
  },
  {
    path: "Rewards",
    element: <Rewards />,
  },
  {
    path: "GiftCards",
    element: <CardsPage />,
  },
  {
    path: "SignIn",
    element: <SignInPage />,
  },
  {
    path: "SignUp",
    element: <SignUpPage />,
  },
]);

function App() {
  return (
    <>
      <div>
        <RouterProvider router={rounter} />
      </div>
    </>
  );
}

export default App;
