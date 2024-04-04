package com.rod.api.common.command;

import com.rod.api.common.component.Messenger;

public interface CommandService<T> {
    Messenger save(T t);
    String insertMany();
    String delete(T t);
}
