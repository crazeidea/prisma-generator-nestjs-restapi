import Mustache from 'mustache'
import { join } from 'path'
import { writeFileSafely } from '../../utils/writeFileSafely'
import { BaseGenerator } from '../base.generator'
import { ModuleTemplate } from './module.template'
import { DMMF } from '@prisma/generator-helper'

export class ModuleGenerator extends BaseGenerator {
  generate(model: DMMF.Model) {
    const lowerCaseModelName = model.name.toLowerCase()

    const content = Mustache.render(ModuleTemplate, {
      name: model.name,
      lowercaseName: lowerCaseModelName,
    })

    const filepath = join(
      this.path,
      `${lowerCaseModelName}/${lowerCaseModelName}.module.ts`,
    )

    writeFileSafely(filepath, content)

    if (this.verbose) {
      console.log(`Created ${filepath}`)
    }
  }
}
