package com.rod.api.user;

import com.rod.api.common.component.MessengerVo;
import com.rod.api.user.model.UserDto;
import com.rod.api.user.service.UserServiceImpl;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@ApiResponses(value = {
        @ApiResponse(responseCode = "400", description = "Invalid ID supplied"),
        @ApiResponse(responseCode = "404", description = "Customer not found")})
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/users")
@Slf4j
public class UserController {
    private final UserServiceImpl service;

    @SuppressWarnings("static-access")
    @PostMapping( "/save")
    public ResponseEntity<MessengerVo> save(@RequestBody UserDto dto) {
        log.info("입력받은 정보 : {}", dto );
        return ResponseEntity.ok(service.save(dto));
    }

    @GetMapping("/list")
    public ResponseEntity<List<UserDto>> findAll(){
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/detail")
    public ResponseEntity<Optional<UserDto>> findById(@RequestParam Long id) {
        log.info("입력받은 정보 : {}", id );
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping("/modify")
    public ResponseEntity<MessengerVo> modify(@RequestBody UserDto param) {
        log.info("입력받은 정보 : {}", param );
        return ResponseEntity.ok(service.modify(param));
    }

    @DeleteMapping("/delete")
    public ResponseEntity<MessengerVo> deleteById(@RequestParam Long id) {
        log.info("입력받은 정보 : {}", id );
        return ResponseEntity.ok(service.deleteById(id));
    }

    @GetMapping("/count")
    public ResponseEntity<Long> count() {
        return ResponseEntity.ok(service.count());
    }

    @PostMapping("/search")
    public ResponseEntity<List<UserDto>> findUsersByName(@RequestBody UserDto param) {
        log.info("입력받은 정보 : {}", param );
        return ResponseEntity.ok(service.findUsersByName(param.getName()));
    }

    @PostMapping(path = "/login")
    public ResponseEntity<MessengerVo> login(@RequestBody UserDto param) {
        log.info("입력받은 정보 : {}", param );
        return ResponseEntity.ok(service.login(param));
    }

}
