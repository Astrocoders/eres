/// <reference types="node" />

export = eres

declare const eres: EresFn;
interface EresFn {
  <T>(value: Promise<T>): Promise<[Error, T]>;
}
