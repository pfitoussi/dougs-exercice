import { Operation } from '.';

export default interface OperationByControl {
    start: Date,
    end: Date,
    delta: number,
    balanceAtEnd: number,
    operations: Operation[],
    sumOperations: number,
    sumOperationsMinusBalance: number
}