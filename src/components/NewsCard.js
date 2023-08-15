import React from 'react'
import { Box,Button,Card,CardActions,CardContent,CardMedia,Typography } from '@mui/material'
import moment from 'moment/moment'
import { Link } from 'react-router-dom'
function NewsCard({data}) {
    
  // console.log(data)
  // console.log(data)
  return (
    <div >
      <Box >
        <Card elevation={0} style={{padding:'10px'}}>
            <CardMedia
                height= '200'
                component="img"
                src={data.urlToImage}/>
            <CardContent>
                <Typography sx={{fontWeight:'bold'}}>
                 {data.title}
                </Typography>
                <Typography sx={{fontSize:'10px'}}>
                 {moment(data.publishedAt).format("DD-MM-YYYY")}
                </Typography>
            </CardContent>
            <CardActions>
              <Button variant='outlined' size='small'>
                {/* <Link to="/newdDetails" style={{textDecoration:'none'}} state={{data}}>Read More</Link> */}
                <Link to="/newsDetails" state={{data }} style={{textDecoration:'none'}}>Read More</Link>

              </Button>
            </CardActions>
        </Card>
      </Box>
    </div>
  )
}

export default NewsCard
