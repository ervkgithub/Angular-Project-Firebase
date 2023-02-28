export interface rating{
    rate:number,
    count:number
  }
  
  export interface product{
    id:number,
    title:string,
    description:string,
    category:string,
    image:string,
    price:number,
    rating:rating
  }