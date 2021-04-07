import React, { useState, useEffect } from "react";

const Input = ({ field_id, field_label, field_placeholder, field_value, classname, colsize, name }) =>
{
    const [textData, setTextData] = useState({});
    function onchangejson(valueres,name)
    {
        alert('onchange json caleld 2' + valueres+'name'+name);


    }
    return (
        <input type="text" name={name} className={classname} id={name} defaultValue={field_value} onChange={(e) => onchangejson(e.target.value,name)}   />
    )
}
export default Input

