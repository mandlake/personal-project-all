package com.rod.api.article;


import com.rod.api.common.component.MessengerVo;

import lombok.RequiredArgsConstructor;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ArticleServiceImpl implements ArticleService {
    private final ArticleRepository repository;
    @Override
    public MessengerVo save(ArticleDto dto) {
        return null;
    }

    @Override
    public String insertMany() {
        return null;
    }

    @Override
    public String delete(ArticleDto dto) {
        return null;
    }

    @Override
    public List<ArticleDto> findAll() throws SQLException {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findAll'");
    }

    @Override
    public Optional<ArticleDto> findById(Long id) {
        Article ent = repository.findById(id).get();
        return entityToDto(ent);

    }

    @Override
    public String count() throws SQLException {
        return null;
    }

    @Override
    public Optional<ArticleDto> getOne(String id) {
        return Optional.empty();
    }

    @Override
    public Boolean existsById(Long id) {
        return null;
    }
}