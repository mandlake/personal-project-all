package com.rod.api.user.service;

import com.rod.api.common.command.CommandService;
import com.rod.api.common.query.QueryService;
import com.rod.api.user.model.User;

public interface UserService  extends CommandService<User>, QueryService<User> {
}
