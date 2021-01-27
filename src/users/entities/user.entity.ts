import {Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Group} from "../../group/entities/group.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ default: true })
    isActive: boolean;

    @ManyToMany(() => Group,)
    @JoinTable({name:"user_groups_group"})
    groups: Group[];

    @ManyToMany(() => User,{nullable:true})
    @JoinTable({name:"user_friends"})
    friends: User[];
}