package com.rod.api.article.service;

import com.rod.api.article.model.ArticleDto;
import com.rod.api.common.component.MessengerVo;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@Transactional
class ArticleServiceImplTest {
    @Autowired
    private ArticleServiceImpl service;

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
        List<ArticleDto> dtos = service.findAll();
        assertThat(dtos).hasSize(120);
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