package com.rod.api.board.service;

import com.rod.api.article.model.Article;
import com.rod.api.article.model.ArticleDto;
import com.rod.api.common.command.CommandService;
import com.rod.api.common.query.QueryService;

import java.util.Optional;

public interface BoardService  extends CommandService<Article>, QueryService<Article> {
    default Optional<Article> dtoToEntity(ArticleDto dto) {
        Article article = Article.builder()
                .id(dto.getId())
                .title(dto.getTitle())
                .content(dto.getContent())
                .build();
        return Optional.of(article);
    }

    default Optional<ArticleDto> entityToDto(Article ent) {
        ArticleDto dto = ArticleDto.builder()
                .id(ent.getId())
                .title(ent.getTitle())
                .content(ent.getContent())
                .build();
        return Optional.of(dto);
    }
}