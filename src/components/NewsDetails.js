// import React from 'react'
// import { useLocation } from 'react-router-dom'
// function NewsDetails() {
//     const location = useLocation()
//     console.log(location)
    
//     return (
//     <div>
//       <h1>{location.state.data.title}</h1>
//     </div>
//   )
// }
// // rfce
// export default NewsDetails


import React from 'react';
import { useLocation } from 'react-router-dom';

function NewsDetails() {
  const location = useLocation();
  const { data } = location.state || {}; // Safely access data from location state

  if (!data) {
    // Handle the case where data is not available
    return <div><h1>Data not available</h1></div>;
  }
  
  return (
    <div>
        <div style={{padding:'30px 80px'}}>
            <img src={data.urlToImage} alt={data.title}></img>
            <h1 style={{fontSize:'40px'}}>{data.title}</h1>
            <p style={{fontSize:'25px'}}>{data.description}</p>
            <p style={{fontSize:'25px'}}>{data.content}</p>
            {/* <h1>{data.title}</h1> */}
            <p>source:<span> <b>{data.source.name}</b></span></p>
            <p>Find more on: <span>
            <a href={data.url}>{"https://"+data.url}</a></span>
            </p>
        </div>
        {/* Render other details about the news article */}
    </div>
  );
}

export default NewsDetails;
