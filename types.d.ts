// IF.d.ts
declare class IF {
    checks: Function[];
  
    constructor();
  
    check(value: any): boolean;
  
    type(t: string): this;
  
    equals(v: any): this;
  
    divisibleBy(v: number): this;
  
    instanceOf(type: Function): this;
  
    custom(cb: (value: any) => boolean): this;
  
    objMatch(shape: Record<string, any>): this;
  
    arrMatch(arr: any[]): this;
  
    regex(pattern: RegExp): this;
  }
  
  export default IF;
  
  // MATCH.d.ts
  declare type PatternFunction = (value: any) => boolean;
  declare type ActionFunction = (value: any) => any;
  declare type Pattern = [PatternFunction, ActionFunction]
  
  declare class MATCH {
    patterns: Array<Pattern>;
  
    match(value: any): any;
  
    matchAll(value: any): any[];
  
    when(
      pattern: PatternFunction | IF,
      action: ActionFunction
    ): this;
  }
  
  export default MATCH;