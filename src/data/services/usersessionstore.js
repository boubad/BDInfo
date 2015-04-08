//usersessionstore.js
//
import {
    ItemGenerator
}
from './itemgenerator';
//
export class UserSessionStore extends ItemGenerator {
    constructor() {
        super();
    }
    get_value(key) {
            let sdata = window.sessionStorage.getItem(key.toString());
            let oMap = (sdata !== null) ? JSON.parse(sdata) : null;
            return oMap;
        } // get_value
    get_item(id) {
            if ((id !== undefined) && (id !== null)) {
                let oMap = this.get_value(id);
                if (oMap !== null) {
                    return this.create_item(oMap);
                }
            }
            return null;
        } // get_item
    store_value(key, value) {
            if ((key !== undefined) && (key !== null)) {
                if ((value !== undefined) && (value !== null)) {
                    window.sessionStorage.setItem(key, value);
                } else if (window.sessionStorage.getItem(key) !== null) {
                    window.sessionStorage.removeItem(key);
                }

                return true;
            }
            return false;
        } // store_value
    store_item(item) {
            if ((item !== undefined) && (item !== null) && (item.id !== undefined) &&
                (item.id !== null)) {
                let key = item.id.toString();
                let value = {};
                item.to_fetch_map(value);
                let sdata = JSON.stringify(value);
                return this.store_value(key, sdata);
            }
            return false;
        } // store_item
    remove_value(key) {
            if ((key !== undefined) && (key !== null)) {
                var sid = key.toString();
                if (window.sessionStorage.getItem(sid) !== null) {
                    window.sessionStorage.removeItem(sid);
                    return true;
                }
            }
            return false;
        } // remove_value
} // class UserSessionStore