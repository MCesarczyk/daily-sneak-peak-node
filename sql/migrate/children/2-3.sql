/*** Add avatar column to children ***/

ALTER TABLE "children"
  ADD COLUMN avatar VARCHAR;

UPDATE "children" SET avatar = '';

ALTER TABLE "children"
  ALTER COLUMN avatar SET NOT NULL; 