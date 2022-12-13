import { IRootNode } from '../../builtins/nodes/RootNode';
import { INodeDescriptor, INodeInstance } from './node';

export type ClayConfig<
    Type extends string,
    Node extends INodeDescriptor<Type> = INodeDescriptor<Type>,
> = {
    nodes: Node[];
};

type GetNodeTypeMap<
    NodeTypes extends string,
    Config extends ClayConfig<NodeTypes>,
> = {
    [Node in Config['nodes'][number] as Node['type']]: Node extends INodeDescriptor<
        infer Type,
        infer Traits
    >
        ? INodeInstance<Type, Traits>
        : never;
};

type UnpackMap<T> = T[keyof T];

type ForceTypescriptTypeUnpack<T> = T extends INodeInstance ? T : never;

export type GetNodeType<
    NodeTypes extends string,
    Config extends ClayConfig<NodeTypes>,
> = UnpackMap<GetNodeTypeMap<NodeTypes, Config>>;

export type ClayDocument<NodeInstance extends INodeInstance> = Map<
    string | symbol,
    NodeInstance
>;

export type DocumentFromConfig<
    NodeTypes extends string,
    Config extends ClayConfig<NodeTypes>,
> = ClayDocument<
    ForceTypescriptTypeUnpack<GetNodeType<NodeTypes, Config>> | IRootNode
>;

export interface IClayInstance<
    NodeTypes extends string,
    Config extends ClayConfig<NodeTypes>,
> {
    config: Config;
    nodes: Config['nodes'];
    document: DocumentFromConfig<NodeTypes, Config>;
}
