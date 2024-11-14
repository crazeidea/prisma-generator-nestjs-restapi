export const ServiceTemplate = `

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class {{name}}Service {

    constructor(
        private readonly prisma: PrismaService
    ) {}

}

`
