
export interface Tiffin {
  _id: string;
  tiffin_name: string;
  tiffin_available_quantity: number;
  tiffin_description: string;
  retailer_id: {
    _id: string;
    username: string;
  };
  tiffin_type: string;
  tiffin_price: number;
  tiffin_rating: number;
  tiffin_isavailable: boolean;
  tiffin_image_url:string;
 // isActive: boolean;
  //tiffin_created_at: string;
  //tiffin_updated_at: string;
  //__v: number;
}

export interface Retailer {
  retailerName: string;
  tiffins: Tiffin[];
}

  export interface ApiResponse {
    statusCode: number;
    success: boolean;
    message: string;
    data: Retailer[];
    pagination: {
      currentPage: number;
      totalPages: number;
      totalItems: number;
    };
  }

  export interface Items{
    price:number,
    quantity:number,
    tiffin_id:string,
    tiffin_name:string,
    tiffin_image_url:string;
    _id:string

  }
  export interface AddCartResponse{
    statusCode: number;
    success: boolean;
    message: string;
    data:{
      created_at:string,
      customer_id:string,
      isActive:boolean,
      items:Items[],
      retailer_id:string,
      total_amount:number,
      _id:string
    };
  }

