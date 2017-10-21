--------------
-- Categories
--------------
INSERT INTO `cl_db`.`categories` (`name`, `photo`) VALUES ('Books', '/imgs/books.png');
INSERT INTO `cl_db`.`categories` (`name`, `photo`) VALUES ('Clothes', '/imgs/clothes.png');
INSERT INTO `cl_db`.`categories` (`name`, `photo`) VALUES ('Computers', '/imgs/computers.png');
INSERT INTO `cl_db`.`categories` (`name`, `photo`) VALUES ('Electronics', '/imgs/electronics.png');
INSERT INTO `cl_db`.`categories` (`name`, `photo`) VALUES ('Fitness', '/imgs/fitness.png');
INSERT INTO `cl_db`.`categories` (`name`, `photo`) VALUES ('Furniture', '/imgs/furniture.png');
INSERT INTO `cl_db`.`categories` (`name`, `photo`) VALUES ('Cars & Trucks', '/imgs/cars.png');
INSERT INTO `cl_db`.`categories` (`name`, `photo`) VALUES ('Tools', '/imgs/tools.png');
INSERT INTO `cl_db`.`categories` (`name`, `photo`) VALUES ('Toys & Games', '/imgs/toys.png');

-------------
-- Posts
-------------
INSERT INTO `cl_db`.`posts` (`name`, `zip`, `location`, `postbody`, `address`, `phone`, `price`, `obo`, `notifications`, `userId`, `categoryId`)
VALUES (
'Pharmacology by George Brenner',
'20904',
'Silver Spring',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula neque, accumsan eget facilisis id, feugiat quis dui. Proin pretium dictum velit sit amet finibus. In suscipit finibus posuere. Mauris mollis diam id tempus vehicula. In blandit massa eu pharetra porta. Duis dapibus velit porttitor, sagittis mi vel, tempus enim. Mauris molestie sit amet ligula in laoreet. Ut ligula nibh, pellentesque a aliquet et, egestas ut felis. Proin quis tristique felis, in elementum erat. Maecenas faucibus sem ipsum, in luctus mi finibus quis. Curabitur in augue varius, pretium odio quis, mollis ex. Vivamus sit amet vestibulum ligula.',
'13659 Cedar Creek Ln. Silver Spring MD',
'3019082604',
'49',
'false',
'true',
'1',
'1');

INSERT INTO `cl_db`.`posts` (`name`, `zip`, `location`, `postbody`, `address`, `phone`, `price`, `obo`, `notifications`, `userId`, `categoryId`)
VALUES (
'Lord of the Flies',
'22203',
'Arlington',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula neque, accumsan eget facilisis id, feugiat quis dui. Proin pretium dictum velit sit amet finibus. In suscipit finibus posuere. Mauris mollis diam id tempus vehicula. In blandit massa eu pharetra porta. Duis dapibus velit porttitor, sagittis mi vel, tempus enim. Mauris molestie sit amet ligula in laoreet. Ut ligula nibh, pellentesque a aliquet et, egestas ut felis. Proin quis tristique felis, in elementum erat. Maecenas faucibus sem ipsum, in luctus mi finibus quis. Curabitur in augue varius, pretium odio quis, mollis ex. Vivamus sit amet vestibulum ligula.',
'950 North Glebe Rd. Arlington VA',
'3019082604',
'49',
'false',
'true',
'1',
'1');
