export const ModuleTemplate = `

import { Module } from '@nestjs/common';
import { {{name}}Controller } from './{{lowercaseName}}.controller';
import { {{name}}Service } from './{{lowercaseName}}.service';

@Module({
    imports: [],
    controllers: [{{name}}Controller],
    providers: [{{name}}Service],
})
export class {{name}}Module {}

`
