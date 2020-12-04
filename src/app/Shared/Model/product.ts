export interface Iproduct{
    
    _id:string;
    Name:string;
    Brand:string;
    Ratings:number;
    image:string;
    urlImage?:string;
    Category?:string;
    TotalPrice:number;
    OfferPrice:number;
    IsAvailable:string;
    Description:string;
    Quantity?:number;
    Error?:string;
   
}
