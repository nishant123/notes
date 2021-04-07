import React, { useEffect, useState, Fragment } from "react";
import Spreadsheet from "react-spreadsheet";

export default function Rfqreactsheet()
{
    const RangeView = ({ cell }) => (
        <input
            type="range"
            value={cell.value}
            disabled
            style={{ pointerEvents: "none" }}
        />
    );

    const RangeEdit = ({ cell, onChange }) => (
        <input
            type="range"
            onChange={(e) =>
            {
                onChange({ ...cell, value: e.target.value });
            }}
            value={cell.value || 0}
            autoFocus
        />
    );

    const data = [
        [{ value: "Flavors" }],
        [({ value: "Vanilla" }, { value: "Chocolate" })],
        [{ value: "Strawberry" }, { value: "Cookies" }],
        [
            { value: "How much do you like ice cream?" },
            { value: 100, DataViewer: RangeView, DataEditor: RangeEdit },
        ],
    ];

    const MyComponent = () => <Spreadsheet data={data} />;
    return ({ MyComponent});
}

