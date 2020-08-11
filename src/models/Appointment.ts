import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity("appointments")
class Appointment {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    provider: string;

    @Column("timestamp with time zone")
    date: Date;

    @CreateDateColumn()
    createdat: Date;

    @UpdateDateColumn()
    updatedat: Date;
}

export default Appointment;
