import { INodeInstance } from '../../model/types/node';

export const RootNodeId = Symbol('$$ClayRoot');

export interface IRootNode extends INodeInstance<'__ClayRoot', never> {
    id: typeof RootNodeId;
    type: '__ClayRoot';
}

export const makeRootNode = (): IRootNode => ({
    id: RootNodeId,
    type: '__ClayRoot',
    traits: [],
});
