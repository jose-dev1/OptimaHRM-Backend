import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({ name: 'Roles' })
export class Rol {
    @PrimaryGeneratedColumn()
    id_rol: number;

    @Column({ unique: true })
    nombre: string;
}
