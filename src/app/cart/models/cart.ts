export interface Items{
    price:number,
    quantity:number,
    tiffin_id:string,
    tiffin_image_url:string,
    tiffin_name:string,
    _id:string

  }
  export interface getCartResponse{
    success: boolean;
    message: string;
    statusCode: number;
    _id:string
    data: {
      created_at: string;
      customer_id: string;
      isActive: boolean;
      items: Items[];
      retailer_id: string;
      total_amount: number;
    }[];
    
  }
