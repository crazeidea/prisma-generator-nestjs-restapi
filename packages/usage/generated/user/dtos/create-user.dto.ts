import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @ApiProperty()
  id: Int
  @ApiProperty()
  email: String
  @ApiProperty()
  name: String
}
