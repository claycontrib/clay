import { ITrait } from '../../model/types/trait';

export class BoldReceiver implements ITrait<'bold', boolean> {
    public readonly type = 'bold';

    constructor(private value: boolean = false) {}

    get meta() {
        return this.value;
    }
}
