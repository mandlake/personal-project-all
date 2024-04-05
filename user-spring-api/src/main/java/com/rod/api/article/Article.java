package com.rod.api.article;

import com.rod.api.board.Board;
import com.rod.api.common.BaseEntity;
import com.rod.api.user.User;
import jakarta.persistence.*;
import lombok.*;

@Entity(name = "articles")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@ToString(exclude = {"id", "user"})
@Table(name = "articles")
public class Article extends BaseEntity {

    @Id
    @Column(name="id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "content")
    private String content;

    @ManyToOne
    @JoinColumn(name = "board_id")
    private Board board;

    @ManyToOne
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
