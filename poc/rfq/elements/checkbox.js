import React from 'react'
const Checkbox = ({ field_id, field_label, field_value }) =>
{
    return (
        <input type="checkbox" class="txtcls" className="txtcls" id="exampleCheck1" checked={field_value} onChange={() => { }}
            />
            
    )
}
export default Checkbox
