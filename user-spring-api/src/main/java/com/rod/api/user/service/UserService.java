package com.rod.api.user.service;

import com.rod.api.common.service.command.CommandService;
import com.rod.api.common.service.query.QueryService;
import com.rod.api.user.model.User;
import com.rod.api.user.model.UserDto;

import java.util.List;
import java.util.Optional;

public interface UserService  extends CommandService<UserDto>, QueryService<UserDto> {
    String updatePassword(User user);
    List<?> findUsersByName(String name);
    List<?> findUsersByJob(String job);
    default User dtoToEntity(UserDto dto) {
        return User.builder()
                .id(dto.getId())
                .name(dto.getName())
                .job(dto.getJob())
                .address(dto.getAddress())
                .password(dto.getPassword())
                .phoneNumber(dto.getPhoneNumber())
                .username(dto.getUsername())
                .build();
    }

    default UserDto entityToDto(Optional<User> optional) {
        User user = optional.get();
        return UserDto.builder()
                .id(user.getId())
                .name(user.getName())
                .job(user.getJob())
                .address(user.getAddress())
                .password(user.getPassword())
                .phoneNumber(user.getPhoneNumber())
                .username(user.getUsername())
                .build();
    }
}
