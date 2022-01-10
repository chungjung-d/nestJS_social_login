import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum UserAllowMall {
  BAN = 'BAN',
  ALLOW = 'ALLOW',
}

export enum UserLoginType {
  ETC = 'ETC',
  GOOGLE = 'GOOGLE',
}

@Entity()
export class Client {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  phone_number: string;

  @Column({
    type: 'enum',
    enum: UserAllowMall,
    default: UserAllowMall.ALLOW,
  })
  userAllowMall: UserAllowMall;

  @Column({
    type: 'enum',
    enum: UserLoginType,
  })
  userLoginType: UserLoginType;

  @Column({ length: 100 })
  certString: string;
}
