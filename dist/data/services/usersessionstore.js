System.register(["./itemgenerator"], function (_export) {
    var ItemGenerator, _createClass, _get, _inherits, _classCallCheck, UserSessionStore;

    return {
        setters: [function (_itemgenerator) {
            ItemGenerator = _itemgenerator.ItemGenerator;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

            _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            //
            UserSessionStore = _export("UserSessionStore", (function (_ItemGenerator) {
                function UserSessionStore() {
                    _classCallCheck(this, UserSessionStore);

                    _get(Object.getPrototypeOf(UserSessionStore.prototype), "constructor", this).call(this);
                }

                _inherits(UserSessionStore, _ItemGenerator);

                _createClass(UserSessionStore, {
                    get_value: {
                        value: function get_value(key) {
                            var sdata = window.sessionStorage.getItem(key.toString());
                            var oMap = sdata !== null ? JSON.parse(sdata) : null;
                            return oMap;
                        }
                    },
                    get_item: { // get_value

                        value: function get_item(id) {
                            if (id !== undefined && id !== null) {
                                var oMap = this.get_value(id);
                                if (oMap !== null) {
                                    return this.create_item(oMap);
                                }
                            }
                            return null;
                        }
                    },
                    store_value: { // get_item

                        value: function store_value(key, value) {
                            if (key !== undefined && key !== null) {
                                if (value !== undefined && value !== null) {
                                    window.sessionStorage.setItem(key, value);
                                } else if (window.sessionStorage.getItem(key) !== null) {
                                    window.sessionStorage.removeItem(key);
                                }

                                return true;
                            }
                            return false;
                        }
                    },
                    store_item: { // store_value

                        value: function store_item(item) {
                            if (item !== undefined && item !== null && item.id !== undefined && item.id !== null) {
                                var key = item.id.toString();
                                var value = {};
                                item.to_fetch_map(value);
                                var sdata = JSON.stringify(value);
                                return this.store_value(key, sdata);
                            }
                            return false;
                        }
                    },
                    remove_value: { // store_item

                        value: function remove_value(key) {
                            if (key !== undefined && key !== null) {
                                var sid = key.toString();
                                if (window.sessionStorage.getItem(sid) !== null) {
                                    window.sessionStorage.removeItem(sid);
                                    return true;
                                }
                            }
                            return false;
                        } // remove_value

                    }
                });

                return UserSessionStore;
            })(ItemGenerator));
        }
    };
});
//usersessionstore.js
//
// class UserSessionStore
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvc2VydmljZXMvdXNlcnNlc3Npb25zdG9yZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBR0ksYUFBYSxrREFJSixnQkFBZ0I7Ozs7QUFKekIseUJBQWEsa0JBQWIsYUFBYTs7Ozs7Ozs7Ozs7Ozs7QUFJSiw0QkFBZ0I7QUFDZCx5QkFERixnQkFBZ0IsR0FDWDswQ0FETCxnQkFBZ0I7O0FBRXJCLCtDQUZLLGdCQUFnQiw2Q0FFYjtpQkFDWDs7MEJBSFEsZ0JBQWdCOzs2QkFBaEIsZ0JBQWdCO0FBSXpCLDZCQUFTOytCQUFBLG1CQUFDLEdBQUcsRUFBRTtBQUNQLGdDQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUMxRCxnQ0FBSSxJQUFJLEdBQUcsQUFBQyxLQUFLLEtBQUssSUFBSSxHQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ3ZELG1DQUFPLElBQUksQ0FBQzt5QkFDZjs7QUFDTCw0QkFBUTs7K0JBQUEsa0JBQUMsRUFBRSxFQUFFO0FBQ0wsZ0NBQUksQUFBQyxFQUFFLEtBQUssU0FBUyxJQUFNLEVBQUUsS0FBSyxJQUFJLEFBQUMsRUFBRTtBQUNyQyxvQ0FBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM5QixvQ0FBSSxJQUFJLEtBQUssSUFBSSxFQUFFO0FBQ2YsMkNBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQ0FDakM7NkJBQ0o7QUFDRCxtQ0FBTyxJQUFJLENBQUM7eUJBQ2Y7O0FBQ0wsK0JBQVc7OytCQUFBLHFCQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDaEIsZ0NBQUksQUFBQyxHQUFHLEtBQUssU0FBUyxJQUFNLEdBQUcsS0FBSyxJQUFJLEFBQUMsRUFBRTtBQUN2QyxvQ0FBSSxBQUFDLEtBQUssS0FBSyxTQUFTLElBQU0sS0FBSyxLQUFLLElBQUksQUFBQyxFQUFFO0FBQzNDLDBDQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7aUNBQzdDLE1BQU0sSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLEVBQUU7QUFDcEQsMENBQU0sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lDQUN6Qzs7QUFFRCx1Q0FBTyxJQUFJLENBQUM7NkJBQ2Y7QUFDRCxtQ0FBTyxLQUFLLENBQUM7eUJBQ2hCOztBQUNMLDhCQUFVOzsrQkFBQSxvQkFBQyxJQUFJLEVBQUU7QUFDVCxnQ0FBSSxBQUFDLElBQUksS0FBSyxTQUFTLElBQU0sSUFBSSxLQUFLLElBQUksQUFBQyxJQUFLLElBQUksQ0FBQyxFQUFFLEtBQUssU0FBUyxBQUFDLElBQ2pFLElBQUksQ0FBQyxFQUFFLEtBQUssSUFBSSxBQUFDLEVBQUU7QUFDcEIsb0NBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDN0Isb0NBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNmLG9DQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3pCLG9DQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2xDLHVDQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDOzZCQUN2QztBQUNELG1DQUFPLEtBQUssQ0FBQzt5QkFDaEI7O0FBQ0wsZ0NBQVk7OytCQUFBLHNCQUFDLEdBQUcsRUFBRTtBQUNWLGdDQUFJLEFBQUMsR0FBRyxLQUFLLFNBQVMsSUFBTSxHQUFHLEtBQUssSUFBSSxBQUFDLEVBQUU7QUFDdkMsb0NBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUN6QixvQ0FBSSxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLEVBQUU7QUFDN0MsMENBQU0sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3RDLDJDQUFPLElBQUksQ0FBQztpQ0FDZjs2QkFDSjtBQUNELG1DQUFPLEtBQUssQ0FBQzt5QkFDaEI7QUFBQTs7Ozt1QkFsREksZ0JBQWdCO2VBQVMsYUFBYSIsImZpbGUiOiJkYXRhL3NlcnZpY2VzL3VzZXJzZXNzaW9uc3RvcmUuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==