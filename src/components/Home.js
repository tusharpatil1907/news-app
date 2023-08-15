import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import { Grid } from '@mui/material'
import Welcome from './Welcome'

function Home() {
    const[news,setNews] = useState([]) 
        const getNews = ()=>{
        fetch('https://newsapi.org/v2/everything?q=All&sortBy=uploaddate&apiKey=fc9b1cc1b92b4585a250846517f52ea4')
        // fetch('https://api.currentsapi.services/v1/latest-news?language=us&apiKey=dK2d80RLbypjzbRiyrbO_EMPsWuc3_5C6R1_93jRrqtw3p_s')
        .then(res => res.json())
        .then(json => setNews(json.articles))
    }
    useEffect(()=>{
        getNews()
    },[])

    console.log(news[0])

    return (
        
    <div>
        <Welcome news={news}/>
        <div style={{marginTop:'20px'}}>

        <Grid  container spacing={2}>  
        {news.map((data)=>{
            return <Grid item xs={3} >
                <NewsCard data={data}/>
            </Grid> 
        })}
        </Grid>
        </div>

    </div>

)
}

export default Home
