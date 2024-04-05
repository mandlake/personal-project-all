package com.rod.api.article.service;

import com.rod.api.article.model.Article;
import com.rod.api.article.model.ArticleDto;
import com.rod.api.common.service.command.CommandService;
import com.rod.api.common.service.query.QueryService;

import java.util.Optional;

public interface ArticleService extends CommandService<ArticleDto>, QueryService<ArticleDto>{
    default Article dtoToEntity(ArticleDto dto) {
        return Article.builder().build();
    }

    default ArticleDto entityToDto(Optional<Article> optional) {
        return ArticleDto.builder().build();
    }
}
