CREATE TABLE items (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    imgUrl VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    description VARCHAR(100),
    likes INT DEFAULT 0
);

