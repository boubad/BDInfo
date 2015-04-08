System.register(["./siglenameitem"], function (_export) {
  var SigleNameItem, _createClass, _get, _inherits, _classCallCheck, Departement;

  return {
    setters: [function (_siglenameitem) {
      SigleNameItem = _siglenameitem.SigleNameItem;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

      _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      //
      Departement = _export("Departement", (function (_SigleNameItem) {
        //

        function Departement(oMap) {
          _classCallCheck(this, Departement);

          _get(Object.getPrototypeOf(Departement.prototype), "constructor", this).call(this, oMap);
        }

        _inherits(Departement, _SigleNameItem);

        _createClass(Departement, {
          type: { // constructor

            get: function () {
              return "departement";
            }
          },
          collection_name: {
            get: function () {
              return "departements";
            }
          },
          base_prefix: {
            get: function () {
              return "DEP";
            }
          },
          index_name: {
            get: function () {
              return this.collection_name + "/by_sigle";
            }
          }
        });

        return Departement;
      })(SigleNameItem));
    }
  };
});
//departement.js
// class Departement
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL2RlcGFydGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDUSxhQUFhLGtEQUVSLFdBQVc7Ozs7QUFGaEIsbUJBQWEsa0JBQWIsYUFBYTs7Ozs7Ozs7Ozs7Ozs7QUFFUixpQkFBVzs7O0FBRVgsaUJBRkEsV0FBVyxDQUVWLElBQUksRUFBRTtnQ0FGUCxXQUFXOztBQUdwQixxQ0FIUyxXQUFXLDZDQUdkLElBQUksRUFBRTtTQUNiOztrQkFKVSxXQUFXOztxQkFBWCxXQUFXO0FBS2xCLGNBQUk7O2lCQUFBLFlBQUc7QUFDVCxxQkFBTyxhQUFhLENBQUM7YUFDdEI7O0FBQ0cseUJBQWU7aUJBQUEsWUFBRztBQUNwQixxQkFBTyxjQUFjLENBQUM7YUFDdkI7O0FBQ0cscUJBQVc7aUJBQUEsWUFBSTtBQUNqQixxQkFBTyxLQUFLLENBQUM7YUFDZDs7QUFDRyxvQkFBVTtpQkFBQSxZQUFHO0FBQ2YscUJBQU8sSUFBSSxDQUFDLGVBQWUsR0FBRyxXQUFXLENBQUM7YUFDM0M7Ozs7ZUFoQlUsV0FBVztTQUFTLGFBQWEiLCJmaWxlIjoiZGF0YS9kb21haW4vZGVwYXJ0ZW1lbnQuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==