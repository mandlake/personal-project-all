package com.rod.api.board;

import com.rod.api.article.Article;
import com.rod.api.common.command.CommandService;
import com.rod.api.common.query.QueryService;

public interface BoardService  extends CommandService<Article>, QueryService<Article> {
}
