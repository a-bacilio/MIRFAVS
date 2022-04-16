import { createFavType } from './../../favs/entity/favType.d';
import { createListType } from "../../lists/entity/listType";

export const favListValidator = (favlist:createListType) => {
    let valid = true;
    if(!favlist.name){valid = false};
    if(favlist.favs){
        if(favlist.favs.length>0){
            favlist.favs.forEach((fav:createFavType)=>{
                if(!fav.title){valid = false}
                if(!fav.description){valid = false}
                if(!fav.link){valid = false}
            })
        }
    }
    return valid;
}