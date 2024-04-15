package com.rod.api.article.service;

import com.rod.api.article.ArticleRepository;
import com.rod.api.article.model.Article;
import com.rod.api.article.model.ArticleDto;
import com.rod.api.common.component.MessengerVo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.BDDMockito;
import org.mockito.Mock;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@ExtendWith(SpringExtension.class)
class ArticleServiceImplTest {
    private ArticleService service;
    @Mock
    private ArticleRepository repository;
    @BeforeEach
    void setUp() {
        this.service = new ArticleServiceImpl(repository);
    }

    private List<Article> getArticles() {
        return Arrays.asList(
                Article.builder().id(1L).title("a").content("aaa").build(),
                Article.builder().id(2L).title("b").content("bbb").build(),
                Article.builder().id(3L).title("c").content("ccc").build()
        );
    }

    @Test
    public void findAllMock() {
        List<Article> articles = getArticles();
        BDDMockito.given(repository.findAll()).willReturn(articles);
        List<ArticleDto> list = service.findAll();
        assertThat(list.size()).isEqualTo(articles.size());
    }

    @Test
    void save() {
        MessengerVo vo = service.save(ArticleDto.builder().title("11").build());
        assertThat(vo.getMessage()).isEqualTo("True");
    }

    @Test
    void deleteById() {
        MessengerVo vo = service.deleteById(1L);
        assertThat(vo.getMessage()).isEqualTo("True");
    }

    @Test
    void modify() {
        MessengerVo vo = service.modify(ArticleDto.builder().id(1L).build());
        assertThat(vo.getMessage()).isEqualTo("True");
    }

    @Test
    void findAll() {
        List<ArticleDto> list = service.findAll();
        assertThat(list).hasSize(120);
    }

    @Test
    void findById() {
        Optional<ArticleDto> dto = service.findById(1L);
        assertThat(dto.isPresent()).isTrue();
    }

    @Test
    void count() {
        long count = service.count();
        assertThat(count).isEqualTo(120L);
    }

    @Test
    void existsById() {
        boolean exists = service.existsById(1L);
        assertThat(exists).isTrue();
    }
}