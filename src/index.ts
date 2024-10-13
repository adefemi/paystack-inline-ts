import { PaystackPop as OriginalPaystackPop } from "./paystack";
import {
  PaymentRequestOptions,
  PopupTransaction,
  ResumeTransactionOptions,
  TransactionOptions,
} from "./types";

interface PaystackPopInterface {
  isLoaded: () => boolean;
  newTransaction: (options: TransactionOptions) => PopupTransaction;
  resumeTransaction: (options: ResumeTransactionOptions) => PopupTransaction;
  cancelTransaction: (idOrTransaction: string | PopupTransaction) => void;
  preloadTransaction: (options: TransactionOptions) => () => void;
  checkout: (options: TransactionOptions) => Promise<PopupTransaction>;
  paymentRequest: (options: PaymentRequestOptions) => Promise<PopupTransaction>;
}

export interface PaystackPopConstructor {
  new (): PaystackPopInterface;
}

class PaystackPop implements PaystackPopInterface {
  private pop: any;

  constructor() {
    // initialize original PaystackPop
    const popup = new OriginalPaystackPop();
    this.pop = popup;
  }

  isLoaded(): boolean {
    return this.pop.isLoaded();
  }

  newTransaction(options: TransactionOptions): PopupTransaction {
    return this.pop.newTransaction(options);
  }

  resumeTransaction(options: ResumeTransactionOptions): PopupTransaction {
    return this.pop.newTransaction(options);
  }

  cancelTransaction(idOrTransaction: string | PopupTransaction): void {
    return this.pop.cancelTransaction(idOrTransaction);
  }

  preloadTransaction(options: TransactionOptions): () => void {
    return this.pop.preloadTransaction(options);
  }

  checkout(options: TransactionOptions): Promise<PopupTransaction> {
    return this.pop.checkout(options);
  }

  paymentRequest(options: PaymentRequestOptions): Promise<PopupTransaction> {
    return this.pop.paymentRequest(options);
  }
}

export {
  PaymentRequestOptions,
  PopupTransaction,
  ResumeTransactionOptions,
  TransactionOptions,
};

export default PaystackPop as PaystackPopConstructor;
