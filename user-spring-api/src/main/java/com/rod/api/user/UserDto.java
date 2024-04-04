package com.rod.api.user;

import com.rod.api.article.Article;
import jakarta.persistence.Column;
import jakarta.persistence.OneToMany;
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
public class UserDto {
    private Long id;
    private String username;
    private String password;
    private String name;
    private String phoneNumber;
    private String address;
    private String job;

    @Builder.Default
    private List<Article> articles = new ArrayList<>();
}
