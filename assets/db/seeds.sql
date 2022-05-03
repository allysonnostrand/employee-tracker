INSERT INTO department (department_name)
VALUES  ("testing"),
        ("stuff"),
        ( "some more stuff");

INSERT INTO roles (id, title, salary, department_id)
VALUES  (10,"tester", 20.0, 1),
        (20, "stuff do-er", 22.1, 2),
        (30, "some more stuff do-er", 10.1, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  (15,"bob", "builder", 20, NULL),
        (25,"jill", "builds", 10, 20),
        (35,"tom", "lazy", 30, 20);


SELECT * FROM department;

SELECT * FROM roles;

SELECT * FROM employee;