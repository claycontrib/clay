import { ITrait } from '../../model/types/trait';

export class MutableText implements ITrait<'mutableText', string> {
    public readonly type = 'mutableText';

    constructor(private value: string = '') {}

    get meta() {
        return this.value;
    }
}
