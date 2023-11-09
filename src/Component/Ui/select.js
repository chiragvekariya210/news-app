import React from 'react';
import { Form } from 'react-bootstrap';

const Select = ({ onchange, value='', option = [],lable='' }) => {
    return (
        <Form.Select value={value} onChange={onchange} style={{color:value?'#000':'gray'}}>
            <option value=''>Select {lable}</option>
            {option.map((v) => {
                return (<option value={v.value}>{v.lable}</option>)
            })}
        </Form.Select>
    );
}

export default Select;