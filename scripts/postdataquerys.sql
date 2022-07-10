USE POST_DATABASE_TBTB;

/*-------- TAGS---------- */

/* insert */
INSERT INTO tags (name_tag,createdAt,updatedAt) VALUES ('tag1',now(),now());
INSERT INTO tags (name_tag,createdAt,updatedAt) VALUES ('tag2',now(),now());
INSERT INTO tags (name_tag,createdAt,updatedAt) VALUES ('tag3',now(),now());
INSERT INTO tags (name_tag,createdAt,updatedAt) VALUES ('tag4',now(),now());
INSERT INTO tags (name_tag,createdAt,updatedAt) VALUES ('tag5',now(),now());

/* select */

SELECT * FROM tags WHERE 1;
SELECT T.name_tag FROM tags AS T;
SELECT T.name_tag  FROM tags AS P WHERE P.id=1;

/* update */

UPDATE tags AS T SET T.name_tag='tag 5 updated' WHERE T.id=5;

/* delete */
/*se tiene que borrar la llave foranea donde se este usando tags*/
DELETE FROM  posts_tags AS PT WHERE PT.tag_id=5;
DELETE FROM  tags AS T WHERE T.id=5;



/*-------- POSTS---------- */

/* insert */
INSERT INTO posts (title,description_post,createdAt,updatedAt) VALUES ('Test1','making insert test 1',now(),now());
INSERT INTO posts (title,description_post,createdAt,updatedAt) VALUES ('Test2','making insert test 2',now(),now());
INSERT INTO posts (title,description_post,createdAt,updatedAt) VALUES ('Test3','making insert test 3',now(),now());
INSERT INTO posts (title,description_post,createdAt,updatedAt) VALUES ('Test4','making insert test 4',now(),now());
INSERT INTO posts (title,description_post,createdAt,updatedAt) VALUES ('Test5','making insert test 5',now(),now());

/* select */
SELECT * FROM posts WHERE 1;
SELECT P.description_post,P.title FROM posts AS P;
SELECT P.description_post,P.title FROM posts AS P WHERE P.id=1;

/* update */

UPDATE post AS P SET P.title='Test5 updated' WHERE T.id=5;

/* delete */
/*se tiene que borrar la llave foranea donde se este usando post*/
DELETE FROM  posts_tags AS PT WHERE PT.post_id=5;
DELETE FROM comments AS C where C.post_id=5;
DELETE FROM  posts AS P WHERE P.id=5;

/* --------- COMMENTS --------- */

/* insert */
INSERT INTO comments (post_id,description_commets,createdAt,updatedAt) VALUES (2,'Buen test',now(),now());
INSERT INTO comments (post_id,description_commets,createdAt,updatedAt) VALUES (2,'Buen test2',now(),now());
INSERT INTO comments (post_id,description_commets,createdAt,updatedAt) VALUES (1,'Buen test3',now(),now());
INSERT INTO comments (post_id,description_commets,createdAt,updatedAt) VALUES (2,'Buen test4',now(),now());
INSERT INTO comments (post_id,description_commets,createdAt,updatedAt) VALUES (5,'Buen test5',now(),now());

/* select */
SELECT * FROM comments WHERE 1;
SELECT C.description_commets FROM comments AS C;
SELECT C.description_commets FROM comments AS C WHERE C.id=1;

/* update */

UPDATE comments AS C SET C.description_commets='Buen test4 updated' WHERE C.id=4;

/* delete */

DELETE FROM  comments AS C WHERE C.id=4;

/* --------- POSTS TAGS --------- */
INSERT INTO posts_tags (post_id,tag_id,createdAt,updatedAt)  VALUES (1,2,now(),now());
INSERT INTO posts_tags (post_id,tag_id,createdAt,updatedAt) VALUES (1,3,now(),now());
INSERT INTO posts_tags (post_id,tag_id,createdAt,updatedAt) VALUES (1,5,now(),now());
INSERT INTO posts_tags (post_id,tag_id,createdAt,updatedAt)  VALUES (1,4,now(),now());


/* UNION */
SELECT title FROM posts UNION SELECT description_commets AS title FROM comments;

/* inner join */
SELECT * FROM comments as C  INNER JOIN posts as P ON C.post_id = P.id WHERE P.id = 1;
SELECT * FROM comments as C  INNER JOIN posts as P ON C.post_id = P.id WHERE  1;

/* left join */
SELECT * FROM  posts_tags as PT LEFT JOIN tags as T ON PT.tag_id = T.id WHERE  1;
SELECT P.description_post FROM  posts_tags as PT LEFT JOIN tags as T ON PT.tag_id = T.id INNER JOIN posts as P ON PT.post_id= P.id WHERE  1;
SELECT  * FROM  posts_tags as PT LEFT JOIN tags as T ON PT.tag_id = T.id INNER JOIN posts as P ON PT.post_id= P.id WHERE  1;

/* CASE */
SELECT C.description_commets, CASE WHEN description_commets = 'Buen test' THEN 'APROVADO' ELSE 'BANEADO' END AS CRITICA FROM comments AS C;
SELECT T.name_tag, CASE WHEN T.name_tag = 'tag1' THEN 'APROVADO'    ELSE 'BANEADO'END AS CRITICA FROM tags AS T;





