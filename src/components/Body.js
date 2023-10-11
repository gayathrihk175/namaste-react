import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// import { resList } from "../utils/mockData";

const Body = () => {
//   let listOfRestaurant = [  
//   {
//     data:{
//       id: "334477",
//       name: "Dominos",
//       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
//       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
//       costForTwo: 70000,
//       deliveryTime: 36,
//       avgRating:"4.1",
//     }
//   },
//   {
//     data:{
//       id: "334478",
//       name: "KFC",
//       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
//       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
//       costForTwo: 70000,
//       deliveryTime: 36,
//       avgRating:"3.5",
//     }
//   },
//   {
//     data:{
//       id: "334479",
//       name: "Mc Donalds",
//       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
//       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
//       costForTwo: 70000,
//       deliveryTime: 36,
//       avgRating:"5",
//     }
//   }
// ];


// const [listOfRestaurant,setListOfRestaurant] = useState( [  
//   {
//     data:{
//       id: "334477",
//       name: "Dominos",
//       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
//       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
//       costForTwo: 70000,
//       deliveryTime: 36,
//       avgRating:"4.1",
//     }
//   },
//   {
//     data:{
//       id: "334478",
//       name: "KFC",
//       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
//       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
//       costForTwo: 70000,
//       deliveryTime: 36,
//       avgRating:"3.5",
//     }
//   },
//   {
//     data:{
//       id: "334479",
//       name: "Mc Donalds",
//       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
//       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
//       costForTwo: 70000,
//       deliveryTime: 36,
//       avgRating:"5",
//     }
//   }
// ]);

// const [listOfRestaurant,setListOfRestaurant] = useState(resList);


const [listOfRestaurant,setListOfRestaurant] = useState([]);
const [searchText,setSearchText] = useState([]);
// const [filteredRestaurant,setFilteredRestaurant] = useState([]);


// If no dependency array ==> useEffect is called on every render
// In case of empty dependency array ==> useEffect is called only on initial render and just once, when the component is rendered the first time
// In case of something as a dependency ==> useEffect is called when that dependency's state changes.

useEffect(()=>{
  // console.log("useEffect called")
  fetchData();
  // getRestaurants()
},[])

//the callback is called when the render cycle is done.

console.log("Body rendered")

const fetchData = async  () => {
  // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5??lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
  // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
  // const json = await data.json();
  // console.log(json)

  // setListOfRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.info)

  const data = await fetch(
    "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
  );
  const res = await data.json();
  //Optional Chaining
  setListOfRestaurant(
    res?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  );
  // setFilteredRestaurant(res?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  console.log(res);

}

// const fetchData = async () => {
//   const data = await fetch(
//     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
//   );

//   const json = await data.json();
//   const arrayOfCards = json.data.cards;
//   const restaurant_list = "restaurant_grid_listing";
  
//   for (const cardObj of arrayOfCards) {
//     if (cardObj.card.card && cardObj.card.card.id === restaurant_list) {
//       const resData =
//       cardObj.card?.card?.gridElements?.infoWithStyle?.restaurants;
//       setListOfRestaurantnt(resData);
//       setFilteredRestaurant(resData);
//     }
//   }
// };

// const getRestaurants = async () => {
//   try {
//     const data = await fetch(
//       "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");


//     const json = await data.json();


//     // was showing an error of data fatching because sometime data coming from cards[1] sometime cards[2] and different on other times so me make a function and check which value of i gives data in cards[i]
//     async function checkJsonData(jsonData) {

//       for (let i = 0; i < jsonData?.data?.cards.length; i++) {

//         // initialize checkData for Swiggy Restaurant data
//         let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

//         // if checkData is not undefined then return it
//         if (checkData !== undefined) {
//           return checkData;
//         }
//       }
//     }
//     // call the checkJsonData() function which return Swiggy Restaurant data
//     const resData = await checkJsonData(json);

//     // update the state variable restaurants with Swiggy API data
//     setListOfRestaurant(resData)
//   } catch (error) {
//     console.log(error);
//   }

// }

//Conditional rendering
// if(listOfRestaurant.length === 0) {
//   // return <h1 style={{textAlign:"center"}}>Loading...</h1>
//   return <Shimmer/>
// }

// Conditional rendering

  return (listOfRestaurant.length === 0) ? <Shimmer/> : (
    <div className="body-container">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" placeholder="Search..." value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
          <button onClick={()=>{
            console.log(searchText)
            const filteredRestaurant = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setListOfRestaurant(filteredRestaurant);
          }}>Search</button>
        </div>
        <button onClick={() => {
          const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4)
          console.log(listOfRestaurant)
          setListOfRestaurant(filteredList)
        }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {/* Restaurant Card */}

        {/* <RestaurantCard resData={resObj} /> */}

        {/* <RestaurantCard resData={resList[0]} />
              <RestaurantCard resData={resList[1]} />
              <RestaurantCard resData={resList[2]} />
              <RestaurantCard resData={resList[3]} />
              <RestaurantCard resData={resList[4]} />
              <RestaurantCard resData={resList[5]} />
              <RestaurantCard resData={resList[6]} />
              <RestaurantCard resData={resList[7]} /> */}

        {/* {
                resList.map((restaurant) => <RestaurantCard resData={restaurant} key={restaurant.data.id}  />)
              } */}

              {listOfRestaurant.map((restaurant) => 
                (
                  <Link key={restaurant?.info?.id} to={"/restaurant/"+restaurant?.info?.id}><RestaurantCard resData={...restaurant?.info} /></Link>
                )
              )}
      </div>
    </div>
  );
};

export default Body;
