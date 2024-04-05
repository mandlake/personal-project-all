package com.rod.api.board.service;

import com.rod.api.article.model.Article;
import com.rod.api.board.service.BoardService;
import com.rod.api.common.component.MessengerVo;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

public class BoardServiceImpl implements BoardService {
    @Override
    public MessengerVo save(Article article) {
        return null;
    }

    @Override
    public String insertMany() {
        return null;
    }

    @Override
    public String delete(Article article) {
        return null;
    }

    @Override
    public List<Article> findAll() throws SQLException {
        return null;
    }

    @Override
    public Optional<Article> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public String count() throws SQLException {
        return null;
    }

    @Override
    public Optional<Article> getOne(String id) {
        return Optional.empty();
    }

    @Override
    public Boolean existsById(Long id) {
        return null;
    }
}
