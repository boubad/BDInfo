System.register(["pouchdb", "./itemgenerator"], function (_export) {
    var PouchDB, ItemGenerator, _createClass, _inherits, _classCallCheck, LOCALDATABASE_NAME, PouchDatabase;

    return {
        setters: [function (_pouchdb) {
            PouchDB = _pouchdb.PouchDB;
        }, function (_itemgenerator) {
            ItemGenerator = _itemgenerator.ItemGenerator;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            //
            LOCALDATABASE_NAME = "geninfo";

            //
            PouchDatabase = _export("PouchDatabase", (function (_ItemGenerator) {
                function PouchDatabase(databaseUrl) {
                    _classCallCheck(this, PouchDatabase);

                    this._db = null;
                    this.url = databaseUrl !== undefined && databaseUrl !== null ? databaseUrl : LOCALDATABASE_NAME;
                    var ss = this.name.toLowerCase();
                    this.isLocal = ss.indexOf("http") < 0;
                }

                _inherits(PouchDatabase, _ItemGenerator);

                _createClass(PouchDatabase, {
                    open: { // constructor

                        value: function open() {
                            var _this = this;

                            return new Promise(function (resolve, reject) {
                                if (_this._db !== undefined && _this._db !== null) {
                                    resolve(_this._db);
                                } else {
                                    if (_this.isLocal) {
                                        var xdb = new PouchDB(_this.url, {
                                            auto_compaction: true
                                        }, function (err, res) {
                                            if (err !== undefined && err !== null) {
                                                reject(err);
                                            } else {
                                                if (res !== undefined && res !== null) {
                                                    _this._db = res;
                                                    resolve(_this._db);
                                                } else {
                                                    reject({
                                                        status: 1000,
                                                        error: "PouchDB null reference",
                                                        reason: "Create PouchDB error"
                                                    });
                                                }
                                            }
                                        });
                                    } else {
                                        var xdb = new PouchDB(_this.name, function (err, res) {
                                            if (err !== undefined && err !== null) {
                                                reject(err);
                                            } else {
                                                if (res !== undefined && res !== null) {
                                                    _this._db = res;
                                                    resolve(_this._db);
                                                } else {
                                                    reject({
                                                        status: 1000,
                                                        error: "PouchDB null reference",
                                                        reason: "Create PouchDB error"
                                                    });
                                                }
                                            }
                                        });
                                    }
                                }
                            });
                        }
                    },
                    isConnected: { // open

                        value: function isConnected() {
                            return this.open().then(function (db) {
                                return db.info();
                            }).then(function (r) {
                                return r !== undefined && r !== null;
                            });
                        }
                    },
                    maintains_doc: { // isConnected

                        value: function maintains_doc(ddoc) {
                            return this.open(function (db) {
                                var id = ddoc._id;
                                return db.get(id);
                            }).then(function (r) {
                                ddoc._rev = r._rev;
                                return db.put(ddoc);
                            }, function (ex) {
                                if (ex.status == 404) {
                                    return db.put(ddoc);
                                } else {
                                    throw ex;
                                }
                            });
                        }
                    },
                    maintains_one_item: { // maintains_doc

                        value: function maintains_one_item(item) {
                            var oMap = {};
                            item.to_insert_map(oMap);
                            if (item.id === null) {
                                oMap._id = item.create_id();
                            }
                            return this.maintains_doc(oMap).then(function (r) {
                                item.rev = r._rev;
                                return item;
                            });
                        }
                    },
                    maintains_items: { // maintains_one_item

                        value: function maintains_items(items) {
                            var oMaps = [];
                            var _iteratorNormalCompletion = true;
                            var _didIteratorError = false;
                            var _iteratorError = undefined;

                            try {
                                for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                    var item = _step.value;

                                    var oMap = {};
                                    item.to_insert_map(oMap);
                                    var id = item.id;
                                    if (id === null) {
                                        id = item.create_id();
                                    }
                                    oMap._id = id;
                                    oMaps.put(oMap);
                                }
                            } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion && _iterator["return"]) {
                                        _iterator["return"]();
                                    }
                                } finally {
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                            }

                            // item
                            return this.open().then(function (db) {
                                return db.bulkDocs({
                                    docs: oMap
                                });
                            });
                        }
                    },
                    remove_one_item: { // maintains_items

                        value: function remove_one_item(item) {
                            return this.open().then(function (db) {
                                return db.remove({
                                    _id: item.id,
                                    _rev: item.rev
                                });
                            });
                        }
                    },
                    remove_items: { // remove_one_item

                        value: function remove_items(items) {
                            var oMaps = [];
                            var _iteratorNormalCompletion = true;
                            var _didIteratorError = false;
                            var _iteratorError = undefined;

                            try {
                                for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                    var item = _step.value;

                                    var oMap = {
                                        _id: item.id,
                                        _rev: item.rev,
                                        _deleted: true
                                    };
                                    oMaps.put(oMap);
                                }
                            } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion && _iterator["return"]) {
                                        _iterator["return"]();
                                    }
                                } finally {
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                            }

                            // item
                            return this.open().then(function (db) {
                                return db.bulkDocs({
                                    docs: oMap
                                });
                            });
                        }
                    },
                    get_attachment: { // remove_items

                        value: function get_attachment(docId, attachmentId) {
                            return this.open().then(function (db) {
                                return db.get_attachment(docId, attachmentId);
                            });
                        }
                    },
                    maintains_attachment: { // get_attachment

                        value: function maintains_attachment(docId, docRev, attachmentId, attachment, mimetype) {
                            return this.open().then(function (db) {
                                return db.putAttachment(docId, attachmentId, docRev, attachment, mimetype);
                            });
                        }
                    },
                    remove_attachment: { // maintains_attachment

                        value: function remove_attachment(docId, docRev, attachmentId) {
                            return this.open().then(function (db) {
                                return db.removeAttachment(docId, attachmentId, docRev, attachment, mimetype);
                            });
                        }
                    },
                    get_item_by_id: { // maintains_attachment

                        value: function get_item_by_id(id) {
                            var _this = this;

                            return this.open().then(function (db) {
                                db.get(id, {
                                    attachments: true
                                }).then(function (r) {
                                    return _this.create_item(r);
                                }, function (err) {
                                    if (err.status == 404) {
                                        return null;
                                    } else {
                                        throw err;
                                    }
                                });
                            });
                        }
                    },
                    get_person_by_username: { // get_item_by_id

                        value: function get_person_by_username(username) {
                            var id = "PER-" + username;
                            return this.get_item_vy_id(id);
                        }
                    },
                    query_items: { // get_person_by_username;

                        value: function query_items(indexName, startKey, endKey, skip, limit, descending, bIncludeEnd, bDoc, bAttach) {
                            var _this = this;

                            var options = {};
                            var bGetData = false;
                            if (startKey !== undefined && startKey !== null) {
                                options.startkey = startKey;
                            }
                            if (endKey != undefined && endKey !== null) {
                                options.endkey = endKey;
                            }
                            if (bIncludeEnd !== undefined && bIncludeEnd !== null) {
                                options.inclusive_end = bIncludeEnd;
                            }
                            if (skip !== undefined && skip !== null && skip > 0) {
                                options.skip = skip;
                            }
                            if (limit !== undefined && limit !== null && limit > 0) {
                                options.limit = limit;
                            }
                            if (descending !== undefined && descending !== null) {
                                options.descending = descending;
                            }
                            if (bDoc !== undefined && bDoc !== null) {
                                options.include_docs = bDoc;
                                bGetData = true;
                            }
                            if (bAttach !== undefined && bAttach !== null) {
                                options.attachments = bAttach;
                            }
                            return this.open().then(function (db) {
                                return db.query(indexName, options).then(function (rr) {
                                    var oRet = [];
                                    var oMaps = [];
                                    if (rr !== undefined && rr !== null) {
                                        var data = rr.rows;
                                        if (data !== undefined && data !== null) {
                                            var n = data.length;
                                            for (var i = 0; i < n; ++i) {
                                                var r = data[i];
                                                if (r.value !== undefined && r.value !== null) {
                                                    if (r.error || r.deleted) {
                                                        continue;
                                                    }
                                                }
                                                if (!bGetData) {
                                                    oRet.push(r);
                                                } else {
                                                    var oMap = r.doc;
                                                    if (oMap !== undefined && oMap !== null) {
                                                        oMaps.push(oMap);
                                                    } // oMap
                                                }
                                            } // i
                                        } // data
                                        if (bGetData) {
                                            oRet = _this.convert_items(oMaps);
                                        }
                                    } // rr
                                    return oRet;
                                });
                            });
                        } //query_items

                    }
                });

                return PouchDatabase;
            })(ItemGenerator));
        }
    };
});
//pouchdatabase.js
//
// class PouchDatabase
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvc2VydmljZXMvcG91Y2hkYXRhYmFzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBR0ksT0FBTyxFQUlQLGFBQWEsNENBSVgsa0JBQWtCLEVBRVgsYUFBYTs7OztBQVZ0QixtQkFBTyxZQUFQLE9BQU87O0FBSVAseUJBQWEsa0JBQWIsYUFBYTs7Ozs7Ozs7Ozs7O0FBSVgsOEJBQWtCLEdBQUcsU0FBUzs7O0FBRXZCLHlCQUFhO0FBQ1gseUJBREYsYUFBYSxDQUNWLFdBQVcsRUFBRTswQ0FEaEIsYUFBYTs7QUFFZCx3QkFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7QUFDaEIsd0JBQUksQ0FBQyxHQUFHLEdBQUcsQUFBQyxBQUFDLFdBQVcsS0FBSyxTQUFTLElBQU0sV0FBVyxLQUFLLElBQUksQUFBQyxHQUFJLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQztBQUN0Ryx3QkFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNqQyx3QkFBSSxDQUFDLE9BQU8sR0FBSSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQUFBQyxDQUFDO2lCQUMzQzs7MEJBTkksYUFBYTs7NkJBQWIsYUFBYTtBQU90Qix3QkFBSTs7K0JBQUEsZ0JBQUc7OztBQUNDLG1DQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBSztBQUNwQyxvQ0FBSSxBQUFDLE1BQUssR0FBRyxLQUFLLFNBQVMsSUFBTSxNQUFLLEdBQUcsS0FBSyxJQUFJLEFBQUMsRUFBRTtBQUNqRCwyQ0FBTyxDQUFDLE1BQUssR0FBRyxDQUFDLENBQUM7aUNBQ3JCLE1BQU07QUFDSCx3Q0FBSSxNQUFLLE9BQU8sRUFBRTtBQUNkLDRDQUFJLEdBQUcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFLLEdBQUcsRUFBRTtBQUM1QiwyREFBZSxFQUFFLElBQUk7eUNBQ3hCLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRyxF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TyxLQUFLLFNBQVMsSUFBTSxPQUFPLEtBQUssSUFBSSxBQUFDLEVBQUU7QUFDL0MsdUNBQU8sQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDOzZCQUNqQztBQUNELG1DQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxFQUFFLEVBQUs7QUFDNUIsdUNBQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsRUFBRSxFQUFLO0FBQzdDLHdDQUFJLElBQUksR0FBRyxFQUFFLENBQUM7QUFDZCx3Q0FBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2Ysd0NBQUksQUFBQyxFQUFFLEtBQUssU0FBUyxJQUFNLEVBQUUsS0FBSyxJQUFJLEFBQUMsRUFBRTtBQUNyQyw0Q0FBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztBQUNuQiw0Q0FBSSxBQUFDLElBQUksS0FBSyxTQUFTLElBQU0sSUFBSSxLQUFLLElBQUksQUFBQyxFQUFFO0FBQ3pDLGdEQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3BCLGlEQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFO0FBQ3hCLG9EQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEIsb0RBQUksQUFBQyxDQUFDLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBTSxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQUFBQyxFQUFFO0FBQy9DLHdEQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRTtBQUN0QixpRUFBUztxREFDWjtpREFDSjtBQUNELG9EQUFJLENBQUMsUUFBUSxFQUFFO0FBQ1gsd0RBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7aURBQ2hCLE1BQU07QUFDSCx3REFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUNqQix3REFBSSxBQUFDLElBQUksS0FBSyxTQUFTLElBQU0sSUFBSSxLQUFLLElBQUksQUFBQyxFQUFFO0FBQ3pDLDZEQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3FEQUNwQjtBQUFBLGlEQUNKOzZDQUNKO0FBQUEseUNBQ0o7QUFDRCw0Q0FBSSxRQUFRLEVBQUU7QUFDVixnREFBSSxHQUFHLE1BQUssYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO3lDQUNwQztxQ0FDSjtBQUNELDJDQUFPLElBQUksQ0FBQztpQ0FDZixDQUFDLENBQUM7NkJBQ04sQ0FBQyxDQUFDO3lCQUNOO0FBQUE7Ozs7dUJBL05JLGFBQWE7ZUFBUyxhQUFhIiwiZmlsZSI6ImRhdGEvc2VydmljZXMvcG91Y2hkYXRhYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9