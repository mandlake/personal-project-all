package com.rod.api.user;

import com.rod.api.common.component.MessengerVo;
import com.rod.api.user.model.UserDto;
import com.rod.api.user.service.UserServiceImpl;
import com.rod.api.user.model.User;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.sql.SQLException;
import java.util.*;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/users")
@Slf4j
public class UserController {
    private final UserServiceImpl service;

    @ApiResponses(value = {
            @ApiResponse(responseCode = "400", description = "Invalid ID supplied"),
            @ApiResponse(responseCode = "404", description = "Customer not found")})
    @PostMapping(path = "")
    public ResponseEntity<MessengerVo> join(@RequestBody Map<String, UserDto> param) {
        log.info("입력받은 정보 : {}", param);
        return ResponseEntity.ok(new MessengerVo());
    }

    @ApiResponses(value = {
            @ApiResponse(responseCode = "400", description = "Invalid ID supplied"),
            @ApiResponse(responseCode = "404", description = "Customer not found")})
    @PostMapping(path = "/login")
    public ResponseEntity<MessengerVo> id(@RequestBody Map<String, ?> map) {
        Map<String, String> respMap = new HashMap<>();
//        User optUser = service.findByUsername((String) map.get("id")).orElse(null);
//        if(optUser == null) {
//           respMap.put("message", "MessengerVo.FAIL");
//        } else if(!optUser.getPassword().equals(map.get("pw"))) {
//           respMap.put("message", "MessengerVo.WRONG_PASSWORD");
//        } else {
//           respMap.put("message", "MessengerVo.SUCCESS");
//        }

        return ResponseEntity.ok(new MessengerVo());
    }

    @ApiResponses(value = {
            @ApiResponse(responseCode = "400", description = "Invalid ID supplied"),
            @ApiResponse(responseCode = "404", description = "Customer not found")})
    @GetMapping(path = "/api/all-users")
    public ResponseEntity<List<UserDto>> findAll(Pageable pageable) throws SQLException {
        return ResponseEntity.ok(new ArrayList<>());
    }

    @ApiResponses(value = {
            @ApiResponse(responseCode = "400", description = "Invalid ID supplied"),
            @ApiResponse(responseCode = "404", description = "Customer not found")})
    @GetMapping(path = "/{id}")
    public ResponseEntity<Map<String, ?>> findUserById(@PathVariable Long id) {
        Map<String, String> response = new HashMap<>();
        return ResponseEntity.ok(response);
    }
}
