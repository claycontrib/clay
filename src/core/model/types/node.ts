import { ITrait } from './trait';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Class<T> = new (...args: any[]) => T;

export enum NodeContext {
    Block = 'block',
    Inline = 'inline',
    Any = 'any',
}

export enum NodeMergeBehavior {
    Allow = 'allow',
    Disallow = 'disallow',
}

type TraitMap<Trait extends ITrait<string, unknown>> = {
    [T in Trait as T['type']]: T;
};

export interface INodeInstance<
    Type extends string = string,
    Trait extends ITrait<string, unknown> = ITrait<string, unknown>,
> {
    id: string | symbol;
    type: Type;
    traits: TraitMap<Trait>;
}

export interface INodeDescriptor<
    Type extends string,
    Trait extends ITrait<string, unknown> = ITrait<string, unknown>,
> {
    type: Type;
    context: NodeContext;
    mergeBehavior: NodeMergeBehavior;
    traits: Class<Trait>[];
    // stylusContextSerializer: (node: INodeInstance<Trait>) => string;
}

export interface INestableNodeDescriptor<
    Type extends string,
    Traits extends ITrait<string>,
> extends INodeDescriptor<Type, Traits> {
    allowNested: true;
}
