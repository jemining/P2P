import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/auth/user.entity';
import { Board } from 'src/boards/board.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: '댓글 고유 id' })
  id: number;

  @Column()
  @ApiProperty({ description: '내용', name: 'comment_memo' })
  comment: string;

  @CreateDateColumn({ name: 'created_at' })
  createAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deleteAt: Date;

  @ManyToOne(() => User)
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;
  @Column()
  userId: number;

  @ManyToOne(() => Board)
  @JoinColumn([{ name: 'board_id', referencedColumnName: 'id' }])
  board: Board;
  @Column()
  boardId: number;
}
