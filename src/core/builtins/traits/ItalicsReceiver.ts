import { ITrait } from '../../model/types/trait';

export class ItalicsReceiver implements ITrait<'italics', boolean> {
    public readonly type = 'italics';

    constructor(private value: boolean = false) {}

    get meta() {
        return this.value;
    }
}
