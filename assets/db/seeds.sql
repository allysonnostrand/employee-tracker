INSERT INTO department (department_name)
VALUES  ("testing"),
        ("stuff"),
        ( "some more stuff");

INSERT INTO roles (title, salary, department_id)
VALUES  ("tester", 20.0, 1),
        ("stuff do-er", 22.1, 2),
        ("some more stuff do-er", 10.1, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("bob", "builder", 1, NULL),
        ("jill", "builds", 2, NULL),
        ("tom", "lazy", 3, NULL);


SELECT * FROM department;

SELECT * FROM roles;

SELECT * FROM employee;