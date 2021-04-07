import React, { useEffect, useState, Fragment } from "react";

import Tabletop from "tabletop";
import Element from './elements/element';
import
{
    Button
} from "reactstrap";
export default function Rfqsheet()
{
    const [data, setData] = useState([]);
    const txtstyle = {
        border: 0
    };
    const [data_value, setDatavalue] = useState([
        { field_id: 'input00', className: 'txtcls txtclsbackgroundorange', value: 'Particulars' },
        { field_id: 'input01', className: 'txtcls txtclsbackgroundorange', value: 'Number of  (As per selection of methodology in Portal)' },
        { field_id: 'input02', className: 'txtcls txtclsbackgroundorange', value: 'Cost per (As per selection of methodology in Portal)' },
        { field_id: 'input03', className: 'txtcls txtclsbackgroundorange', value: 'Amount' },
        { field_id: 'input10', className: 'txtcls', value: 'Research Cost                (Recruitment, Incentive, Local Conveyance and Management fees)' },
        { field_id: 'input20', className: 'txtcls', value: 'Moderator' },
        { field_id: 'input30', className: 'txtcls', value: 'Debreif' },
        { field_id: 'input40', className: 'txtcls', value: 'Interpretation/ Translations' },
        { field_id: 'input50', className: 'txtcls', value: 'DG Preparation' },
        { field_id: 'input60', className: 'txtcls', value: 'Transcription' },
        { field_id: 'input70', className: 'txtcls', value: 'Content Analysis' },
        { field_id: 'input80', className: 'txtcls', value: 'Web streaming' },
        { field_id: 'input90', className: 'txtcls', value: 'A/V recording' },
        { field_id: 'input100', className: 'txtcls', value: 'Venue Hire            2 Room to be hired(Activity Room+ Client Room) Venue Type - Semi Commercial' },
        { field_id: 'input110', className: 'txtcls', value: 'Others' },
        { field_id: 'input120', className: 'txtcls', value: 'Others' },
        { field_id: 'input130', className: 'txtcls', value: 'Others' },
        { field_id: 'input140', className: 'txtcls', value: 'Deliverables' },
        { field_id: 'input150', className: 'txtcls', value: 'Sampling' },
        { field_id: 'input160', className: 'txtcls', value: 'Timelines' },
        { field_id: 'input170', className: 'txtcls txtclsbackground', value: 'Total Cost' },
        { field_id: 'input21', className: 'txtcls', value: '3rd variable' }
    ]);
    const [fields_column] = useState([
        { field_type: 'label', name: 'select', label: 'first name', className: 'txtcls', width: 200 },
        { field_type: 'text', name: 'select', label: 'first name', className: 'txtcls', width: 200 },
        { field_type: 'text', name: 'select', label: 'first name', className: 'txtcls', colsize: 4, width: 100 },
        { field_type: 'text', name: 'select', label: 'first name', className: 'txtcls', colsize: 4 },
        { field_type: 'text', name: 'select', label: 'first name', className: 'txtcls', colsize: 4 },
        { field_type: 'text', name: 'select', label: 'first name', className: 'txtcls', colsize: 4 },
        { field_type: 'text', name: 'select', label: 'first name', className: 'txtcls', colsize: 4 },
        { field_type: 'text', name: 'select', label: 'last name', className: 'txtcls', colsize: 4 }]);
    //const dimension = [10, 10];
    let rows = 20;
    let noofcolumns = 8;


    useEffect(() =>
    {
        document.addEventListener("keydown", handlefocus);
        Tabletop.init({
            key: "1zCELCpJ1Gg3x5WD5mHFRLPHJbwhYGVDOhQKRiHuh5Gc",
            simpleSheet: true
        })
            .then((data) => setData(data))
            .catch((err) => console.warn(err));
    }, []);

    const [rowsarr, setRowsarr] = useState({});
    const onFieldChange = (rowId, field) => (value) =>
    {
        rowsarr[rowId][field] = value;
        setRowsarr([].concat(rowsarr))
    }
    function getjson()
    {
        alert('json caleld');
    }
    function onchangejson()
    {
        alert('onchange json called');
    }

    function handlefocus(e)
    {
        const felement = document.querySelectorAll('.txtcls');
        const focusable = [...felement];
        const index = focusable.indexOf(document.activeElement);

        //alert("felement length"+felement.length);
        let nextindex = 0;
        if (e.keyCode === 38)
        {
            e.preventDefault();
            nextindex = index > 0 && index >= noofcolumns ? index - noofcolumns : 0;
            felement[nextindex].focus();
        }
        if (e.keyCode === 40)
        {
            e.preventDefault();
            nextindex = index < focusable.length ? index + noofcolumns : index;
            felement[nextindex].focus();
        }
        if (e.keyCode === 37)
        {
            e.preventDefault();
            nextindex = index > 0 ? index - 1 : 0;
            felement[nextindex].focus();
        }

        if (e.keyCode === 39)
        {
            e.preventDefault();
            nextindex = index + 1 < focusable.length ? index + 1 : index;
            felement[nextindex].focus();
        }
    }
   
    const rowarr = [];
    for (let j = 0; j < rows; j++)
    {
        rowarr.push(j);
    }
    return (
        <>
            <table border="1">
                <tbody>
                        {<>
                    {rowarr ? rowarr.map((row, ind) => <tr key={'tr_' + ind} id={'tr_' + ind }>
                        {fields_column ? fields_column.map((field, index) => <td key={'td_' + ind + index} id={'td_' + ind + index}><Element field={field} name_1={'input' + ind + index} data_value={data_value} onChange={() => onchangejson()} /></td> ) : null}
                            </tr>) : null}
                    </>}
                </tbody> 
            </table>
            <div>
                    <Button onClick={() => getjson()}>Get Json </Button>
             </div>   
            <ul>
                {data.map((item, i) => (
                    <Fragment key={i}>
                        <li>URL -- {item.URL}</li>
                        <li>Email - {item.email}</li>
                        <li>Token - {item.token}</li>
                        <br />
                    </Fragment>
                ))}
            </ul>
        </>
    );
}