CREATE TABLE solutions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    shortDescription TEXT,
    description TEXT,
    benefits JSON -- Stores the array of benefits
);