import { ApiProperty } from '@nestjs/swagger'

export class UpdateUserDto {
  @ApiProperty()
  id: Int
  @ApiProperty()
  email: String
  @ApiProperty()
  name: String
}
