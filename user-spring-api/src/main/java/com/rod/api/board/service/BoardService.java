package com.rod.api.board.service;

import com.rod.api.board.model.Board;
import com.rod.api.board.model.BoardDto;
import com.rod.api.common.service.command.CommandService;
import com.rod.api.common.service.query.QueryService;

import java.util.Optional;

public interface BoardService extends CommandService<BoardDto>, QueryService<BoardDto> {
    default Board dtoToEntity(BoardDto dto){
        return Board.builder().build();
    }

    default BoardDto entityToDto(Optional<Board> optional){
        return BoardDto.builder().build();
    }

}