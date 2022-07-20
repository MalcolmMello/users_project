import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Companies } from "./Companies";

@Entity("companies_addresses")
export class CompanyAddress {
    @PrimaryColumn()
    id!: string;
    
    @Column()
    company_id!: string;

    @ManyToOne(() => Companies)
    @JoinColumn({ name: "company_id" })
    companies!: Companies; 

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
    longitude!:  number;

    @CreateDateColumn()
    created_at!: string;

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}