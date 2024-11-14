import { DMMF } from '@prisma/generator-helper'
import { BaseGenerator } from '../base.generator'
import { CreateDTOTemplate } from './templates/create-dto.template'
import Mustache from 'mustache'
import { writeFileSafely } from '../../utils/writeFileSafely'
import { join } from 'path'
import { UpdateDTOTemplate } from './templates/update-dto.template'
import { DTOTemplate } from './templates/dto.template'

export class DTOGenerator extends BaseGenerator {
  generate(model: DMMF.Model) {
    this.generateDTO(model)
    this.generateCreateDTO(model)
    this.generateUpdateDTO(model)
  }

  private generateDTO(model: DMMF.Model) {
    const dtoContent = Mustache.render(DTOTemplate, {
      name: model.name,
      fields: model.fields,
    })

    const filepath = join(
      this.path,
      `${model.name.toLowerCase()}/dtos/${model.name.toLowerCase()}.dto.ts`,
    )

    writeFileSafely(filepath, dtoContent)

    if (this.verbose) {
      console.log(`Created ${filepath}`)
    }
  }

  private generateCreateDTO(model: DMMF.Model) {
    const createDtoContent = Mustache.render(CreateDTOTemplate, {
      name: model.name,
      fields: model.fields,
    })

    const filepath = join(
      this.path,
      `${model.name.toLowerCase()}/dtos/create-${model.name.toLowerCase()}.dto.ts`,
    )

    writeFileSafely(filepath, createDtoContent)

    if (this.verbose) {
      console.log(`Created ${filepath}`)
    }
  }

  private generateUpdateDTO(model: DMMF.Model) {
    const updateDtoContent = Mustache.render(UpdateDTOTemplate, {
      name: model.name,
      fields: model.fields,
    })

    const filepath = join(
      this.path,
      `${model.name.toLowerCase()}/dtos/update-${model.name.toLowerCase()}.dto.ts`,
    )

    writeFileSafely(filepath, updateDtoContent)

    if (this.verbose) {
      console.log(`Created ${filepath}`)
    }
  }
}
