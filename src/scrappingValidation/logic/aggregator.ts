import { sortBy } from "lodash";
import {
    OperationByControl,
    Control,
    Operation,
} from "../domain";
import { toDecimal } from "../../utils";
import { MaxDate, MinDate } from "../constant";

export const groupOperationWithControlsByMonth =
    (controls: Control[], operations: Operation[]): OperationByControl[] => 
        Object.values<OperationByControl>(
            sortBy(controls, control => control.date)
            .concat({date: MaxDate, balance: 0})
            .reduce((acc:any, cur, index) => { 
                const previousInterval = acc[index];
                const start = previousInterval.end;
                const end = cur.date;
                const currentOperations = operations.filter(operation => operation.date > start && operation.date <= end);
                const delta = cur.balance - previousInterval.balanceAtEnd;
                const sumOperations = toDecimal(currentOperations.reduce((acc, cur) => acc + cur.amount, 0));
                return ({
                    [index + 1]: {
                        start,
                        end,
                        delta,
                        balanceAtEnd: cur.balance,
                        operations: currentOperations,
                        sumOperations,
                        sumOperationsMinusBalance: toDecimal(sumOperations - delta)
                    },
                    ...acc
                })},
            {[0]:{ end: MinDate, balanceAtEnd: 0}}))
        .slice(1);

