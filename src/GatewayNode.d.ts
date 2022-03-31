import { Cors } from './Cors';
import { Flag } from './Flag';
import { Origin } from './Origin';
import type { Results } from './Results';
import { Status } from './Status';
import { UiComponent } from './UiComponent';
declare class GatewayNode extends UiComponent {
    readonly parent: Results;
    status: Status;
    cors: Cors;
    origin: Origin;
    link: HTMLDivElement & {
        url?: URL;
    };
    flag: Flag;
    took: HTMLDivElement;
    gateway: string;
    index: unknown;
    checkingTime: number;
    atLeastOneSuccess: boolean;
    constructor(parent: Results, gateway: string, index: unknown);
    check(): Promise<void>;
    private onSuccessfulCheck;
    onerror(): void;
}
export { GatewayNode };
//# sourceMappingURL=GatewayNode.d.ts.map