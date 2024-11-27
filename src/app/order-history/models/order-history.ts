export interface Order {
    _id: string;
    cart: {
      retailer_id: string;
      customer_id: string;
      items: Item[];
      total_amount: number;
      // "created_at": "2024-11-21T06:28:03.767Z",
      // "isActive": true,
      _id: string;
      // "__v": 0,
      retailer_name: string;
      customer_name: string;
    };
    payment_mode: string;
    payment_status: string;
    delivery_status: string;
    //   "isActive": true,
    //   "created_at": "2024-11-21T06:29:39.745Z",
    //   "updated_at": "2024-11-21T06:29:39.745Z",
    //   "__v": 0
  }
  
  export interface Item {
    tiffin_id: string;
    quantity: number;
    price: number;
    id: string;
    tiffin_name: string;
    tiffin_type: string;
  }
  export interface ApiResponse {
    statusCode: number;
    success: boolean;
    message: string;
    data: Order[];
    pagination: {
      currentPage: number;
      totalPages: number;
      totalItems: number;
    };
  }
  