/*** Add groups table and insert initial data ***/

CREATE TABLE "groups"
(
    gid SERIAL PRIMARY KEY,
    "name" VARCHAR NOT NULL,
    avatar VARCHAR,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
)
WITH (
  OIDS = FALSE
);

INSERT INTO "groups" ("name", avatar, created_at, updated_at)
  VALUES ('Froggies', '', NOW(), NOW());

INSERT INTO "groups" ("name", avatar, created_at, updated_at)
  VALUES ('Slothies', '', NOW(), NOW());

INSERT INTO "groups" ("name", avatar, created_at, updated_at)
  VALUES ('Crocodiles', '', NOW(), NOW());

INSERT INTO "groups" ("name", avatar, created_at, updated_at)
  VALUES ('Kangaroos', '', NOW(), NOW());