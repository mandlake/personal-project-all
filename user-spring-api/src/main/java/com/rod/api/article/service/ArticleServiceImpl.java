package com.rod.api.article.service;

import java.util.List;
import java.util.Optional;

import com.rod.api.article.ArticleRepository;
import com.rod.api.article.model.Article;
import com.rod.api.article.model.ArticleDto;
import com.rod.api.common.component.PageRequestVo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ArticleServiceImpl implements ArticleService{
    private final ArticleRepository repository;
    @Override
    public ArticleDto save(ArticleDto dto) {
        return entityToDto(Optional.of(repository.save(dtoToEntity(dto))));
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }

    @Override
    public List<ArticleDto> findAll(PageRequestVo vo) {
        // repository.findAll(vo);
        return null;
    }

    @Override
    public Optional<ArticleDto> findById(Long id) {
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