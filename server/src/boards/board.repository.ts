import { User } from 'src/auth/user.entity';
import { CustomRepository } from 'src/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { BoardStatus } from './board.enum';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';

@CustomRepository(Board)
export class BoardRepository extends Repository<Board> {
  async createBoard(
    createBoardDto: CreateBoardDto,
    user: User,
  ): Promise<Board> {
    const { description } = createBoardDto;

    const board = this.create({
      description,
      status: BoardStatus.PUBLIC,
      hit: 0,
      userId: user.id,
    });
    await this.save(board);
    return board;
  }
}
