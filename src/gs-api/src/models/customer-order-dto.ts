/* tslint:disable */
export interface CustomerOrderDto {
    code?: string;
    id?: number;
    unitPrice?: number;
    totalPrice?: number;
    quantity?: number;
    article?: string;
    commandDate?: string;
    customerName?: string;
    status?: boolean;
  }