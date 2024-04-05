package com.rod.api.article.model;

import com.rod.api.board.model.Board;
import com.rod.api.user.model.User;
import lombok.*;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;

@Component
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Log4j2
public class ArticleDto {
    private Long id;
    private String title;
    private String content;
    private Board board_id;
    private User user_id;
}
