//itemgenerator.js
//
import {Departement} from '../domain/departement';
//
export class ItemGenerator {
    constructor(){}
    create_item(oMap) {
    if ((oMap === undefined) || (oMap === null)) {
      return null;
    }
    if ((oMap.type === undefined) || (oMap.type === null)) {
      return null;
    }
    let t = oMap.type.trim().toLowerCase();
    if (t.length < 1) {
      return null;
    }
    if (t == 'departement') {
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
  }// create_item
  convert_items(dd) {
    let oResult = [];
    if ((dd !== undefined) && (dd !== null) && (dd.length > 0)) {
      let n = dd.length;
      for (let i = 0; i < n; ++i) {
        let oMap = dd[i];
        let p = this.create_item(oMap);
        if (p !== null) {
          oResult.push(p);
        }
      }// i
    }// dd
    if (oResult.length > 1){
      var p = oResult[0];
      var t = p.sort_func;
      if ((t !== undefined) && (t !== null)){
        oResult.sort(t);
      }
    }
    return oResult;
  }// convert_items
}// class ItemFactory