import {TransactionTypes} from './constants';

export interface TransactionHistoryItem {
    name: string;
    numberOfShares: number;
    dateOfPurchase: number;
    status: TransactionTypes;
  }
  
export type WeigthedTransactionHistory = {
    name: string;
    totalShares: number;
    weight: number;
  }