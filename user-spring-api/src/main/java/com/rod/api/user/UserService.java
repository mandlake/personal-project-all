package com.rod.api.user;

import com.rod.api.common.command.CommandService;
import com.rod.api.common.query.QueryService;

public interface UserService  extends CommandService<User>, QueryService<User> {
}
