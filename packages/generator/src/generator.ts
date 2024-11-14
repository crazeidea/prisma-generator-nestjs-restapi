import { generatorHandler, GeneratorOptions } from '@prisma/generator-helper'
import { logger } from '@prisma/sdk'
import { GENERATOR_NAME } from './constants'
import { ModuleGenerator } from './generators/module/module.generator'
import { ServiceGenerator } from './generators/service/service.generator'
import { DTOGenerator } from './generators/dtos/dto.generator'
import { ControllerGenerator } from './generators/controller/controller.generator'

const { version } = require('../package.json')

generatorHandler({
  onManifest() {
    logger.info(`${GENERATOR_NAME}:Registered`)
    return {
      version,
      defaultOutput: '../generated',
      prettyName: GENERATOR_NAME,
    }
  },
  onGenerate: async (options: GeneratorOptions) => {
    const moduleGenerator = new ModuleGenerator(options)
    const serviceGenerator = new ServiceGenerator(options)
    const dtoGenerator = new DTOGenerator(options)
    const controllerGenerator = new ControllerGenerator(options)

    options.dmmf.datamodel.models.forEach((model) => {
      moduleGenerator.generate(model)
      controllerGenerator.generate(model)
      serviceGenerator.generate(model)
      dtoGenerator.generate(model)
    })
  },
})
