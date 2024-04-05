package com.rod.api.article.model;

import com.rod.api.board.model.Board;
import com.rod.api.common.BaseEntity;
import com.rod.api.user.model.User;
import jakarta.persistence.*;
import lombok.*;
import lombok.extern.log4j.Log4j2;

@Log4j2
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Entity(name = "articles")
@Getter
@ToString(exclude = {"id", "user"})
public class Article extends BaseEntity {

    @Id
    @Column(name="id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "content")
    private String content;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "board_id")
    private Board board;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "writer")
    private String writer;

    @Builder(builderMethodName = "builder")
    public Article(Long id, String title, String content) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.writer = user.getName();
    }
}
