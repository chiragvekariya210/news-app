import React, { useState } from 'react';
import SearchBar from '../Component/SearchBar';
import NewsCard from '../Component/NewsCard.js';
import { Col, Image, Row } from 'react-bootstrap';
import { getNewsList } from '../Utils/api.js';
import { format } from 'date-fns';
import { toast } from 'react-toastify';

const NewsList = () => {
    const [newsData, setNewsData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getData = async ({ categories = '', search = 'genral', newsPublishedDate = '', source = '' }) => {
        setIsLoading(true)
        try {
            const res = await getNewsList(categories, search)
            if (res.data.status === "ok") {
                const news = res.data.articles
                if (newsPublishedDate || source) {
                    console.log('newsPublishedDate',newsPublishedDate,source)
                    const data = news.filter((v, i) => {
                        console.log('uu',format(new Date(v.publishedAt), 'yyyy-MM-dd') === newsPublishedDate && v?.source?.name === source)
                        if (newsPublishedDate && !source) {
                            return format(new Date(v.publishedAt), 'yyyy-MM-dd') === newsPublishedDate
                        } else if (source && !newsPublishedDate) {
                            return v?.source?.name === source
                        } else {
                            return format(new Date(v.publishedAt), 'yyyy-MM-dd') === newsPublishedDate && v?.source?.name === source
                        }
                    })
                    console.log('dataa', data)
                    setNewsData(data)
                } else {
                    setNewsData(res.data.articles)
                }
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || error?.message);
        }
        setIsLoading(false)

    }

    const onChangeCategories = (value) => {
        getData(value)
    }

    return (
        <div>
            <SearchBar onchangeSearch={onChangeCategories} />
            {isLoading ? <Image src={require('../assets/loader.gif')} className='loader' /> : <Row className='d-flex card-block flex-wrap mx-1 mt-4'>
                {newsData?.map((v, i) => {
                    return (
                        <Col xl={4} xxl={3} lg={4} md={6} sm={12} >
                            <NewsCard data={v} />
                        </Col>
                    )
                })}
                {newsData?.length === 0 && <h4>No Date Found</h4>}
            </Row>}
        </div>
    );
};

export default NewsList;