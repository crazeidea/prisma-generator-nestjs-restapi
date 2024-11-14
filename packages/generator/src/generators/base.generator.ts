import { GeneratorOptions } from '@prisma/generator-helper'

export class BaseGenerator {
  public readonly path: string
  public readonly verbose: boolean = false

  constructor(options: GeneratorOptions) {
    this.verbose = options.generator.config['verbose'] === 'true' || false
    this.path = options.generator.config.output || './generated'
  }
}
