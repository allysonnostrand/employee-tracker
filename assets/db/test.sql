SELECT 
    erd.id,
    erd.first_name,
    erd.last_name,
    erd.role_id,
    erd.title,
    erd.salary,
    erd.department_id,
    erd.department_name,
    m.first_name manager_first,
    m.last_name manager_last
FROM (
    SELECT * FROM employee e LEFT JOIN 
        (
            SELECT 
                r.id role_id,
                title,
                salary,
                department_id,
                department_name
            FROM roles r 
            LEFT JOIN department d
            ON r.department_id = d.id
        ) rd
    USING (role_id)) erd
LEFT JOIN employee m
ON erd.manager_id = m.id
