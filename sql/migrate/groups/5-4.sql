/*** Remove columns from groups ***/

ALTER TABLE "groups"
  DROP COLUMN description
  DROP COLUMN notes;