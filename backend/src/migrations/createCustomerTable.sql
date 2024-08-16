CREATE TABLE customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    level VARCHAR(255) NOT NULL,
    favoriteMenu VARCHAR(255) NOT NULL,
    totalTransaction DECIMAL(10, 2) NOT NULL
);
