//baseitem.js
//
export class BaseItem {
    //
    constructor(oMap) {
            this._id = null;
            this._rev = null;
            this._attachments = null;
            this._avatarid = null;
            this._desc = null;
            if ((oMap !== undefined) && (oMap !== null)) {
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
                if (oMap.description !== undefined){
                    this._desc = oMap.description;
                }
            }
        } // constructor
    get description() {
        return this._desc;
    }
    set description(s){
        this._desc = (s !== undefined) ? s : null;
    }
    get avatarid() {
        return this._avatarid;
    }
    set avatarid(s) {
        this._avatarid = ((s !== undefined) && (s !== null) &&
            (s.trim().length > 0)) ? s : null;
    }
    get index_name() {
        if (this.collection_name !== null){
        return this.collection_name + '/by_id';
        } else {
            return null;
        }
    }
    create_id() {
            let n = Math.floor(Math.random() * 10000.0);
            let ns = '' + n;
            while (ns.length < 4) {
                ns = '0' + ns;
            }
            let s = ((new Date()).toISOString()).substr(0, 10) + '-' + ns;
            let ss = (this.search_prefix !== null) ? this.search_prefix + '-' + s : s;
            return ss;
        } // create_id
    get base_prefix() {
        return null;
    }
    get search_prefix() {
        return this.base_prefix;
    }
    check_date(d) {
            let dRet = null;
            if ((d !== undefined) && (d !== null)) {
                let x = Date.parse(d.toString());
                if (!isNan(x)) {
                    dRet = d;
                }
            }
            return dRet;
        } // check_date
    get id() {
        return this._id;
    }
    set id(s) {
        this._id = ((s !== undefined) && (s !== null) && (s.trim().length > 0)) ?
            s : null;
    }
    get rev() {
        return this._rev;
    }
    set rev(s) {
        this._rev = ((s !== undefined) && (s !== null) && (s.toString().trim().length > 0)) ?
            s : null;
    }
    get type() {
        return null;
    }
    get attachments() {
        return this._attachments;
    }
    set attachments(s) {
        this._attachments = (s !== undefined) ? s : null;
    }
    get collection_name() {
        return null;
    }
    get is_storeable() {
        return (this.type !== null) && (this.collection_name !== null);
    }
    to_insert_map(oMap) {
        oMap.type = this.type;
        oMap.avatarid = this.avatarid;
        oMap.description = this.description;
    }
    to_fetch_map(oMap) {
        this.to_insert_map(oMap);
        oMap._id = this.id;
        oMap._rev = this.rev;
        oMap.attachments = this.attachments;
    }
    toString() {
            var oMap = {};
            this.to_fetch_map(oMap);
            return JSON.stringify(oMap);
        } // toString
    array_contains(cont, val) {
            if ((cont !== undefined) && (cont !== null) && (val !== undefined) &&
                (val !== null)) {
                let s = val.toString().trim();
                if (s.length > 0) {
                    let n = cont.length;
                    for (let i = 0; i < n; ++i) {
                        let x = cont[i];
                        if ((x !== undefined) && (x !== null)) {
                            let ss = x.toString().trim();
                            if (ss == s) {
                                return true;
                            }
                        }
                    } // i
                } // s
            }
            return false;
        } // _array_contains
    array_add(cont, val) {
            if ((cont !== undefined) && (cont !== null) && (val !== undefined) &&
                (val !== null)) {
                let s = val.toString().trim();
                if (s.length > 0) {
                    let bFound = false;
                    let n = cont.length;
                    for (let i = 0; i < n; ++i) {
                        let x = cont[i];
                        if ((x !== undefined) && (x !== null)) {
                            let ss: string = x.toString().trim();
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
        } // _array_add
    array_remove(cont, val) {
            if ((cont !== undefined) && (cont !== null) && (val !== undefined) &&
                (val !== null)) {
                let s = val.toString().trim();
                if (s.length > 0) {
                    let index = -1;
                    let n = cont.length;
                    for (let i = 0; i < n; ++i) {
                        let x = cont[i];
                        if ((x !== undefined) && (x !== null)) {
                            let ss = x.toString().trim();
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
        } // _array_add
    sort_func(p1, p2) {
            let vRet = -1;
            if ((p1 !== undefined) && (p2 !== undefined) && (p1 !== null) && (p2 !== null)) {
                if ((p1.id !== undefined) && (p1.id !== null)) {
                    if ((p2.id !== undefined) && (p2.id !== null)) {
                        var s1 = p1.id.toString();
                        var s2 = p2.id.toString();
                        vRet = s1.localeCompare(s2);
                    } else {
                        vRet = 1;
                    }
                } else {
                    vRet = 1;
                }
            } else if ((p1 === undefined) || (p1 === null)) {
                vRet = 1;
            }
            return vRet;
        } // sort_func
} // class BaseItem