-- ここではuserはreserved wordなので""で囲ってあげる
CREATE TABLE "user" (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    nickname VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    first_name_kana VARCHAR(100) NOT NULL,
    last_name_kana VARCHAR(100) NOT NULL,
    year INT NOT NULL,
    month INT NOT NULL,
    day INT NOT NULL
);
