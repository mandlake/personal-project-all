package com.rod.api.article;

import com.rod.api.common.command.CommandService;
import com.rod.api.common.query.QueryService;

public interface ArticleService extends CommandService<Article>, QueryService<Article> {
}
