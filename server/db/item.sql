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

