import React, { Component } from 'react';
import './EFTable.css'

// function mySort(key) {
//     const sortKey = this.state.sortKey;
//     const sort = (key === sortKey) ? !this.state.sort : true;

//     var newStateB = this.state.stateB.sort(function(a, b) {
//         // if (a[key] > b[key]) return sort ? 1 : -1;
//         // if (a[key] < b[key]) return sort ? -1 : 1;
//         // return 0;
//         const res = ("" + a[key]).localeCompare("" + b[key]);
//         return res === 0 ? 0 : res === 1 ? (sort ? 1 : -1) : (sort ? -1 : 1);
//     });
//     this.setState({
//         stateB: newStateB,
//         sortKey: key,
//         sort: sort
//     });
// }

function THead(props) {
    const thead = props.stateH.map((value, index) => {
        var sortActive = (value.key === props.sortKey) ? " active " + (props.sort ? "asc" : "desc") : "";
        return (
            <p className={"th " + value.key + sortActive} key={index} onClick={() => props.tableSort(value.key)}>
                {value.name}
            </p>
        );
    });
    return (
        <div className="thead">
            <div className="tr">
                {thead}
            </div>
        </div>
    );
}

function TBody(props) {
    const tbody = props.stateB.map((entry) => {
        const line = props.stateH.map((value, index) => {
            return (
                <div className="td" key={value.key}>
                    {value.key === "boardName" ? (
                    <a href="#" onClick={() => props.tableDetail(entry)}>{entry[value.key]}</a>
                    ) : (
                    entry[value.key]
                    )}
                </div>
            );
        });
        return (
            <div className="tr" key={entry.id}>
                {line}
            </div>
        );
    })
    return (
        <div className="tbody">
            {tbody}
        </div>
    )
}

export default (props) => {
    return (
        <div className="table">
            <THead {...props.item} tableSort={props.tableSort}/>
            <TBody {...props.item} tableDetail={props.tableDetail}/>
        </div>
    );
}