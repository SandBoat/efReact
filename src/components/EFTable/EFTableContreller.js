import React , { Component } from 'react'
import Store from '../../data/EfStore'
import EFActions from '../../data/EFActions'
import EFTable from './EFTable'

const item = {
    stateH: [{
        key: 'id',
        name: '序号'
    }, {
        key: 'boardName',
        name: '板块名称'
    }, {
        key: 'type',
        name: '类型'
    }, {
        key: 'image',
        name: '图片文件'
    }, {
        key: 'statue',
        name: '审核'
    }],
    stateB: [{
        id: 1,
        boardName: '音乐无限',
        type: '文件',
        image: 'music/',
        statue: 'true',
    }, {
        id: 2,
        boardName: '在线电影',
        type: '文件',
        image: 'movie/',
        statue: 'true',
    }, {
        id: 4,
        boardName: '新闻中心',
        type: '文件',
        image: 'TV/',
        statue: 'false',
    }, {
        id: 6,
        boardName: '软件下载',
        type: '文件',
        image: '',
        statue: 'true',
    }],
    sortKey: 'id',
    sort: true
};

export default class EFTableController extends Component {
    constructor(props) {
        super(props);
        // table init
        EFActions.tableLoad(item);
        // table init
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
            item: Store.getItem()
        });
    }

    tableSort(key) {
        EFActions.tableSort(key);
    }
    
    tableDetail(line){
        EFActions.setLineDetail({
            stateH:this.state.item.stateH,
            stateB:line
        });
    }

    render() {
        return (
            <EFTable
            item={this.state.item}
            tableSort={this.tableSort}
            tableDetail={this.tableDetail.bind(this)}
            />);
    }
}
