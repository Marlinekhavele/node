import { BaseEntity as Entity, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


export abstract class BaseEnity extends Entity {
    @PrimaryGeneratedColumn('uuid')
    id: string
    
    @CreateDateColumn({
        name: 'created_at'
    })
    createdAt?: Date

    @UpdateDateColumn({
        name: 'updated_at'
    })
    updatedAt?: Date

    @DeleteDateColumn({
        name: 'deleted_at'
    })
    deletedAt?: Date
}