import { DMMF } from '@prisma/generator-helper'
import { BaseGenerator } from '../base.generator'
import { ControllerTemplate } from './controller.template'
import Mustache from 'mustache'
import { join } from 'path'
import { writeFileSafely } from '../../utils/writeFileSafely'

export class ControllerGenerator extends BaseGenerator {
  generate(model: DMMF.Model) {
    const content = Mustache.render(ControllerTemplate, {
      name: model.name,
      lowercaseName: model.name.toLowerCase(),
    })

    const filepath = join(
      this.path,
      `${model.name.toLowerCase()}/${model.name.toLowerCase()}.controller.ts`,
    )

    writeFileSafely(filepath, content)

    if (this.verbose) {
      console.log(`Created ${filepath}`)
    }
  }
}
