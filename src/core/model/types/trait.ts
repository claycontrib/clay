export interface ITrait<Name extends string, TMeta = undefined> {
    readonly type: Name;
    get meta(): TMeta;
}
