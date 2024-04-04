package com.rod.api.board;

import com.rod.api.article.Article;
import lombok.*;
import lombok.extern.log4j.Log4j;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Log4j
public class BoardDto {
    private Long id;
    private String boardName;
    private String boardType;

    @Builder.Default
    private List<Article> articles = new ArrayList<>();
}
