package com.rod.api.common.command;

import com.rod.api.common.component.MessengerVo;

public interface CommandService<T> {
    MessengerVo save(T t);
    String insertMany();
    String delete(T t);
}
