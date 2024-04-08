INSERT INTO users(id, mod_date, register_date, address, job, name, password, phone_number, username)
SELECT
    id,
    NOW() AS mod_date,
    NOW() AS register_date,
    CONCAT('Address ', id) AS address,
    CONCAT('Job ', id) AS job,
    CONCAT('Name ', id) AS name,
    CONCAT('Password ', id) AS password,
    CONCAT('Phone ', id) AS phone_number,
    CONCAT('User ', id) AS username
FROM
    (SELECT 1 AS id UNION ALL
     SELECT 2 UNION ALL
     SELECT 3 UNION ALL
     SELECT 4 UNION ALL
     SELECT 5 UNION ALL
     SELECT 6 UNION ALL
     SELECT 7 UNION ALL
     SELECT 8 UNION ALL
     SELECT 9 UNION ALL
     SELECT 10 UNION ALL
     SELECT 11 UNION ALL
     SELECT 12 UNION ALL
     SELECT 13 UNION ALL
     SELECT 14 UNION ALL
     SELECT 15 UNION ALL
     SELECT 16 UNION ALL
     SELECT 17 UNION ALL
     SELECT 18 UNION ALL
     SELECT 19 UNION ALL
     SELECT 20) AS id_list;