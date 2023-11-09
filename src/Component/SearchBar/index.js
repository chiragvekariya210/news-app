import React, { useEffect, useState } from 'react';
import './SearchBar.css'
import { Navbar, Container, Form, FormControl, Row, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-dropdown/style.css';
import Select from '../Ui/select';
import { format } from 'date-fns';

const categoriesList = [
  { value: 'business', lable: 'Business' },
  { value: 'entertainment', lable: 'Entertainment' },
  { value: 'general', lable: 'General' },
  { value: 'health', lable: 'Health' },
  { value: 'science', lable: 'Science' },
  { value: 'sports', lable: 'Sports' },
  { value: 'technology', lable: 'Technology' },
];

const SourceList = [
  { value: 'Hindustan Times', lable: 'Hindustan Times' },
  { value: 'NDTV News', lable: 'NDTV News' },
  { value: 'Livemint', lable: 'Livemint' },
  { value: 'India Today', lable: 'India Today' },
  { value: 'YouTube', lable: 'YouTube' },
];

const SearchBar = ({ onchangeSearch }) => {
  const [publishedDate, setPublishedDate] = useState(null);
  const [categories, setCategories] = useState('');
  const [source, setSource] = useState('');
  const [search, setSearch] = useState('');

  const onchangeCategories = (e) => {
    setCategories(e.target.value)
  }
  const onchangeSource = (e) => {
    setSource(e.target.value)
  }

  useEffect(() => {
    let newsPublishedDate = ''
    if (publishedDate) {
      newsPublishedDate = format(publishedDate, 'yyyy-MM-dd');
    }
    onchangeSearch({ categories, search, newsPublishedDate, source })
  }, [categories, search, publishedDate, source])

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">

        <Container className='d-block'>
          <Form inline className="ml-auto" >
            <Row>
              <Col xs={12} md={12} lg={6} className='my-2'>
                <FormControl type="text" value={search} onChange={(e) => { setSearch(e.target.value) }} placeholder="Search by keyword" className="mr-sm-2" />
              </Col>
              <Col xs={12} md={4} lg={2} className='my-2'>
                <DatePicker
                  selected={publishedDate}
                  onChange={(date) => setPublishedDate(date)}
                  placeholderText="Select Date"
                  className="form-control mr-sm-2 width-100"
                  dateFormat="yyyy-MM-dd"
                />
              </Col>
              <Col xs={12} md={4} lg={2} className='my-2'>
                <Select onchange={onchangeSource} value={source} option={SourceList} lable='Sources' />
              </Col>
              <Col xs={12} md={4} lg={2} className='my-2'>
                <Select onchange={onchangeCategories} value={categories} option={categoriesList} lable='Categories' />
              </Col>
            </Row>
          </Form>
        </Container>
      </Navbar.Collapse>
    </Navbar>

  );
};

export default SearchBar;