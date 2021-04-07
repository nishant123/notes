import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";


export default function Rfqform()
{
    const [data, setData] = useState([]);
    const txtstyle = {
        border: 0
    };

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
            nextindex = index > 0 && index >= 3 ? index - 3 : 0;
            felement[nextindex].focus();
        }

        if (e.keyCode === 40)
        {
            e.preventDefault();
            nextindex = index < focusable.length ? index + 3 : index;
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
    return (
        <>
            <div className="container">
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    );
}

