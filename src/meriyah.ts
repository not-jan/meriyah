import { Context } from './common';
import { parseSource, Options } from './parser';
import * as ESTree from './estree';

/**
 * Parse a script, optionally with various options.
 */
export function parseScript(source: string, options?: Options): ESTree.Program {
  return parseSource(source, options, Context.None);
}

/**
 * Parse a module, optionally with various options.
 */
export function parseModule(source: string, options?: Options): ESTree.Program {
  return parseSource(source, options, Context.Strict | Context.Module);
}

/**
 * Parse a module or a script, optionally with various options.
 */
export function parse(source: string, options?: Options): ESTree.Program {
  return parseSource(source, options, Context.None);
}

export { Options, ESTree };

// Export current version
export const version = '1.6.3';
