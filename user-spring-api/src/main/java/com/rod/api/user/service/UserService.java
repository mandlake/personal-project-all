package com.rod.api.user.service;

import com.rod.api.common.component.MessengerVo;
import com.rod.api.common.service.command.CommandService;
import com.rod.api.common.service.query.QueryService;
import com.rod.api.user.model.User;
import com.rod.api.user.model.UserDto;

import java.util.List;
import java.util.Optional;

public interface UserService  extends CommandService<UserDto>, QueryService<UserDto> {
    MessengerVo modify(UserDto user);
    List<UserDto> findUsersByName(String name);
    List<UserDto> findUsersByJob(String job);
    Optional<User> findUserByUsername(String username);

    default User dtoToEntity(UserDto dto){
        return User.builder()
                .id(dto.getId())
                .username(dto.getUsername())
                .password(dto.getPassword())
                .name(dto.getName())
                .phoneNumber(dto.getPhoneNumber())
                .address(dto.getAddress())
                .job(dto.getJob())
                .articles(dto.getArticles())
                .build();
    }

    default UserDto entityToDto(Optional<User> optional) {
        User user = optional.get();
        return UserDto.builder()
                .id(user.getId())
                .username(user.getUsername())
                .password(user.getPassword())
                .name(user.getName())
                .phoneNumber(user.getPhoneNumber())
                .address(user.getAddress())
                .job(user.getJob())
                .articles(user.getArticles())
                .build();
    }
    MessengerVo login(UserDto param);
}
