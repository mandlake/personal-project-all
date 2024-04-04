package com.rod.api.article;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rod.api.common.component.MessengerVo;

import lombok.RequiredArgsConstructor;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequiredArgsConstructor
public class ArticleController {
    private final ArticleServiceImpl service;
    private final ArticleRepository repository;

    @GetMapping("/api/all-articles")
    public Map<?,?> findAll() throws SQLException {
        Map<String, Object> map = new HashMap<>();

        List<Article> list = repository.findAll();
        if(list.isEmpty()) {
           // map.put("message", MessengerVo.FAIL);
        } else {
          //  map.put("message", MessengerVo.SUCCESS);
            System.out.println("리스트 사이즈 : " + list.size());
        }
        map.put("result",list);
        System.out.println(map.get("result"));
        return map;
    }
}