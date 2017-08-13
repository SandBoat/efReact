import { Dispatcher } from 'flux' ;
import Store from './EfStore';

var EFDispatcher = new Dispatcher();
EFDispatcher.register(function(action) {
    switch (action.actionType) {
    case 'TABLE_LOAD':
        Store.loadItem(action.text);
        Store.emitChange();
        break;
    case 'TABLE_SORT':
        Store.tableSort(action.text);
        Store.emitChange();
        break;
    case 'SET_LINE_DETAIL':
        Store.setLineDetail(action.text);
        Store.emitChange();
        break;
    default:
    // no op
    }
});

export default EFDispatcher;
