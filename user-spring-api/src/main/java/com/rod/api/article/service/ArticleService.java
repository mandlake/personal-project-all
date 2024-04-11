package com.rod.api.article.service;

import com.rod.api.article.model.Article;
import com.rod.api.article.model.ArticleDto;
import com.rod.api.common.service.command.CommandService;
import com.rod.api.common.service.query.QueryService;

import java.util.Optional;

public interface ArticleService extends CommandService<ArticleDto>, QueryService<ArticleDto>{
    default Article dtoToEntity(ArticleDto dto) {
        return Article.builder()
                .id(dto.getId())
                .content(dto.getContent())
                .title(dto.getTitle())
                .user(dto.getUser_id())
                .board(dto.getBoard_id())
                .build();
    }

    default ArticleDto entityToDto(Optional<Article> optional) {
        Article a = optional.get();
        return ArticleDto.builder()
                .id(a.getId())
                .content(a.getContent())
                .title(a.getTitle())
                .board_id(a.getBoard())
                .user_id(a.getUser())
                .build();
    }
}
