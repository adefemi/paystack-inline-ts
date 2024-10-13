export interface PaymentOptions {
  currency?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  customerCode?: string;
  channels?: string[];
  paymentRequest?: string;
  paymentPage?: string;
  metadata?: {
    custom_fields?: Array<{
      display_name: string;
      variable_name: string;
      value: string;
    }>;
    [key: string]: any;
  };
  reference?: string;
  onError?: (error: { message: string }) => void;
  onCancel?: () => void;
  onLoad?: (response: {
    id: string;
    customer: any;
    accessCode: string;
  }) => void;
  onSuccess?: (response: {
    id: string;
    reference: string;
    message: string;
  }) => void;
  subaccountCode?: string;
  split_code?: string;
  bearer?: "account" | "subaccount";
  transactionCharge?: string;
  planCode?: string;
  subscriptionCount?: number;
  planInterval?: "hourly" | "daily" | "weekly" | "monthly" | "annually";
  subscriptionLimit?: number;
  subscriptionStartDate?: string;
}

export interface TransactionOptions extends PaymentOptions {
  key: string;
  email: string;
  amount: number;
}

export interface PopupTransaction {
  getStatus: () => {
    status:
      | "null"
      | "error"
      | "abandoned"
      | "auth"
      | "failed"
      | "success"
      | "pending";
    id?: string;
    errors?: any[];
    response?: any;
    checkoutUrl?: string;
  };
}

export interface PaymentRequestOptions extends TransactionOptions {
  container: string;
  loadPaystackCheckoutButton?: string;
  styles?: {
    theme: "dark" | "light";
    applePay?: {
      width: string;
      height: string;
      borderRadius: string;
      type: string;
      locale: string;
    };
  };
  onElementsMount?: (elements: { applePay: boolean } | null) => void;
}

export interface ResumeTransactionOptions extends PaymentOptions {
  accessCode: string;
}
