
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
  tiffin_image:""| null;
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


