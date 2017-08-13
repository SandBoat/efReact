import React from 'react';
import './EFTableEdit.css'

export default (props) => {
    console.log(props.line);
    const edit = props.line.stateH.map((value, index) => {
        console.log(value.name);
        console.log(props.line.stateB[value.key]);
        return (
            <div className="edit-block" key={index}>
                <p className="edit-block-label">{value.name}</p>
                <div className="edit-block-input" ><input type="text" value={props.line.stateB[value.key]}/></div>
            </div>
        );
    });
    return (
        <div className="editTable">
            <div className="edit">
                {edit}
            </div>
            <div className="operate">
                <button className="operate-btn">保存</button>
                <button className="operate-btn">删除</button>
                <button className="operate-btn">取消</button>
            </div>
        </div>
    );
}