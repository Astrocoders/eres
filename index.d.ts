/// <reference types="node" />

export = eres

declare const eres: EresFn;
interface EresFn {
  <T, Error>(value: Promise<T>): Promise<[Error, T]>;
}
