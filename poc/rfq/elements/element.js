import React from 'react';
import Input from './input';
import Select from './select';
import Label from './label';
import Checkbox from './checkbox';
import '../css/dynamicform.css';
const Element = ({ field: { field_type, field_id, field_label, field_placeholder, field_value, className, colsize }, name_1,data_value }) =>
{
    function check(array, key, value)
    {
        return array.some(object => object[key] === value);
    }
    console.log('data value', data_value);
    if (data_value!==undefined)
    {
        if (check(data_value, 'field_id', name_1))
        {
            const filtered = data_value.filter(a => a.field_id == name_1);
            className = filtered[0].className;
            field_value = filtered[0].value;
        }
    }

    switch (field_type)
    {
        case 'text':
            return (
                <Input field_id={field_id}
                    field_label={field_label}
                    field_placeholder={field_placeholder}
                    field_value={field_value}
                    classname={className}
                    colsize={colsize}
                    name={name_1}
                />);
        case 'select':
            return (
                <Select />
            )
        case 'label':
            return (               
                <Label field_id={field_id}
                    field_label={field_label}
                    field_placeholder={field_placeholder}
                    field_value={field_value}
                    classname={className}
                    colsize={colsize}
                    name={name_1}
                />
            )
        case 'checkbox':
            return (<Checkbox />)
        default:
            return null;
    }
}
export default Element