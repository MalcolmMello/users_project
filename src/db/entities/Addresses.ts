import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("addresses")
export class Address {
    @PrimaryColumn()
    id!: string;
    
    @Column()
    user_id!: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user!: User; 

    @Column()
    number!: string;

    @Column()
    street!: string;

    @Column()
    district!: string;

    @Column()
    zip_code!: string;

    @Column()
    city!: string;

    @Column()
    state!: string;

    @Column()
    country!: string;

    @Column()
    latitude!: number;

    @Column()
    longitude!: number;

    @CreateDateColumn()
    created_at!: string;

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}