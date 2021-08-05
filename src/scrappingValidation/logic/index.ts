import { groupOperationWithControlsByMonth } from "./aggregator";
import { invalidChecksum, nonProcessable } from './filters'
import { OperationByControl, Operation, Control, RejectReason } from '../domain';

export const checkIntegrity = (controls:Control[], operations:Operation[]): RejectReason => {
    const operationsByControl:OperationByControl[] = groupOperationWithControlsByMonth(controls, operations);

    return {
        notProcessableOperations : nonProcessable(operationsByControl),
        invalidSumControl: invalidChecksum(operationsByControl)
    };
};
