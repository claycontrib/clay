import { makeRootNode, RootNodeId } from '../builtins/nodes/RootNode';
import {
    ClayConfig,
    DocumentFromConfig,
    IClayInstance,
} from '../model/types/instance';

export class ClayInstance<
    NodeTypes extends string,
    Config extends ClayConfig<NodeTypes>,
> implements IClayInstance<NodeTypes, Config>
{
    nodes: Config['nodes'];
    document: DocumentFromConfig<NodeTypes, Config>;

    constructor(public config: Config) {
        this.nodes = config.nodes;
        this.document = new Map();

        this.document.set(RootNodeId, makeRootNode());
    }
}

// const clay = new ClayInstance({
//     nodes: [
//         {
//             type: 'text',
//             mergeBehavior: NodeMergeBehavior.Allow,
//             context: NodeContext.Any,
//             traits: [MutableText, BoldReceiver],
//             // stylusContextSerializer: (node) => node.traits.mutableText,
//         },
//         {
//             type: 'text-2',
//             mergeBehavior: NodeMergeBehavior.Allow,
//             context: NodeContext.Any,
//             traits: [ItalicsReceiver],
//             // stylusContextSerializer: (node) => node.traits.mutableText,
//         },
//     ],
// });

// const node = clay.document.get('xd')!;

// node.type === 'text' && node.traits.mutableText;
