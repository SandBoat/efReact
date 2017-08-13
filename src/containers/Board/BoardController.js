import React , { Component } from 'react'
import Store from '../../data/EfStore'
import Board from './Board'

export default class BoardController extends Component {
    constructor() {
        super();
        this.state = {
            item: Store.getItem(),
            lindDetail: Store.getLineDetail()
        };
    }

    render() {
        return (
            <Board {...this.state}/>);
    }
}
