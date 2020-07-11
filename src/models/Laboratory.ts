import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Building from './Building';

@Entity('laboratories')
class Laboratory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  initials: string;

  @Column()
  site?: string;

  @Column()
  email?: string;

  @Column()
  avatar_url?: string;

  @Column()
  location: string;

  @Column()
  building_id: string;

  @ManyToOne(() => Building)
  @JoinColumn({ name: 'building_id' })
  building: Building;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Laboratory;
