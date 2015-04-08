System.register(["./baseitem"], function (_export) {
  var BaseItem, _createClass, _get, _inherits, _classCallCheck, SigleNameItem;

  return {
    setters: [function (_baseitem) {
      BaseItem = _baseitem.BaseItem;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

      _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      //
      SigleNameItem = _export("SigleNameItem", (function (_BaseItem) {
        function SigleNameItem(oMap) {
          _classCallCheck(this, SigleNameItem);

          _get(Object.getPrototypeOf(SigleNameItem.prototype), "constructor", this).call(this, oMap);
          this._sigle = null;
          this._name = null;
          if (oMap !== undefined && oMap !== null) {
            if (oMap.sigle !== undefined) {
              this.sigle = oMap.sigle;
            }
            if (oMap.name !== undefined) {
              this._name = oMap.name;
            }
          } // oMap
        }

        _inherits(SigleNameItem, _BaseItem);

        _createClass(SigleNameItem, {
          create_id: { // constructor

            value: function create_id() {
              return this.search_prefix + "-" + this.sigle.toUpperCase();
            }
          },
          sigle: { // create_id

            get: function () {
              return this._sigle;
            },
            set: function (s) {
              if (s != undefined && s != null && s.trim().length > 0) {
                this._sigle = s.trim().toLowerCase();
              } else {
                this._sigle = null;
              }
            }
          },
          name: {
            get: function () {
              return this._name;
            },
            set: function (s) {
              if (s !== undefined && s !== null && s.trim().length > 0) {
                this._name = s.trim();
              } else {
                this._name = null;
              }
            }
          },
          has_name: {
            get: function () {
              return this.name !== null;
            }
          },
          is_storeable: {
            get: function () {
              return this.type != null && this.collection_name != null && this.sigle !== null;
            }
          },
          to_insert_map: {
            value: function to_insert_map(oMap) {
              _get(Object.getPrototypeOf(SigleNameItem.prototype), "to_insert_map", this).call(this, oMap);
              oMap.sigle = this.sigle;
              oMap.name = this.name;
            }
          },
          sort_func: { // toInsertMap

            value: function sort_func(p1, p2) {
              var vRet = -1;
              if (p1 !== undefined && p2 !== undefined && p1 !== null && p2 !== null) {
                if (p1.sigle !== undefined && p1.sigle !== null) {
                  if (p2.sigle !== undefined && p2.sigle !== null) {
                    var s1 = p1.sigle;
                    var s2 = p2.sigle;
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

        return SigleNameItem;
      })(BaseItem));
    }
  };
});
//siglenameitem.js
// class SigleNameItem
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL3NpZ2xlbmFtZWl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNRLFFBQVEsa0RBRUgsYUFBYTs7OztBQUZsQixjQUFRLGFBQVIsUUFBUTs7Ozs7Ozs7Ozs7Ozs7QUFFSCxtQkFBYTtBQUNYLGlCQURGLGFBQWEsQ0FDVixJQUFLLEVBQUU7Z0NBRFYsYUFBYTs7QUFFdEIscUNBRlMsYUFBYSw2Q0FFaEIsSUFBSSxFQUFFO0FBQ1osY0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDbkIsY0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDbEIsY0FBSSxBQUFDLElBQUksS0FBSyxTQUFTLElBQU0sSUFBSSxLQUFLLElBQUksQUFBQyxFQUFDO0FBQzFDLGdCQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO0FBQzVCLGtCQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDekI7QUFDRCxnQkFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtBQUMzQixrQkFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ3hCO1dBQ0Y7QUFBQSxTQUNGOztrQkFiVSxhQUFhOztxQkFBYixhQUFhO0FBY3hCLG1CQUFTOzttQkFBQSxxQkFBRztBQUNWLHFCQUFPLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUE7YUFDM0Q7O0FBSUcsZUFBSzs7aUJBSEEsWUFBRztBQUNWLHFCQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDcEI7aUJBQ1EsVUFBQyxDQUFDLEVBQUU7QUFDWCxrQkFBSSxBQUFDLENBQUMsSUFBSSxTQUFTLElBQU0sQ0FBQyxJQUFJLElBQUksQUFBQyxJQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxBQUFDLEVBQUU7QUFDNUQsb0JBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO2VBQ3RDLE1BQU07QUFDTCxvQkFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7ZUFDcEI7YUFDRjs7QUFJRyxjQUFJO2lCQUhBLFlBQUc7QUFDVCxxQkFBTyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ25CO2lCQUNPLFVBQUMsQ0FBQyxFQUFFO0FBQ1Ysa0JBQUksQUFBQyxDQUFDLEtBQUssU0FBUyxJQUFNLENBQUMsS0FBSyxJQUFJLEFBQUMsSUFBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQUFBQyxFQUFFO0FBQzlELG9CQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztlQUN2QixNQUFNO0FBQ0wsb0JBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2VBQ25CO2FBQ0Y7O0FBQ0csa0JBQVE7aUJBQUEsWUFBRztBQUNiLHFCQUFRLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFFO2FBQzdCOztBQUNHLHNCQUFZO2lCQUFBLFlBQUc7QUFDakIscUJBQU8sQUFBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksSUFBTSxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQUFBQyxJQUN6RCxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQUFBQyxDQUFDO2FBQ3pCOztBQUNELHVCQUFhO21CQUFBLHVCQUFDLElBQUksRUFBRTtBQUNsQix5Q0E3Q1MsYUFBYSwrQ0E2Q0YsSUFBSSxFQUFFO0FBQ3hCLGtCQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDeEIsa0JBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQzthQUN6Qjs7QUFDRCxtQkFBUzs7bUJBQUEsbUJBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUNaLGtCQUFJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNkLGtCQUFJLEFBQUMsRUFBRSxLQUFLLFNBQVMsSUFBTSxFQUFFLEtBQUssU0FBUyxBQUFDLElBQUssRUFBRSxLQUFLLElBQUksQUFBQyxJQUFLLEVBQUUsS0FBSyxJQUFJLEFBQUMsRUFBRTtBQUM1RSxvQkFBSSxBQUFDLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFNLEVBQUUsQ0FBQyxLQUFLLEtBQUssSUFBSSxBQUFDLEVBQUU7QUFDakQsc0JBQUksQUFBQyxFQUFFLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBTSxFQUFFLENBQUMsS0FBSyxLQUFLLElBQUksQUFBQyxFQUFFO0FBQ2pELHdCQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO0FBQ2xCLHdCQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO0FBQ2xCLHdCQUFJLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQzttQkFDL0IsTUFBTTtBQUNILHdCQUFJLEdBQUcsQ0FBQyxDQUFDO21CQUNaO2lCQUNKLE1BQU07QUFDSCxzQkFBSSxHQUFHLENBQUMsQ0FBQztpQkFDWjtlQUNKLE1BQU0sSUFBSSxBQUFDLEVBQUUsS0FBSyxTQUFTLElBQU0sRUFBRSxLQUFLLElBQUksQUFBQyxFQUFFO0FBQzVDLG9CQUFJLEdBQUcsQ0FBQyxDQUFDO2VBQ1o7QUFDRCxxQkFBTyxJQUFJLENBQUM7YUFDZjtBQUFBOzs7O2VBbkVRLGFBQWE7U0FBUyxRQUFRIiwiZmlsZSI6ImRhdGEvZG9tYWluL3NpZ2xlbmFtZWl0ZW0uanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==