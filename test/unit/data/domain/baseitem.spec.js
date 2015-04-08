//baseitem.spec.js
//
import {BaseItem} from '../../../../src/data/domain/baseitem';
//
describe('BaseItem tests',()=>{
    //
    let item;
    beforeEach(()=>{
        item = new BaseItem({
            _id: 'testid',
            _rev: 'testrev',
            _attachments:{
                'image.jpg':{
                    content_type: 'image/jpeg',
                    digest: 'xxxx',
                    stub: false,
                    data: 'xxxxx',
                    length: 323,
                    revpos: 6
                }
            },
            avatarid: 'testavatarid',
            description: 'testdescription'
        });
    });
    //
    it(' constructor tests',()=>{
        expect(item.id).toEqual('testid');
        expect(item.rev).toEqual('testrev');
        expect(item.attachmants).not.toBeNull();
        expect(item.collection_name).toBeNull();
        expect(item.type).toBeNull();
        expect(item.index_name).toBeNull();
        expect(item.base_prefix).toBeNull();
        expect(item.search_prefix).toBeNull();
        expect(item.description).toEqual('testdescription');
        let id = item.create_id();
        console.log(id);
        expect(id).not.toBeNull();
    });
});