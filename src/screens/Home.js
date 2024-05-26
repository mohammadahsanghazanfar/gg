import React, { useState,useEffect } from 'react'
import Navbar from '../components/navbar'
import Carousel from '../components/carousel'
import Leftarrow from '../components/leftarrow'
import Rightarrows from '../components/rightarrows'
import Card from '../components/card'
import Cartstate from '../cart/Cartstate'
import Footer from '../components/Footer'

const slides=[
  
  {
    src: "https://as1.ftcdn.net/v2/jpg/05/57/55/34/1000_F_557553416_PKmESX85uDHAs1u4ofnNQ2aMNdzogKb2.jpg",
    alt:"burger"
    
 },
 {
     src: "https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg",
     alt:"burger"
     
  },
  {
     src: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
     alt:"burger"
     
  }

]

const content=[
  {
    img:"https://media.istockphoto.com/id/501150349/photo/chicken-biryani-11.jpg?s=612x612&w=0&k=20&c=w6mDnUx8MnH3rnP9bR0VfWRwrODcbTz-6U07o3Zrs4o=",
    title: " Biryani",
    text:"Tasty, fluffy and juicy ",
    price:10
  },
  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrl3YvgEM_pG3M96AoL5ndhtA_5xnB87nFQ&usqp=CAU",
    title: " Nehari",
    text:"Creamy, richy and shahi ",
    price:20
  },
  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fBc-HjcmeZLysfI1Dyp2zBFBnUtgu6dAfQ&usqp=CAU",
    title: " karahi",
    text:"Spicy, mirchi and oily ",
    price: 15
  },

  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvnrAkYE3_gfbaP1tZ9Yr8dQOPviNMnQhH8A&usqp=CAU",
    title: " Pizza",
    text:"Oniony, juicy and softy ",
    price: 35
  },
  {
    img:"https://www.foodandwine.com/thmb/pwFie7NRkq4SXMDJU6QKnUKlaoI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ultimate-Veggie-Burgers-FT-Recipe-0821-5d7532c53a924a7298d2175cf1d4219f.jpg",
    title: " Burger",
    text:"Crunchy, rolly and beefy ",
    price: 35
  }
]

export default function Home() {
  const [cartState,setCartState]=useState(false)
  const[slidecount,setslidecount]=useState(0)
  const [newCart,setnewCart]=useState([])

  const leftclick=()=>{
   setslidecount(slidecount === 0 ? slides.length-1: slidecount-1)
  }
 
  const rightclick=()=>{
   setslidecount(slidecount === slides.length -1 ? 0 : slidecount+1)
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setslidecount((prevCount) => (prevCount === slides.length - 1 ? 0 : prevCount + 1));
    }, 5000);

    return () => clearInterval(intervalId); // Clear the interval on unmount
  }, []);

     const recieve= (obj)=>{
        
         const newArray=newCart.concat(obj)
         setnewCart(newArray)
         console.log(newCart);

     }
     const handleCartShowing=()=>{
          setCartState(false)
     }
     const handleCartShowingTrue=()=>{
      setCartState(!cartState)
 }
  return (
    <div>
         <Navbar  enabled={handleCartShowingTrue}  arr={newCart}/>
         
         {cartState && <Cartstate  cancel={handleCartShowing} item={newCart} />}
         <Carousel slides={slides} count={slidecount} />
         
          <Leftarrow click={leftclick}/>
         <Rightarrows clicked={rightclick}/>
         <Card  order={content} recieving={recieve} />
         <Footer></Footer>
    </div>
  )
}
