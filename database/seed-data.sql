/* Initialize DB with some seed data */
USE `ecommerce_api_db`;

-- DONT MODIFY THIS MIGRATION
-- it is used by Xest local development pipeline
INSERT INTO `migrations` (
  name,
  run_on
) VALUES (
  "/20211107064324-seed-data",
  "20211107064324"
);

-- YOU CAN MODIFY BELOW THIS LINE
INSERT INTO user_types (user_type_id, user_type)
VALUES (1, "admin");
INSERT INTO user_types (user_type_id, user_type)
VALUES (2, "user");

INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (1, "Ahmet", "Akinsql", "ahmet@akinsql.com", SHA2(CONCAT("password","SUPER_DUPER_SECRET"), 224), 1, "2020-11-20 12:00:00");
INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (2, "Joe", "Bloggs","joebloggs@gmail.com", SHA2(CONCAT("password","SUPER_DUPER_SECRET"), 224), 2, "2020-11-20 12:00:00");
INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (3, "Jim", "Bloggs" , "jimbloggs@yahoo.com", SHA2(CONCAT("password","SUPER_DUPER_SECRET"), 224), 2, "2020-11-20 12:00:00");



INSERT INTO products (product_name, product_price, product_stock)
VALUES ("Iphone 15", 50000, 10);

INSERT INTO products (product_name, product_price, product_stock)
VALUES ("Playstation 5", 18000, 3);

INSERT INTO products (product_name, product_price, product_stock)
VALUES ("Macbook", 60000, 5);


INSERT INTO customers (customer_name, customer_email)
VALUES ("Aral", "aral@gmail.com");

INSERT INTO customers (customer_name, customer_email)
VALUES ("Erdem", "ayhanerdem510@gmail.com");


INSERT INTO customers (customer_name, customer_email)
VALUES ("Hazan", "hazan@gmail.com");



INSERT INTO orders (customer_id, order_date, order_status)
VALUES (1, 2023-01-15, "pending");

INSERT INTO orders (customer_id, order_date, order_status)
VALUES (2, 2023-02-3, "on-route");

INSERT INTO orders (customer_id, order_date, order_status)
VALUES (3, 2023-06-12, "received");