import React from "react";

const Label = ({ field_id, field_label, field_placeholder, field_value, classname, colsize, name }) =>
{
    const cols = 'col-md-'+colsize
    return (
        <input type="text" name={name} className={classname} id={name} defaultValue={field_value} readOnly  />
    )
}
export default Label

