package com.rod.api.user.controller;

import com.rod.api.user.service.UserServiceImpl;
import com.rod.api.user.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.*;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserServiceImpl service;
    private final UserRepository repository;

    @PostMapping(path = "/api/login")
    public Map<String, ?> id(@RequestBody Map<String, ?> map) {
        Map<String, String> respMap = new HashMap<>();
        User optUser = repository.findByUsername((String) map.get("id")).orElse(null);
        if(optUser == null) {
           respMap.put("message", "MessengerVo.FAIL");
        } else if(!optUser.getPassword().equals(map.get("pw"))) {
           respMap.put("message", "MessengerVo.WRONG_PASSWORD");
        } else {
           respMap.put("message", "MessengerVo.SUCCESS");
        }

        return respMap;
    }

    @PostMapping("/api/join")
    public Map<String, ?> join(@RequestBody Map<String, ?> map) {
        Map<String, String> respMap = new HashMap<>();
        repository.save(User.builder()
                .username((String) map.get("id"))
                .password((String) map.get("pw"))
                .name((String) map.get("name"))
                .phoneNumber((String) map.get("phone"))
                .address((String) map.get("address"))
                .job((String) map.get("job"))
                .build());
        System.out.println(respMap);
       respMap.put("message", "success");
        return respMap;
    }

    @GetMapping(path = "/api/all-users")
    public Map<String, ?> findAll() throws SQLException {
        Map<String, Object> map = new HashMap<>();

        List<User> list = service.findAll();
        if(list.isEmpty()) {
            map.put("message", "fail");
        } else {
            map.put("message", "success");
            System.out.println("리스트 사이즈 : "+list.size());
        }
        map.put("result", list);
        System.out.println(map.get("result"));
        return map;
    }
}
