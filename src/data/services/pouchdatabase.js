//pouchdatabase.js
//
import {
    PouchDB
}
from 'pouchdb';
import {
    ItemGenerator
}
from './itemgenerator';
//
const LOCALDATABASE_NAME = 'geninfo';
//
export class PouchDatabase extends ItemGenerator {
    constructor(databaseUrl) {
            this._db = null;
            this.url = ((databaseUrl !== undefined) && (databaseUrl !== null)) ? databaseUrl : LOCALDATABASE_NAME;
            var ss = this.name.toLowerCase();
            this.isLocal = (ss.indexOf('http') < 0);
        } // constructor
    open() {
            return new Promise((resolve, reject) => {
                if ((this._db !== undefined) && (this._db !== null)) {
                    resolve(this._db);
                } else {
                    if (this.isLocal) {
                        var xdb = new PouchDB(this.url, {
                            auto_compaction: true
                        }, (err, res) => {
                            if ((err !== undefined) && (err !== null)) {
                                reject(err);
                            } else {
                                if ((res !== undefined) && (res !== null)) {
                                    this._db = res;
                                    resolve(this._db);
                                } else {
                                    reject({
                                        status: 1000,
                                        error: 'PouchDB null reference',
                                        reason: 'Create PouchDB error'
                                    });
                                }
                            }
                        });
                    } else {
                        var xdb = new PouchDB(this.name, (err, res) => {
                            if ((err !== undefined) && (err !== null)) {
                                reject(err);
                            } else {
                                if ((res !== undefined) && (res !== null)) {
                                    this._db = res;
                                    resolve(this._db);
                                } else {
                                    reject({
                                        status: 1000,
                                        error: 'PouchDB null reference',
                                        reason: 'Create PouchDB error'
                                    });
                                }
                            }
                        });
                    }
                }
            });
        } // open
    isConnected() {
            return this.open().then((db) => {
                return db.info();
            }).then((r) => {
                return ((r !== undefined) && (r !== null));
            });
        } // isConnected 
    maintains_doc(ddoc) {
            return this.open((db) => {
                let id = ddoc._id;
                return db.get(id);
            }).then((r) => {
                ddoc._rev = r._rev;
                return db.put(ddoc);
            }, (ex) => {
                if (ex.status == 404) {
                    return db.put(ddoc);
                } else {
                    throw ex;
                }
            });
        } // maintains_doc
    maintains_one_item(item) {
            let oMap = {};
            item.to_insert_map(oMap);
            if (item.id === null) {
                oMap._id = item.create_id();
            }
            return this.maintains_doc(oMap).then((r) => {
                item.rev = r._rev;
                return item;
            });
        } // maintains_one_item
    maintains_items(items) {
            let oMaps = [];
            for (let item of items) {
                var oMap = {};
                item.to_insert_map(oMap);
                let id = item.id;
                if (id === null) {
                    id = item.create_id();
                }
                oMap._id = id;
                oMaps.put(oMap);
            } // item
            return this.open().then((db) => {
                return db.bulkDocs({
                    docs: oMap
                });
            });
        } // maintains_items
    remove_one_item(item) {
            return this.open().then((db) => {
                return db.remove({
                    _id: item.id,
                    _rev: item.rev
                });
            });
        } // remove_one_item
    remove_items(items) {
            let oMaps = [];
            for (let item of items) {
                var oMap = {
                    _id: item.id,
                    _rev: item.rev,
                    _deleted: true
                };
                oMaps.put(oMap);
            } // item
            return this.open().then((db) => {
                return db.bulkDocs({
                    docs: oMap
                });
            });
        } // remove_items 
    get_attachment(docId, attachmentId) {
            return this.open().then((db) => {
                return db.get_attachment(docId, attachmentId);
            });
        } // get_attachment
    maintains_attachment(docId, docRev, attachmentId, attachment, mimetype) {
            return this.open().then((db) => {
                return db.putAttachment(docId, attachmentId, docRev, attachment, mimetype);
            });
        } // maintains_attachment
    remove_attachment(docId, docRev, attachmentId) {
            return this.open().then((db) => {
                return db.removeAttachment(docId, attachmentId, docRev, attachment, mimetype);
            });
        } // maintains_attachment
    get_item_by_id(id) {
            return this.open().then((db) => {
                db.get(id, {
                    attachments: true
                }).then((r) => {
                    return this.create_item(r);
                }, (err) => {
                    if (err.status == 404) {
                        return null;
                    } else {
                        throw err;
                    }
                });
            });
        } // get_item_by_id
    get_person_by_username(username) {
            let id = 'PER-' + username;
            return this.get_item_vy_id(id);
        } // get_person_by_username;
    query_items(indexName, startKey, endKey,
            skip, limit, descending, bIncludeEnd, bDoc, bAttach) {
            let options = {};
            var bGetData: boolean = false;
            if ((startKey !== undefined) && (startKey !== null)) {
                options.startkey = startKey;
            }
            if ((endKey != undefined) && (endKey !== null)) {
                options.endkey = endKey;
            }
            if ((bIncludeEnd !== undefined) && (bIncludeEnd !== null)) {
                options.inclusive_end = bIncludeEnd;
            }
            if ((skip !== undefined) && (skip !== null) && (skip > 0)) {
                options.skip = skip;
            }
            if ((limit !== undefined) && (limit !== null) &&
                (limit > 0)) {
                options.limit = limit;
            }
            if ((descending !== undefined) && (descending !== null)) {
                options.descending = descending;
            }
            if ((bDoc !== undefined) && (bDoc !== null)) {
                options.include_docs = bDoc;
                bGetData = true;
            }
            if ((bAttach !== undefined) && (bAttach !== null)) {
                options.attachments = bAttach;
            }
            return this.open().then((db) => {
                return db.query(indexName, options).then((rr) => {
                    var oRet = [];
                    var oMaps = [];
                    if ((rr !== undefined) && (rr !== null)) {
                        var data = rr.rows;
                        if ((data !== undefined) && (data !== null)) {
                            var n = data.length;
                            for (var i = 0; i < n; ++i) {
                                var r = data[i];
                                if ((r.value !== undefined) && (r.value !== null)) {
                                    if (r.error || r.deleted) {
                                        continue;
                                    }
                                }
                                if (!bGetData) {
                                    oRet.push(r);
                                } else {
                                    var oMap = r.doc;
                                    if ((oMap !== undefined) && (oMap !== null)) {
                                        oMaps.push(oMap);
                                    } // oMap
                                }
                            } // i
                        } // data
                        if (bGetData) {
                            oRet = this.convert_items(oMaps);
                        }
                    } // rr
                    return oRet;
                });
            });
        } //query_items
} // class PouchDatabase