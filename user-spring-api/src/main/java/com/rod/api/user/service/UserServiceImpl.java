package com.rod.api.user.service;

import com.rod.api.common.component.PageRequestVo;
import com.rod.api.user.UserRepository;
import com.rod.api.user.model.User;
import com.rod.api.user.model.UserDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {
    private final UserRepository repository;

    @Override
    public UserDto save(UserDto dto) {
        return entityToDto(Optional.of(repository.save(dtoToEntity(dto))));
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }

    @Override
    public List<UserDto> findAll(PageRequestVo vo) {
        List<UserDto> userDtoList = new ArrayList<>();
        userDtoList.add((UserDto) repository.findAll((Pageable) vo));
        return userDtoList;
    }

    @Override
    public Optional<UserDto> findById(Long id) {
        return Optional.of(entityToDto(repository.findById(id)));
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
    public String updatePassword(User user) {
        return null;
    }

    @Override
    public List<?> findUsersByName(String name) {
        return null;
    }

    @Override
    public List<?> findUsersByJob(String job) {
        return null;
    }
}
