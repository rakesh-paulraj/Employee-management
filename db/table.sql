CREATE TABLE employee (
    empId INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    age INTEGER NOT NULL,
    dept VARCHAR(80) NOT NULL,
    hiredate DATE NOT NULL,
    salary DECIMAL NOT NULL,
    marital_status VARCHAR(20) NOT NULL,
    UNIQUE INDEX Name_UNIQUE (name ASC) VISIBLE
);