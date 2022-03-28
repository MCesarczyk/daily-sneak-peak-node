/*** Add avatar column to children ***/

ALTER TABLE "children"
  ADD COLUMN avatar character(50) ;

UPDATE "children" SET avatar = '';

ALTER TABLE "children"
  ALTER COLUMN avatar SET NOT NULL; 