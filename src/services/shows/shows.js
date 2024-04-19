import crudOperation from "../../utils/crud";
import Shows from './shows.json';

let showsDetail = Shows;



export function getShowFunction(){
    return new Promise((resolve)=>{
        showsDetail = crudOperation.get(showsDetail);
        resolve(showsDetail);
    })
}

// export default function Main(){
//     getFunction().then((showItems)=>{console.log(showItems)});
// }