package com.rod.api.board.model;

import com.rod.api.article.model.Article;
import lombok.*;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Log4j2
public class BoardDto {
    private Long id;
    private String boardName;
    private String boardType;

    @Builder.Default
    private List<Article> articles = new ArrayList<>();
}
