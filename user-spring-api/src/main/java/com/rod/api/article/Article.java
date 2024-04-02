package com.rod.api.article;

import com.rod.api.border.Board;
import com.rod.api.user.User;
import jakarta.persistence.*;
import lombok.*;

@Entity(name = "articles")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@ToString(exclude = {"id", "user"})
public class Article {

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

    @Column(name = "date")
    private String registerDate;

    @Builder(builderMethodName = "builder")
    public Article(Long id, String title, String content, String registerDate) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.writer = user.getName();
        this.registerDate = registerDate;
    }
}
