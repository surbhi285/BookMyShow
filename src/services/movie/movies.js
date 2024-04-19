import CrudOperation from '../../utils/CrudOperation';
import movies from '../../services/movie/movies.json'
 let moviesDetail = movies;

export default function Main(){
let moviesDetail = movies;
console.log(moviesDetail)
}
export function getFunctions(){
    return new Promise((resolve)=>{
         moviesDetail=CrudOperation.get(moviesDetail);
        resolve(moviesDetail[1])
    })
}
export function getFunction(){
    return new Promise((resolve)=>{
        moviesDetail=CrudOperation.get(moviesDetail);
        resolve(moviesDetail)
    })
}

export function addFunction(newMovie){   
    return new Promise((resolve) =>{
    moviesDetail = CrudOperation.add(moviesDetail, newMovie);
    resolve(moviesDetail);
    })
}

export function removeFunction(movieId, pk){
    return new Promise((resolve)=>{
    moviesDetail = CrudOperation.delete(moviesDetail, movieId, pk)
    resolve(moviesDetail);
    })
}

export function updateFunction(updatedMovie, pk){
    return new Promise((resolve)=>{
    moviesDetail = CrudOperation.update(moviesDetail, updatedMovie, pk);
    resolve(moviesDetail);
    })
}