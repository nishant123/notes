import React from "react";

const Input = ({ field_id, field_label, field_placeholder, field_value,classname,colsize }) =>
{
    const cols = 'col-md-'+colsize
    return (
        <div class={cols}>
            <label htmlFor="exampleInputEmail1">{field_label}</label>
            <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={field_placeholder ? field_placeholder : ' '} value={field_value}  />
        </div>
    )
}
export default Input

