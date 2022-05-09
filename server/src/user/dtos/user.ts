import {
  IsString,
  IsEmail,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  @IsString()
  username: string;
  @IsString()
  @IsNotEmpty()
  sub: string;
  @IsBoolean()
  @IsNotEmpty()
  emailVerified: boolean;
  @IsString()
  @IsNotEmpty()
  pictureUrl: string;
  @IsString()
  @IsOptional()
  origin: string;
}

export class UpdateUserDto {
  @IsEmail()
  @IsOptional()
  email: string;
  @IsOptional()
  @IsString()
  username: string;
  @IsString()
  @IsOptional()
  sub: string;
  @IsBoolean()
  @IsOptional()
  emailVerified: boolean;
  @IsString()
  @IsOptional()
  pictureUrl: string;
  @IsString()
  @IsOptional()
  origin: string;
}
