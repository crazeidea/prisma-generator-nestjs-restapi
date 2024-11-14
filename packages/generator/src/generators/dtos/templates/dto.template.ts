export const DTOTemplate = `

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY IT! 
 * 
 * /
import { ApiProperty } from '@nestjs/swagger';

export class {{name}}Dto {
  {{#fields}}
  @ApiProperty()
  {{name}}: {{type}};
  {{/fields}}
}



`
