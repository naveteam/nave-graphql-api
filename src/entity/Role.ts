import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

import Base from './Base'

@Entity()
export class Role extends Base {
  @Column()
  name: string
}
