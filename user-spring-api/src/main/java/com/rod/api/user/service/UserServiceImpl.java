package com.rod.api.user.service;

import com.rod.api.common.component.MessengerVo;
import com.rod.api.user.UserRepository;
import com.rod.api.user.model.User;
import com.rod.api.user.model.UserDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {
    private final UserRepository repository;

    @Override
    public MessengerVo save(UserDto t) {
        User ent = repository.save(dtoToEntity(t));
        return MessengerVo.builder().message("True").build();
    }

    @Override
    public MessengerVo deleteById(Long id) {
        repository.deleteById(id);
        return MessengerVo.builder().message("True").build();
    }

    @Override
    public List<UserDto> findAll() {
        return repository.findAll().stream().map(i -> entityToDto(Optional.ofNullable(i))).toList();
    }

    @Override
    public Optional<UserDto> findById(Long id) {
        return repository.findById(id).map(i -> entityToDto(Optional.of(i)));
    }

    @Override
    public long count() {
        return repository.count();
    }

    @Override
    public boolean existsById(Long id) {
        return repository.existsById(id);
    }

    @Override
    public MessengerVo modify(UserDto user) {
        repository.save(dtoToEntity(user));
        return MessengerVo.builder().message("True").build();
    }

    @Override
    public List<UserDto> findUsersByName(String name) {
        return repository.findUsersByName(name).stream().map(i -> entityToDto(Optional.ofNullable(i))).toList();
    }

    @Override
    public List<UserDto> findUsersByJob(String job) {
        return repository.findUsersByJob(job).stream().map(i -> entityToDto(Optional.ofNullable(i))).toList();
    }


    @Override
    public Optional<User> findUserByUsername(String username) {
        return repository.findByUsername(username);
    }

    @Override
    public MessengerVo login(UserDto param) {
        return MessengerVo.builder()
                .message(repository
                        .findByUsername(param.getUsername())
                        .map(value -> value
                                .getPassword()
                                .equals(param
                                        .getPassword()) ? "True" : "False")
                        .orElse("Not President"))
                .build();
    }
}
