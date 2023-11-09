import React from 'react';
import Card from 'react-bootstrap/Card';
import './NewsCard.css'
import { format } from 'date-fns';
const NewsCard = ({data}) => {

    const title = data.title?.length > 80 ? `${data.title.slice(0,80)}...`:data.title
    const description = data.description?.length > 150 ? `${data.description.slice(0,150)}...`:data.description
   
    return (
    <Card className='mb-4' style={{height:500}}>
      <Card.Img variant="top" src={data?.urlToImage??'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png'} className='card-image'/>
      <Card.Body>
        <div className='d-flex justify-content-between align-items-center'>
      <Card.Text className='news-card-text'>{format(new Date(data.publishedAt),'dd-MM-yyyy')}</Card.Text>
      <Card.Text className='news-card-text'>{data.source.name}</Card.Text>
        </div>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
