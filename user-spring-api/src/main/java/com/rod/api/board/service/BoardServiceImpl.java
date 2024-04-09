package com.rod.api.board.service;


import com.rod.api.board.BoardRepository;
import com.rod.api.board.model.BoardDto;
import com.rod.api.common.component.MessengerVo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BoardServiceImpl implements BoardService{

    private final BoardRepository repository;

    @Override
    public MessengerVo save(BoardDto t) {
        entityToDto(Optional.of(repository.save(dtoToEntity(t))));
        return new MessengerVo();
    }

    @Override
    public MessengerVo deleteById(Long id) {
        repository.deleteById(id);
        return new MessengerVo();
    }

    @Override
    public MessengerVo modify(BoardDto boardDto) {
        return null;
    }

    @Override
    public List<BoardDto> findAll() {
        return repository.findAll().stream().map(i -> entityToDto(Optional.ofNullable(i))).collect(Collectors.toList());
    }

    @Override
    public Optional<BoardDto> findById(Long id) {
        return Optional.of(entityToDto(repository.findById(id)));
    }

    @Override
    public long count() {
        return repository.count();
    }

    @Override
    public boolean existsById(Long id) {
        return repository.existsById(id);
    }
}