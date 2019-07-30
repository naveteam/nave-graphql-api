import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

import Base from './Base'

@Entity()
export default class User extends Base {
  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column()
  email: string

  @Column()
  password: string
}
