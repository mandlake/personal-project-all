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
                .username(dto.getUsername())
                .password(dto.getPassword())
                .name(dto.getName())
                .phoneNumber(dto.getPhoneNumber())
                .job(dto.getJob())
                .build();
    }

    default UserDto entityToDto(User user){
        return UserDto.builder()
                .username(user.getUsername())
                .password(user.getPassword())
                .name(user.getName())
                .phoneNumber(user.getPhoneNumber())
                .job(user.getJob())
                .build();
    }
    MessengerVo login(UserDto param);


    // default UserDto entityToDto(Optional<User> optional){
    //     return UserDto.builder().build();
    // }
}
