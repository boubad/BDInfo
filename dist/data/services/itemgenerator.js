System.register(["../domain/departement"], function (_export) {
  var Departement, _createClass, _classCallCheck, ItemGenerator;

  return {
    setters: [function (_domainDepartement) {
      Departement = _domainDepartement.Departement;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      //
      ItemGenerator = _export("ItemGenerator", (function () {
        function ItemGenerator() {
          _classCallCheck(this, ItemGenerator);
        }

        _createClass(ItemGenerator, {
          create_item: {
            value: function create_item(oMap) {
              if (oMap === undefined || oMap === null) {
                return null;
              }
              if (oMap.type === undefined || oMap.type === null) {
                return null;
              }
              var t = oMap.type.trim().toLowerCase();
              if (t.length < 1) {
                return null;
              }
              if (t == "departement") {
                return new Departement(oMap);
              }
              /*
              else if (t == 'person') {
              return new Person(oMap);
              } else if (t == 'etudperson') {
              return new EtudiantPerson(oMap);
              } else if (t == 'profperson') {
              return new ProfPerson(oMap);
              } else if (t == 'operperson') {
              return new OperPerson(oMap);
              } else if (t == 'adminperson') {
              return new AdminPerson(oMap);
              } else if (t == 'etud') {
              return new Etudiant(oMap);
              } else if (t == 'enseignant') {
              return new Enseignant(oMap);
              } else if (t == 'unite') {
              return new Unite(oMap);
              } else if (t == 'groupe') {
              return new Groupe(oMap);
              } else if (t == 'matiere') {
              return new Matiere(oMap);
              } else if (t == 'semestre') {
              return new Semestre(oMap);
              } else if (t == 'profaffectation') {
              return new ProfAffectation(oMap);
              } else if (t == 'etudaffectation') {
              return new EtudAffectation(oMap);
              } else if (t == 'groupeevent') {
              return new GroupeEvent(oMap);
              } else if (t == 'etudevent') {
              return new EtudEvent(oMap);
              } else if (t == 'attacheddoc') {
              return new AttachedDoc(oMap);
              } else if (t == 'operator') {
              return new Operator(oMap);
              } else if (t == 'administrator') {
              return new Administrator(oMap);
              }
              */
              return null;
            }
          },
          convert_items: { // create_item

            value: function convert_items(dd) {
              var oResult = [];
              if (dd !== undefined && dd !== null && dd.length > 0) {
                var n = dd.length;
                for (var i = 0; i < n; ++i) {
                  var oMap = dd[i];
                  var _p = this.create_item(oMap);
                  if (_p !== null) {
                    oResult.push(_p);
                  }
                } // i
              } // dd
              if (oResult.length > 1) {
                var p = oResult[0];
                var t = p.sort_func;
                if (t !== undefined && t !== null) {
                  oResult.sort(t);
                }
              }
              return oResult;
            } // convert_items

          }
        });

        return ItemGenerator;
      })());
    }
  };
});
//itemgenerator.js
//
// class ItemFactory
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvc2VydmljZXMvaXRlbWdlbmVyYXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BRVEsV0FBVyxpQ0FFTixhQUFhOzs7O0FBRmxCLGlCQUFXLHNCQUFYLFdBQVc7Ozs7Ozs7Ozs7QUFFTixtQkFBYTtBQUNYLGlCQURGLGFBQWEsR0FDVDtnQ0FESixhQUFhO1NBQ1A7O3FCQUROLGFBQWE7QUFFdEIscUJBQVc7bUJBQUEscUJBQUMsSUFBSSxFQUFFO0FBQ2xCLGtCQUFJLEFBQUMsSUFBSSxLQUFLLFNBQVMsSUFBTSxJQUFJLEtBQUssSUFBSSxBQUFDLEVBQUU7QUFDM0MsdUJBQU8sSUFBSSxDQUFDO2VBQ2I7QUFDRCxrQkFBSSxBQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFNLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxBQUFDLEVBQUU7QUFDckQsdUJBQU8sSUFBSSxDQUFDO2VBQ2I7QUFDRCxrQkFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUN2QyxrQkFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUNoQix1QkFBTyxJQUFJLENBQUM7ZUFDYjtBQUNELGtCQUFJLENBQUMsSUFBSSxhQUFhLEVBQUU7QUFDdEIsdUJBQU8sSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7ZUFDOUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3Q0QscUJBQU8sSUFBSSxDQUFDO2FBQ2I7O0FBQ0QsdUJBQWE7O21CQUFBLHVCQUFDLEVBQUUsRUFBRTtBQUNoQixrQkFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQ2pCLGtCQUFJLEFBQUMsRUFBRSxLQUFLLFNBQVMsSUFBTSxFQUFFLEtBQUssSUFBSSxBQUFDLElBQUssRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEFBQUMsRUFBRTtBQUMxRCxvQkFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztBQUNsQixxQkFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtBQUMxQixzQkFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pCLHNCQUFJLEVBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQy9CLHNCQUFJLEVBQUMsS0FBSyxJQUFJLEVBQUU7QUFDZCwyQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsQ0FBQzttQkFDakI7aUJBQ0Y7QUFBQSxlQUNGO0FBQ0Qsa0JBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUM7QUFDckIsb0JBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuQixvQkFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQztBQUNwQixvQkFBSSxBQUFDLENBQUMsS0FBSyxTQUFTLElBQU0sQ0FBQyxLQUFLLElBQUksQUFBQyxFQUFDO0FBQ3BDLHlCQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNqQjtlQUNGO0FBQ0QscUJBQU8sT0FBTyxDQUFDO2FBQ2hCO0FBQUE7Ozs7ZUE3RVUsYUFBYSIsImZpbGUiOiJkYXRhL3NlcnZpY2VzL2l0ZW1nZW5lcmF0b3IuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==