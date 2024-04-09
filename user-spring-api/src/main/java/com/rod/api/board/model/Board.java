package com.rod.api.board.model;

import com.rod.api.article.model.Article;
import com.rod.api.common.BaseEntity;
import jakarta.persistence.*;
import lombok.*;
import lombok.extern.log4j.Log4j2;

import java.util.List;

@Log4j2
@Entity(name = "boards")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@ToString(exclude = {"id"})
@Table(name = "boards")
public class Board extends BaseEntity {

    @Id
    @Column(name="id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="board_name")
    private String boardName;

    @Column(name="board_type")
    private String boardType;

    @OneToMany(mappedBy = "board", fetch = FetchType.LAZY)
    private List<Article> articles;

    @Builder(builderMethodName = "builder")
    public Board(Long id, String boardName, String boardType) {
        this.id = id;
        this.boardName = boardName;
        this.boardType = boardType;
    }
}
