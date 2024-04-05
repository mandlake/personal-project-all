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
        return User.builder().build();
    }

    default UserDto entityToDto(Optional<User> optional) {
        return UserDto.builder().build();
    }
}
