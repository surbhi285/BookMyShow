import crudOperation from "../../utils/crud";
import Review from './review.json'

let reviewDetail = Review;
console.log(reviewDetail);

export function getReviewFunction(){
    return new Promise((resolve)=>{
        reviewDetail = crudOperation.get(reviewDetail);
        resolve(reviewDetail);  
    })
}

export function addReviewFunction(review){   
    return new Promise((resolve) =>{
        reviewDetail = crudOperation.add(reviewDetail, review);
        console.log("review",reviewDetail);
        resolve(reviewDetail);
    });
}

