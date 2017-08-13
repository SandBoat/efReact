import React, { Component } from 'react';
import EFTable from '../../components/EFTable/EFTableContreller'
import EFTableEdit from '../../components/EFTableEdit/EFTableEditContreller'
import './Board.css'

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.state = props.item;
    }

    render() {
        return (
            <div>
                <h1>This is Board</h1>
                <EFTableEdit/>
                <EFTable {...this.state}/>
            </div>
        );
    }
}