import { PaystackPop } from "./paystack";
import {
  PaymentRequestOptions,
  PopupTransaction,
  ResumeTransactionOptions,
  TransactionOptions,
} from "./types";

interface PaystackPopClass {
  isLoaded: () => boolean;
  newTransaction: (options: TransactionOptions) => PopupTransaction;
  resumeTransaction: (options: ResumeTransactionOptions) => PopupTransaction;
  cancelTransaction: (idOrTransaction: string | PopupTransaction) => void;
  preloadTransaction: (options: TransactionOptions) => () => void;
  checkout: (options: TransactionOptions) => Promise<PopupTransaction>;
  paymentRequest: (options: PaymentRequestOptions) => Promise<PopupTransaction>;
}

export {
  PaymentRequestOptions,
  PopupTransaction,
  ResumeTransactionOptions,
  TransactionOptions,
};

export default PaystackPop as PaystackPopClass;
