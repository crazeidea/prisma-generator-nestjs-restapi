import { BaseGenerator } from '../base.generator'
import Mustache from 'mustache'
import { ServiceTemplate } from './service.template'
import { writeFileSafely } from '../../utils/writeFileSafely'
import { join } from 'path'
import { DMMF } from '@prisma/generator-helper'

export class ServiceGenerator extends BaseGenerator {
  generate(model: DMMF.Model) {
    const lowerCaseModelName = model.name.toLowerCase()

    const content = Mustache.render(ServiceTemplate, {
      name: model.name,
      lowercaseName: lowerCaseModelName,
    })

    const filepath = join(
      this.path,
      `${lowerCaseModelName}/${lowerCaseModelName}.service.ts`,
    )

    writeFileSafely(filepath, content)

    if (this.verbose) {
      console.log(`Created ${filepath}`)
    }
  }
}
