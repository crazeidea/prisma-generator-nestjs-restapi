export const ControllerTemplate = `

import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { {{name}}Service } from './{{lowercaseName}}.service';
import { {{name}}Dto } from './dtos/{{lowercaseName}}.dto';
import { Create{{name}}Dto } from './dtos/create-{{lowercaseName}}.dto';
import { Update{{name}}Dto } from './dtos/update-{{lowercaseName}}.dto';

@ApiTags('{{name}}')
@Controller('{{lowercaseName}}')
export class {{name}}Controller {

    constructor(private readonly {{lowercaseName}}Service: {{name}}Service) {}

}

`
