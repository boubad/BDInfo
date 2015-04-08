//siglenameitem.js
import {BaseItem} from './baseitem';
//
export class SigleNameItem extends BaseItem {
    constructor(oMap?) {
    super(oMap);
    this._sigle = null;
    this._name = null;
    if ((oMap !== undefined) && (oMap !== null)){
      if (oMap.sigle !== undefined) {
        this.sigle = oMap.sigle;
      }
      if (oMap.name !== undefined) {
        this._name = oMap.name;
      }
    } // oMap
  } // constructor
  create_id() {
    return this.search_prefix + '-' + this.sigle.toUpperCase()
  }// create_id
  get sigle() {
    return this._sigle;
  }
  set sigle(s) {
    if ((s != undefined) && (s != null) && (s.trim().length > 0)) {
      this._sigle = s.trim().toLowerCase();
    } else {
      this._sigle = null;
    }
  }
  get name() {
    return this._name;
  }
  set name(s) {
    if ((s !== undefined) && (s !== null) && (s.trim().length > 0)) {
      this._name = s.trim();
    } else {
      this._name = null;
    }
  }
  get has_name() {
    return (this.name !== null);
  }
  get is_storeable() {
    return (this.type != null) && (this.collection_name != null) &&
      (this.sigle !== null);
  }
  to_insert_map(oMap) {
    super.to_insert_map(oMap);
      oMap.sigle = this.sigle;
      oMap.name = this.name;
  } // toInsertMap
  sort_func(p1, p2) {
        var vRet = -1;
        if ((p1 !== undefined) && (p2 !== undefined) && (p1 !== null) && (p2 !== null)) {
            if ((p1.sigle !== undefined) && (p1.sigle !== null)) {
                if ((p2.sigle !== undefined) && (p2.sigle !== null)) {
                    let s1 = p1.sigle;
                    let s2 = p2.sigle;
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
}// class SigleNameItem