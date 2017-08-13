import EFDispatcher from './EFDispatcher';

export default {
    tableLoad: function(text) {
        EFDispatcher.dispatch({
            actionType: 'TABLE_LOAD',
            text: text
        });
    },
    tableSort: function(text) {
        EFDispatcher.dispatch({
            actionType: 'TABLE_SORT',
            text: text
        });
    },
    setLineDetail: function(line) {
        EFDispatcher.dispatch({
            actionType: 'SET_LINE_DETAIL',
            text: line
        });
    },
};