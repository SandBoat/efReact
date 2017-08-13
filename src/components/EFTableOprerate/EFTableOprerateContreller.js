import React , { Component } from 'react'
import Store from '../../data/EfStore'
import EFActions from '../../data/EFActions'
import EFTable from './EFTable'

export default class EFTableController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: Store.getItem()
        };
    }

    componentDidMount() {
        Store.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        Store.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState({
            items: Store.getItem()
        });
    }

    tableSort(key) {
        EFActions.tableSort(key);
    }

    render() {
        return (
            <EFTable
            item={this.state.item}
            tableSort={this.tableSort}
            />);
    }
}
