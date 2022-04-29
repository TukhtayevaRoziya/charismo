import React from "react";
import { Route } from "react-router-dom";
//  pages are import
import LoginContainer from "./Component/Login/LoginContainer";
import HomeContainer from "./Component/Home/HomeContainer";
import BlogContainer from "./Component/Blog/BlogContainer";
import { Reviews } from "./Component/Reviews/Reviews";
import { Answer } from "./Component/Answer/Answer";
import Shop from "./Component/Shop/Shop";

// page is css
import "./App.css";
// import axios from 'axios';
// import { useState } from 'react';

const App = () => {
  return (
    <div className="App">
      <Route path={"/"} render={() => <HomeContainer />} />
      <Route path={"/shop"} render={() => <Shop />} />
      <Route path={"/answer"} render={() => <Answer />} />
      <Route path={"/reviews"} render={() => <Reviews />} />
      <Route path={"/blog"} render={() => <BlogContainer />} />
      <Route path={"/login"} render={() => <LoginContainer />} />
      {/* <Book /> */}
      {/* <Shop2Sharp /> */}
    </div>
  );
};

export default App;

// type APIType = {
//   author: any
//   content: string
//   description: string
//   publishedAt: string
//   source: { id: string, name: string }
//   title: string
//   url: string
//   urlToImage: string
// }

// const Book = () => {
//   const [api, setApi] = useState([]);
//   useEffect(() => {
//     axios.get('http://api.mediastack.com/v1/news?access_key=ba529707eb6770fc110f84028be09c0b& keywords = tennis&countries = us, gb, deba529707eb6770fc110f84028be09c0b').then((res) => {
//       // setApi(res.data)
//       setApi(res.data.data);
//       console.log(res.data.data);
//     })
//   }, []);

//   let map = api.map((a: any) => <><p>{a.category}</p><h2>{a.country}</h2><h1>{a.author}</h1><h3>{a.description}</h3><img src={a.image} /><h4>{a.language}</h4><h5>{a.published_at}</h5><a href={a.source}>{a.source}</a><h6>title:{a.title}</h6><a href={a.url}>sdg</a></>)

//   return <div>
//     {map}dfgg
//   </div>;
// };
