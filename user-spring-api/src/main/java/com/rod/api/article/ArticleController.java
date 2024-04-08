package com.rod.api.article;

import java.util.List;
import java.util.Optional;

import com.rod.api.article.model.ArticleDto;
import com.rod.api.article.service.ArticleServiceImpl;
import com.rod.api.common.component.MessengerVo;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.RequiredArgsConstructor;

@ApiResponses(value = {
        @ApiResponse(responseCode = "400", description = "Invalid ID supplied"),
        @ApiResponse(responseCode = "404", description = "Customer not found")})
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/articles")
@Slf4j
public class ArticleController {
    private final ArticleServiceImpl service;

    @SuppressWarnings("static-access")
    @PostMapping("/save")
    public ResponseEntity<MessengerVo> save(ArticleDto dto) {
        log.info("입력받은 정보 : {}", dto );
        return ResponseEntity.ok(service.save(dto));
    }

    @GetMapping("/list")
    public ResponseEntity<List<ArticleDto>> findAll() {
        log.info("입력받은 정보 : {}");
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/detail")
    public ResponseEntity<Optional<ArticleDto>> findById(Long id) {
        log.info("입력받은 정보 : {}", id );
        return ResponseEntity.ok(service.findById(id));
    }

    @PutMapping("/modify")
    public ResponseEntity<MessengerVo> modify(@RequestBody ArticleDto param) {
        log.info("입력받은 정보 : {}", param );
        return ResponseEntity.ok(service.modify(param));
    }

    @DeleteMapping("/delete")
    public ResponseEntity<MessengerVo> deleteById(@PathVariable Long id) {
        log.info("입력받은 정보 : {}", id);
        return ResponseEntity.ok(service.deleteById(id));
    }

    @GetMapping("/count")
    public ResponseEntity<Long> count() {
        return ResponseEntity.ok(service.count());
    }

    @GetMapping("/exists/{id}")
    public ResponseEntity<MessengerVo> existsById(@PathVariable Long id) {
        log.info("입력받은 정보 : {}", id);
        return ResponseEntity.ok(service.existsById(id)?
                MessengerVo.builder().message("True").build() :
                MessengerVo.builder().message("False").build());
    }
}