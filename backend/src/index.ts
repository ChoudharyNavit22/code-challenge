import * as fs from "fs";
import {TransactionHistoryItem, WeigthedTransactionHistory} from "./interfaces";
import {dateValidationInMonths, findByMatchingProperties} from "./helpers/universalFunctions";

const mapWeigths = (item: TransactionHistoryItem) => {
  switch (item.status) {
    case "REFUND": 
      return -1
    case "INCOMPLETE": 
      return 0
    case "PURCHASED" : {
      if(dateValidationInMonths(item.dateOfPurchase,6)) return 1.5;
      else if(item.numberOfShares > 1000) return 1.25;
      return 1;
    }
    default: 
     throw Error("Unidentified Status");
}
}

const main = () => {
  const data = fs.readFileSync("./src/transaction_history.json", "utf-8");

  const transactionData: TransactionHistoryItem[] = JSON.parse(data);

  const uniqueNames = [...new Set(transactionData.map((element: { name: string; }) => element.name))];

  let weigthedTable : WeigthedTransactionHistory[] = [];

  uniqueNames.forEach( (item: string) => {
    let filteredTransactions = findByMatchingProperties(transactionData, { name: item });
    let totalShares = 0;
    let totalWeight = 0;
    filteredTransactions.forEach( (item: TransactionHistoryItem) => {
      totalShares += item.numberOfShares;
      try{
        totalWeight += mapWeigths(item);
      } catch(err) {
        console.log(err);
      }
      
    })
    weigthedTable.push({
      name: item,
      totalShares,
      weight: totalWeight
    })
    weigthedTable = weigthedTable.sort((a,b) => {
      return b.weight - a.weight;
    })
  } )
  console.table(weigthedTable);
};

main();
