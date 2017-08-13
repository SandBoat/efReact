import { EventEmitter } from 'events';
import assign from 'object-assign';

export default assign({}, EventEmitter.prototype, {
    item: {},

    lineDetail: null,

    loadItem: function(item) {
        this.item = item;
    },

    getItem: function() {
        return this.item;
    },

    getLineDetail: function() {
        return this.lineDetail;
    },

    addNewLine: function(line) {
        this.item.stateB.push(line);
    },

    tableSort: function(key) {
        const sortKey = this.item.sortKey;
        const sort = (key === sortKey) ? !this.item.sort : true;

        var newStateB = this.item.stateB.sort(function(a, b) {
            const res = ("" + a[key]).localeCompare("" + b[key]);
            return res === 0 ? 0 : res === 1 ? (sort ? 1 : -1) : (sort ? -1 : 1);
        });
        this.item.stateB = newStateB;
        this.item.sortKey = key;
        this.item.sort = sort;
    },

    setLineDetail: function(line) {
        this.lineDetail = line;
    },

    emitChange: function() {
        this.emit('change');
    },

    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }
});