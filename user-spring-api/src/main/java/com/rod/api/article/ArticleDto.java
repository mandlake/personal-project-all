package com.rod.api.article;

import com.rod.api.board.Board;
import com.rod.api.user.User;
import lombok.*;
import lombok.extern.log4j.Log4j;
import org.springframework.stereotype.Component;

@Component
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Log4j
public class ArticleDto {
    private Long id;
    private String title;
    private String content;
    private Board board_id;
    private User user_id;
}
