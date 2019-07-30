import { Entity, Column, ManyToMany, JoinTable } from 'typeorm'
import { Role } from './Role'

import Base from './Base'

@Entity()
export class User extends Base {
  @Column()
  username: string

  @Column()
  email: string

  @Column()
  password: string

  @ManyToMany(type => Role)
  @JoinTable()
  role: number
}
