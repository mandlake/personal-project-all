CREATE TABLE users (
                       id INT PRIMARY KEY,
                       username VARCHAR(50),
                       password VARCHAR(50),
                       name VARCHAR(100),
                       job VARCHAR(100),
                       address VARCHAR(255),
                       phone_number VARCHAR(20),
                       height FLOAT,
                       weight FLOAT
);

CREATE TABLE articles (
                          id INT PRIMARY KEY,
                          title VARCHAR(255),
                          content TEXT,
                          writer VARCHAR(100),
                          date DATE,
                          user_id INT,
                          FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE boards (
                        id INT PRIMARY KEY,
                        board_name VARCHAR(255),
                        board_type VARCHAR(100)
);