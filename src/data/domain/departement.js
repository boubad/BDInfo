//departement.js
import {SigleNameItem} from './siglenameitem';
//
export class Departement extends SigleNameItem  {
  //
  constructor(oMap) {
    super(oMap);
  } // constructor
  get type() {
    return 'departement';
  }
  get collection_name() {
    return 'departements';
  }
  get base_prefix()  {
    return 'DEP';
  }
  get index_name() {
    return this.collection_name + '/by_sigle';
  }
} // class Departement

