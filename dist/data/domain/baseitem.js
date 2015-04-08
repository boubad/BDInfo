System.register([], function (_export) {
    var _createClass, _classCallCheck, BaseItem;

    return {
        setters: [],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            //baseitem.js
            //
            BaseItem = _export("BaseItem", (function () {
                //

                function BaseItem(oMap) {
                    _classCallCheck(this, BaseItem);

                    this._id = null;
                    this._rev = null;
                    this._attachments = null;
                    this._avatarid = null;
                    this._desc = null;
                    if (oMap !== undefined && oMap !== null) {
                        if (oMap._id !== undefined) {
                            this.id = oMap._id;
                        }
                        if (oMap._rev !== undefined) {
                            this._rev = oMap._rev;
                        }
                        if (oMap.avatarid !== undefined) {
                            this._avatarid = oMap.avatarid;
                        }
                        if (oMap._attachments !== undefined) {
                            this._attachments = oMap._attachments;
                        }
                        if (oMap.description !== undefined) {
                            this._desc = oMap.description;
                        }
                    }
                }

                _createClass(BaseItem, {
                    description: { // constructor

                        get: function () {
                            return this._desc;
                        },
                        set: function (s) {
                            this._desc = s !== undefined ? s : null;
                        }
                    },
                    avatarid: {
                        get: function () {
                            return this._avatarid;
                        },
                        set: function (s) {
                            this._avatarid = s !== undefined && s !== null && s.trim().length > 0 ? s : null;
                        }
                    },
                    index_name: {
                        get: function () {
                            if (this.collection_name !== null) {
                                return this.collection_name + "/by_id";
                            } else {
                                return null;
                            }
                        }
                    },
                    create_id: {
                        value: function create_id() {
                            var n = Math.floor(Math.random() * 10000);
                            var ns = "" + n;
                            while (ns.length < 4) {
                                ns = "0" + ns;
                            }
                            var s = new Date().toISOString().substr(0, 10) + "-" + ns;
                            var ss = this.search_prefix !== null ? this.search_prefix + "-" + s : s;
                            return ss;
                        }
                    },
                    base_prefix: { // create_id

                        get: function () {
                            return null;
                        }
                    },
                    search_prefix: {
                        get: function () {
                            return this.base_prefix;
                        }
                    },
                    check_date: {
                        value: function check_date(d) {
                            var dRet = null;
                            if (d !== undefined && d !== null) {
                                var x = Date.parse(d.toString());
                                if (!isNan(x)) {
                                    dRet = d;
                                }
                            }
                            return dRet;
                        }
                    },
                    id: { // check_date

                        get: function () {
                            return this._id;
                        },
                        set: function (s) {
                            this._id = s !== undefined && s !== null && s.trim().length > 0 ? s : null;
                        }
                    },
                    rev: {
                        get: function () {
                            return this._rev;
                        },
                        set: function (s) {
                            this._rev = s !== undefined && s !== null && s.toString().trim().length > 0 ? s : null;
                        }
                    },
                    type: {
                        get: function () {
                            return null;
                        }
                    },
                    attachments: {
                        get: function () {
                            return this._attachments;
                        },
                        set: function (s) {
                            this._attachments = s !== undefined ? s : null;
                        }
                    },
                    collection_name: {
                        get: function () {
                            return null;
                        }
                    },
                    is_storeable: {
                        get: function () {
                            return this.type !== null && this.collection_name !== null;
                        }
                    },
                    to_insert_map: {
                        value: function to_insert_map(oMap) {
                            oMap.type = this.type;
                            oMap.avatarid = this.avatarid;
                            oMap.description = this.description;
                        }
                    },
                    to_fetch_map: {
                        value: function to_fetch_map(oMap) {
                            this.to_insert_map(oMap);
                            oMap._id = this.id;
                            oMap._rev = this.rev;
                            oMap.attachments = this.attachments;
                        }
                    },
                    toString: {
                        value: function toString() {
                            var oMap = {};
                            this.to_fetch_map(oMap);
                            return JSON.stringify(oMap);
                        }
                    },
                    array_contains: { // toString

                        value: function array_contains(cont, val) {
                            if (cont !== undefined && cont !== null && val !== undefined && val !== null) {
                                var s = val.toString().trim();
                                if (s.length > 0) {
                                    var n = cont.length;
                                    for (var i = 0; i < n; ++i) {
                                        var x = cont[i];
                                        if (x !== undefined && x !== null) {
                                            var ss = x.toString().trim();
                                            if (ss == s) {
                                                return true;
                                            }
                                        }
                                    } // i
                                } // s
                            }
                            return false;
                        }
                    },
                    array_add: { // _array_contains

                        value: function array_add(cont, val) {
                            if (cont !== undefined && cont !== null && val !== undefined && val !== null) {
                                var s = val.toString().trim();
                                if (s.length > 0) {
                                    var bFound = false;
                                    var n = cont.length;
                                    for (var i = 0; i < n; ++i) {
                                        var x = cont[i];
                                        if (x !== undefined && x !== null) {
                                            var ss = x.toString().trim();
                                            if (ss == s) {
                                                bFound = true;
                                                break;
                                            }
                                        }
                                    } // i
                                    if (!bFound) {
                                        cont.push(val);
                                    }
                                } // val
                            }
                        }
                    },
                    array_remove: { // _array_add

                        value: function array_remove(cont, val) {
                            if (cont !== undefined && cont !== null && val !== undefined && val !== null) {
                                var s = val.toString().trim();
                                if (s.length > 0) {
                                    var index = -1;
                                    var n = cont.length;
                                    for (var i = 0; i < n; ++i) {
                                        var x = cont[i];
                                        if (x !== undefined && x !== null) {
                                            var ss = x.toString().trim();
                                            if (ss == s) {
                                                index = i;
                                                break;
                                            }
                                        }
                                    } // i
                                    if (index >= 0) {
                                        cont = cont.splice(index, 1);
                                    }
                                } // val
                            }
                        }
                    },
                    sort_func: { // _array_add

                        value: function sort_func(p1, p2) {
                            var vRet = -1;
                            if (p1 !== undefined && p2 !== undefined && p1 !== null && p2 !== null) {
                                if (p1.id !== undefined && p1.id !== null) {
                                    if (p2.id !== undefined && p2.id !== null) {
                                        var s1 = p1.id.toString();
                                        var s2 = p2.id.toString();
                                        vRet = s1.localeCompare(s2);
                                    } else {
                                        vRet = 1;
                                    }
                                } else {
                                    vRet = 1;
                                }
                            } else if (p1 === undefined || p1 === null) {
                                vRet = 1;
                            }
                            return vRet;
                        } // sort_func

                    }
                });

                return BaseItem;
            })());
        }
    };
});
// class BaseItem
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL2Jhc2VpdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7dUNBRWEsUUFBUTs7Ozs7Ozs7Ozs7OztBQUFSLG9CQUFROzs7QUFFTix5QkFGRixRQUFRLENBRUwsSUFBSSxFQUFFOzBDQUZULFFBQVE7O0FBR1Qsd0JBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO0FBQ2hCLHdCQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQix3QkFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7QUFDekIsd0JBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ3RCLHdCQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztBQUNsQix3QkFBSSxBQUFDLElBQUksS0FBSyxTQUFTLElBQU0sSUFBSSxLQUFLLElBQUksQUFBQyxFQUFFO0FBQ3pDLDRCQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssU0FBUyxFQUFFO0FBQ3hCLGdDQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7eUJBQ3RCO0FBQ0QsNEJBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7QUFDekIsZ0NBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQzt5QkFDekI7QUFDRCw0QkFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUM3QixnQ0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO3lCQUNsQztBQUNELDRCQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssU0FBUyxFQUFFO0FBQ2pDLGdDQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7eUJBQ3pDO0FBQ0QsNEJBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxTQUFTLEVBQUM7QUFDL0IsZ0NBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQzt5QkFDakM7cUJBQ0o7aUJBQ0o7OzZCQXpCSSxRQUFRO0FBNkJiLCtCQUFXOzs2QkFIQSxZQUFHO0FBQ2QsbUNBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQzt5QkFDckI7NkJBQ2MsVUFBQyxDQUFDLEVBQUM7QUFDZCxnQ0FBSSxDQUFDLEtBQUssR0FBRyxBQUFDLENBQUMsS0FBSyxTQUFTLEdBQUksQ0FBQyxHQUFHLElBQUksQ0FBQzt5QkFDN0M7O0FBSUcsNEJBQVE7NkJBSEEsWUFBRztBQUNYLG1DQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7eUJBQ3pCOzZCQUNXLFVBQUMsQ0FBQyxFQUFFO0FBQ1osZ0NBQUksQ0FBQyxTQUFTLEdBQUcsQUFBQyxBQUFDLENBQUMsS0FBSyxTQUFTLElBQU0sQ0FBQyxLQUFLLElBQUksQUFBQyxJQUM5QyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQUFBQyxHQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7eUJBQ3pDOztBQUNHLDhCQUFVOzZCQUFBLFlBQUc7QUFDYixnQ0FBSSxJQUFJLENBQUMsZUFBZSxLQUFLLElBQUksRUFBQztBQUNsQyx1Q0FBTyxJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQzs2QkFDdEMsTUFBTTtBQUNILHVDQUFPLElBQUksQ0FBQzs2QkFDZjt5QkFDSjs7QUFDRCw2QkFBUzsrQkFBQSxxQkFBRztBQUNKLGdDQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxLQUFPLENBQUMsQ0FBQztBQUM1QyxnQ0FBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNoQixtQ0FBTyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUNsQixrQ0FBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7NkJBQ2pCO0FBQ0QsZ0NBQUksQ0FBQyxHQUFHLEFBQUMsQUFBQyxJQUFJLElBQUksRUFBRSxDQUFFLFdBQVcsRUFBRSxDQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUM5RCxnQ0FBSSxFQUFFLEdBQUcsQUFBQyxJQUFJLENBQUMsYUFBYSxLQUFLLElBQUksR0FBSSxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzFFLG1DQUFPLEVBQUUsQ0FBQzt5QkFDYjs7QUFDRCwrQkFBVzs7NkJBQUEsWUFBRztBQUNkLG1DQUFPLElBQUksQ0FBQzt5QkFDZjs7QUFDRyxpQ0FBYTs2QkFBQSxZQUFHO0FBQ2hCLG1DQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7eUJBQzNCOztBQUNELDhCQUFVOytCQUFBLG9CQUFDLENBQUMsRUFBRTtBQUNOLGdDQUFJLElBQUksR0FBRyxJQUFJLENBQUM7QUFDaEIsZ0NBQUksQUFBQyxDQUFDLEtBQUssU0FBUyxJQUFNLENBQUMsS0FBSyxJQUFJLEFBQUMsRUFBRTtBQUNuQyxvQ0FBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUNqQyxvQ0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUNYLHdDQUFJLEdBQUcsQ0FBQyxDQUFDO2lDQUNaOzZCQUNKO0FBQ0QsbUNBQU8sSUFBSSxDQUFDO3lCQUNmOztBQUlELHNCQUFFOzs2QkFIQSxZQUFHO0FBQ0wsbUNBQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQzt5QkFDbkI7NkJBQ0ssVUFBQyxDQUFDLEVBQUU7QUFDTixnQ0FBSSxDQUFDLEdBQUcsR0FBRyxBQUFDLEFBQUMsQ0FBQyxLQUFLLFNBQVMsSUFBTSxDQUFDLEtBQUssSUFBSSxBQUFDLElBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEFBQUMsR0FDbEUsQ0FBQyxHQUFHLElBQUksQ0FBQzt5QkFDaEI7O0FBSUcsdUJBQUc7NkJBSEEsWUFBRztBQUNOLG1DQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7eUJBQ3BCOzZCQUNNLFVBQUMsQ0FBQyxFQUFFO0FBQ1AsZ0NBQUksQ0FBQyxJQUFJLEdBQUcsQUFBQyxBQUFDLENBQUMsS0FBSyxTQUFTLElBQU0sQ0FBQyxLQUFLLElBQUksQUFBQyxJQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxBQUFDLEdBQzlFLENBQUMsR0FBRyxJQUFJLENBQUM7eUJBQ2hCOztBQUNHLHdCQUFJOzZCQUFBLFlBQUc7QUFDUCxtQ0FBTyxJQUFJLENBQUM7eUJBQ2Y7O0FBSUcsK0JBQVc7NkJBSEEsWUFBRztBQUNkLG1DQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7eUJBQzVCOzZCQUNjLFVBQUMsQ0FBQyxFQUFFO0FBQ2YsZ0NBQUksQ0FBQyxZQUFZLEdBQUcsQUFBQyxDQUFDLEtBQUssU0FBUyxHQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7eUJBQ3BEOztBQUNHLG1DQUFlOzZCQUFBLFlBQUc7QUFDbEIsbUNBQU8sSUFBSSxDQUFDO3lCQUNmOztBQUNHLGdDQUFZOzZCQUFBLFlBQUc7QUFDZixtQ0FBTyxBQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFNLElBQUksQ0FBQyxlQUFlLEtBQUssSUFBSSxBQUFDLENBQUM7eUJBQ2xFOztBQUNELGlDQUFhOytCQUFBLHVCQUFDLElBQUksRUFBRTtBQUNoQixnQ0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3RCLGdDQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDOUIsZ0NBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQzt5QkFDdkM7O0FBQ0QsZ0NBQVk7K0JBQUEsc0JBQUMsSUFBSSxFQUFFO0FBQ2YsZ0NBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekIsZ0NBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUNuQixnQ0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQ3JCLGdDQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7eUJBQ3ZDOztBQUNELDRCQUFROytCQUFBLG9CQUFHO0FBQ0gsZ0NBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNkLGdDQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3hCLG1DQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBQy9COztBQUNMLGtDQUFjOzsrQkFBQSx3QkFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ2xCLGdDQUFJLEFBQUMsSUFBSSxLQUFLLFNBQVMsSUFBTSxJQUFJLEtBQUssSUFBSSxBQUFDLElBQUssR0FBRyxLQUFLLFNBQVMsQUFBQyxJQUM3RCxHQUFHLEtBQUssSUFBSSxBQUFDLEVBQUU7QUFDaEIsb0NBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUM5QixvQ0FBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUNkLHdDQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3BCLHlDQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFO0FBQ3hCLDRDQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEIsNENBQUksQUFBQyxDQUFDLEtBQUssU0FBUyxJQUFNLENBQUMsS0FBSyxJQUFJLEFBQUMsRUFBRTtBQUNuQyxnREFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzdCLGdEQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUU7QUFDVCx1REFBTyxJQUFJLENBQUM7NkNBQ2Y7eUNBQ0o7cUNBQ0o7QUFBQSxpQ0FDSjtBQUFBLDZCQUNKO0FBQ0QsbUNBQU8sS0FBSyxDQUFDO3lCQUNoQjs7QUFDTCw2QkFBUzs7K0JBQUEsbUJBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNiLGdDQUFJLEFBQUMsSUFBSSxLQUFLLFNBQVMsSUFBTSxJQUFJLEtBQUssSUFBSSxBQUFDLElBQUssR0FBRyxLQUFLLFNBQVMsQUFBQyxJQUM3RCxHQUFHLEtBQUssSUFBSSxBQUFDLEVBQUU7QUFDaEIsb0NBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUM5QixvQ0FBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUNkLHdDQUFJLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFDbkIsd0NBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDcEIseUNBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7QUFDeEIsNENBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoQiw0Q0FBSSxBQUFDLENBQUMsS0FBSyxTQUFTLElBQU0sQ0FBQyxLQUFLLElBQUksQUFBQyxFQUFFO0FBQ25DLGdEQUFJLEVBQVUsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDckMsZ0RBQUksRUFBRSxJQUFJLENBQUMsRUFBRTtBQUNULHNEQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ2Qsc0RBQU07NkNBQ1Q7eUNBQ0o7cUNBQ0o7QUFDRCx3Q0FBSSxDQUFDLE1BQU0sRUFBRTtBQUNULDRDQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FDQUNsQjtpQ0FDSjtBQUFBLDZCQUNKO3lCQUNKOztBQUNMLGdDQUFZOzsrQkFBQSxzQkFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ2hCLGdDQUFJLEFBQUMsSUFBSSxLQUFLLFNBQVMsSUFBTSxJQUFJLEtBQUssSUFBSSxBQUFDLElBQUssR0FBRyxLQUFLLFNBQVMsQUFBQyxJQUM3RCxHQUFHLEtBQUssSUFBSSxBQUFDLEVBQUU7QUFDaEIsb0NBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUM5QixvQ0FBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUNkLHdDQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNmLHdDQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3BCLHlDQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFO0FBQ3hCLDRDQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEIsNENBQUksQUFBQyxDQUFDLEtBQUssU0FBUyxJQUFNLENBQUMsS0FBSyxJQUFJLEFBQUMsRUFBRTtBQUNuQyxnREFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzdCLGdEQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUU7QUFDVCxxREFBSyxHQUFHLENBQUMsQ0FBQztBQUNWLHNEQUFNOzZDQUNUO3lDQUNKO3FDQUNKO0FBQ0Qsd0NBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtBQUNaLDRDQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7cUNBQ2hDO2lDQUNKO0FBQUEsNkJBQ0o7eUJBQ0o7O0FBQ0wsNkJBQVM7OytCQUFBLG1CQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUU7QUFDVixnQ0FBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDZCxnQ0FBSSxBQUFDLEVBQUUsS0FBSyxTQUFTLElBQU0sRUFBRSxLQUFLLFNBQVMsQUFBQyxJQUFLLEVBQUUsS0FBSyxJQUFJLEFBQUMsSUFBSyxFQUFFLEtBQUssSUFBSSxBQUFDLEVBQUU7QUFDNUUsb0NBQUksQUFBQyxFQUFFLENBQUMsRUFBRSxLQUFLLFNBQVMsSUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLElBQUksQUFBQyxFQUFFO0FBQzNDLHdDQUFJLEFBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxTQUFTLElBQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxJQUFJLEFBQUMsRUFBRTtBQUMzQyw0Q0FBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUMxQiw0Q0FBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUMxQiw0Q0FBSSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7cUNBQy9CLE1BQU07QUFDSCw0Q0FBSSxHQUFHLENBQUMsQ0FBQztxQ0FDWjtpQ0FDSixNQUFNO0FBQ0gsd0NBQUksR0FBRyxDQUFDLENBQUM7aUNBQ1o7NkJBQ0osTUFBTSxJQUFJLEFBQUMsRUFBRSxLQUFLLFNBQVMsSUFBTSxFQUFFLEtBQUssSUFBSSxBQUFDLEVBQUU7QUFDNUMsb0NBQUksR0FBRyxDQUFDLENBQUM7NkJBQ1o7QUFDRCxtQ0FBTyxJQUFJLENBQUM7eUJBQ2Y7QUFBQTs7Ozt1QkF4TUksUUFBUSIsImZpbGUiOiJkYXRhL2RvbWFpbi9iYXNlaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9