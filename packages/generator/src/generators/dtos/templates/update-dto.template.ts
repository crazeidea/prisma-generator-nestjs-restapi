export const UpdateDTOTemplate = `
import { ApiProperty } from '@nestjs/swagger';

export class Update{{name}}Dto {
  {{#fields}}
  @ApiProperty()
  {{name}}: {{type}};
  {{/fields}}
}

`
