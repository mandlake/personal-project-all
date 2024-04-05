package com.rod.api.article;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.rod.api.article.model.ArticleDto;
import com.rod.api.article.service.ArticleServiceImpl;
import com.rod.api.common.component.MessengerVo;
import com.rod.api.common.component.PageRequestVo;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequiredArgsConstructor
public class ArticleController {
    private final ArticleServiceImpl service;

    @GetMapping("")
    public ResponseEntity<MessengerVo> findAll(PageRequestVo vo) throws SQLException {
        Map<String, Object> map = new HashMap<>();

        return ResponseEntity.ok(new MessengerVo());
    }
}