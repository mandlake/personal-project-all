package com.rod.api.common.service.command;

import com.rod.api.common.component.MessengerVo;

public interface CommandService<T> {
    MessengerVo save(T t);
    MessengerVo deleteById(Long id);
    MessengerVo modify(T t);
}