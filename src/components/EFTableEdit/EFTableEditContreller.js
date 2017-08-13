import React , { Component } from 'react'
import Store from '../../data/EfStore'
import EFActions from '../../data/EFActions'
import EFTableEdit from './EFTableEdit'

export default class EFTableEditController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            line: Store.getLineDetail()
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
            line: Store.getLineDetail()
        });
    }

    tableSort(key) {
        EFActions.tableSort(key);
    }

    render() {
        const edit = this.state.line ? <EFTableEdit {...this.state} /> : <div></div>;
        return edit;
    }
}
