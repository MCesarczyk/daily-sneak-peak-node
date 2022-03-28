/*** Add children table and insert initial data ***/

CREATE TABLE "children"
(
    id serial,
    "name" character(20) NOT NULL,
    surname character(24) NOT NULL,
    "group" character(20) NOT NULL,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
)
WITH (
  OIDS = FALSE
);

INSERT INTO "children" ("name", surname, "group", created_at, updated_at)
  VALUES ('Mary', 'Jane', 'Froggies', NOW(), NOW());

INSERT INTO "children" ("name", surname, "group", created_at, updated_at)
  VALUES ('Jack', 'Smith', 'Kangaroos', NOW(), NOW());

INSERT INTO "children" ("name", surname, "group", created_at, updated_at)
  VALUES ('Angie', 'Brooks', 'Slothies', NOW(), NOW());

INSERT INTO "children" ("name", surname, "group", created_at, updated_at)
  VALUES ('Mark', 'Antoin', 'Kangaroos', NOW(), NOW());

INSERT INTO "children" ("name", surname, "group", created_at, updated_at)
  VALUES ('Dorothy', 'Ozzbourne', 'Crocodiles', NOW(), NOW());

INSERT INTO "children" ("name", surname, "group", created_at, updated_at)
  VALUES ('Peter', 'Black', 'Froggies', NOW(), NOW());