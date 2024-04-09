package com.rod.api.article.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.rod.api.article.ArticleRepository;
import com.rod.api.article.model.ArticleDto;
import com.rod.api.common.component.MessengerVo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ArticleServiceImpl implements ArticleService{
    private final ArticleRepository repository;

    @Override
    public MessengerVo save(ArticleDto t) {
        entityToDto(Optional.of(repository.save(dtoToEntity(t))));
        return new MessengerVo();
    }

    @Override
    public MessengerVo deleteById(Long id) {
        return null;
    }

    @Override
    public MessengerVo modify(ArticleDto articleDto) {
        return null;
    }

    @Override
    public List<ArticleDto> findAll() {
        return repository.findAll().stream().map(i -> entityToDto(Optional.ofNullable(i))).collect(Collectors.toList());
    }

    @Override
    public Optional<ArticleDto> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public long count() {
        return 0;
    }

    @Override
    public boolean existsById(Long id) {
        return false;
    }
}