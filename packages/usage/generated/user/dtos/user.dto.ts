import { ApiProperty } from '@nestjs/swagger'

export class UserDto {
  @ApiProperty()
  id: Int
  @ApiProperty()
  email: String
  @ApiProperty()
  name: String
}
