-- ここではuserはreserved wordなので""で囲ってあげる
CREATE TABLE "user" (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    nickname VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    "firstName" VARCHAR(100) NOT NULL,
    "lastName" VARCHAR(100) NOT NULL,
    "firstNameKana" VARCHAR(100) NOT NULL,
    "lastNameKana" VARCHAR(100) NOT NULL,
    year INT NOT NULL,
    month INT NOT NULL,
    day INT NOT NULL
);

INSERT INTO "user" (nickname, email, password, "firstName", "lastName", "firstNameKana", "lastNameKana", year, month, day) VALUES ('やまさん', 'yamato@gmail.com', 'yamato1234', '大和', '撫子', 'ヤマト', 'ナデシコ', 2012, 12, 31);
INSERT INTO "user" (nickname, email, password, "firstName", "lastName", "firstNameKana", "lastNameKana", year, month, day) VALUES ('えり', 'erika@gmail.com', 'eri1234', '大和', 'えり', 'ヤマト', 'エリ', 2012, 12, 31);
INSERT INTO "user" (nickname, email, password, "firstName", "lastName", "firstNameKana", "lastNameKana", year, month, day) VALUES ('たけ', 'takeru@gmail.com', 'take1234', '大和', 'たけ', 'ヤマト', 'タケ', 2012, 12, 31);
INSERT INTO "user" (nickname, email, password, "firstName", "lastName", "firstNameKana", "lastNameKana", year, month, day) VALUES ('まさ', 'masa@gmail.com', 'masa1234', '大和', 'まさる', 'ヤマト', 'マサル', 2012, 12, 31);

CREATE TABLE item (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    img_url VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    description VARCHAR(100),
    likes INT DEFAULT 0,
    user_id INT REFERENCES "user"(id)
);


INSERT INTO item(img_url, price, description, user_id) VALUES ('https://static.mercdn.net/thumb/photos/m61047450015_1.jpg?1602292425', 4500, '☆リーバイス☆LEVI''S550 ブーツカットデニムパンツ　ジーンズ', 1);
INSERT INTO item(img_url, price, description, user_id) VALUES ('https://static.mercdn.net/thumb/photos/m61047450015_1.jpg?1602292425', 4500, '☆リーバイス☆LEVI''S550 ブーツカットデニムパンツ　ジーンズ', 1);
INSERT INTO item(img_url, price, description, user_id) VALUES ('https://static.mercdn.net/thumb/photos/m61047450015_1.jpg?1602292425', 4500, '☆リーバイス☆LEVI''S550 ブーツカットデニムパンツ　ジーンズ', 1);
INSERT INTO item(img_url, price, description, user_id) VALUES ('https://static.mercdn.net/thumb/photos/m61047450015_1.jpg?1602292425', 4500, '☆リーバイス☆LEVI''S550 ブーツカットデニムパンツ　ジーンズ', 1);
INSERT INTO item(img_url, price, description, user_id) VALUES ('https://static.mercdn.net/thumb/photos/m61047450015_1.jpg?1602292425', 4500, '☆リーバイス☆LEVI''S550 ブーツカットデニムパンツ　ジーンズ', 1);
INSERT INTO item(img_url, price, description, user_id) VALUES ('https://static.mercdn.net/thumb/photos/m61047450015_1.jpg?1602292425', 4500, '☆リーバイス☆LEVI''S550 ブーツカットデニムパンツ　ジーンズ', 1);
INSERT INTO item(img_url, price, description, user_id) VALUES ('https://static.mercdn.net/thumb/photos/m61047450015_1.jpg?1602292425', 4500, '☆リーバイス☆LEVI''S550 ブーツカットデニムパンツ　ジーンズ', 1);
INSERT INTO item(img_url, price, description, user_id) VALUES ('https://static.mercdn.net/thumb/photos/m61047450015_1.jpg?1602292425', 4500, '☆リーバイス☆LEVI''S550 ブーツカットデニムパンツ　ジーンズ', 1);
INSERT INTO item(img_url, price, description, user_id) VALUES ('https://static.mercdn.net/thumb/photos/m61047450015_1.jpg?1602292425', 4500, '☆リーバイス☆LEVI''S550 ブーツカットデニムパンツ　ジーンズ', 1);
INSERT INTO item(img_url, price, description, user_id) VALUES ('https://static.mercdn.net/thumb/photos/m61047450015_1.jpg?1602292425', 4500, '☆リーバイス☆LEVI''S550 ブーツカットデニムパンツ　ジーンズ', 1);
INSERT INTO item(img_url, price, description, user_id) VALUES ('https://static.mercdn.net/thumb/photos/m61047450015_1.jpg?1602292425', 4500, '☆リーバイス☆LEVI''S550 ブーツカットデニムパンツ　ジーンズ', 1);
INSERT INTO item(img_url, price, description, user_id) VALUES ('https://static.mercdn.net/thumb/photos/m61047450015_1.jpg?1602292425', 4500, '☆リーバイス☆LEVI''S550 ブーツカットデニムパンツ　ジーンズ', 1);
INSERT INTO item(img_url, price, description, user_id) VALUES ('https://static.mercdn.net/thumb/photos/m61047450015_1.jpg?1602292425', 4500, '☆リーバイス☆LEVI''S550 ブーツカットデニムパンツ　ジーンズ', 1);

