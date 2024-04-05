package com.rod.api.common.service.command;

public interface CommandService<T> {
    T save(T t);
    void deleteById(Long id);
}