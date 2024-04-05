package com.rod.api.article.service;

import com.rod.api.article.model.Article;
import com.rod.api.article.model.ArticleDto;
import com.rod.api.common.command.CommandService;
import com.rod.api.common.query.QueryService;

import java.util.*;

public interface ArticleService extends CommandService<ArticleDto>, QueryService<ArticleDto> {
    default Article dtoToEntity(ArticleDto dto){
        Article article = Article.builder()
                .content(dto.getContent())
                .build();
        return article;
    }

    default Optional<ArticleDto> entityToDto(Article ent){
        ArticleDto dto = ArticleDto.builder()
                .content(ent.getContent())
                .build();
        return  Optional.of(dto);
    }

}
