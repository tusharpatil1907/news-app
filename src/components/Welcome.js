import React from 'react'

function Welcome({news}) {
  let a = parseInt(Math.random() * 100)
    // console.log(a) 

    
  return (
    <div style={{display:'flex',border:"1px solid",justifyContent:'space-between',marginTop:'70px'}}>
        <div style={{padding:'10px'}} >
          <h2>{news[a]?.title}</h2>
          <p >{news[a]?.description}</p>
        </div>
        <img style={{maxWidth:'50%',maxHeight:'300px', padding:'30px'}} src={news[a]?.urlToImage} alt="not avaliable" />
    </div>
  )
}

export default Welcome
