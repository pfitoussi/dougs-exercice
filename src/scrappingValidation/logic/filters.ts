import { MaxDate, MinDate } from "../constant";
import { OperationByControl } from "../domain";

export const nonProcessable = (collection: OperationByControl[]) =>
    collection.filter(item => item.end === MaxDate || item.start === MinDate)
    .map(({sumOperations, sumOperationsMinusBalance, ...item}) => item);

export const invalidChecksum = (collection: OperationByControl[]) =>
    collection.filter(item => !(item.end === MaxDate || item.start === MinDate) 
        && item.sumOperationsMinusBalance !== 0);