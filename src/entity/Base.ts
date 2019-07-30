import {
  PrimaryGeneratedColumn,
  BaseEntity,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm'

export default class ApplicationEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn() createdAt = undefined

  @UpdateDateColumn() updatedAt = undefined
}
