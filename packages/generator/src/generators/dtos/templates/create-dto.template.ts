export const CreateDTOTemplate = `
import { ApiProperty } from '@nestjs/swagger';

export class Create{{name}}Dto {
  {{#fields}}
  @ApiProperty()
  {{name}}: {{type}};
  {{/fields}}
}

`
