/*** Add columns to groups ***/

ALTER TABLE "groups"
  ADD COLUMN description VARCHAR(255),
  ADD COLUMN notes VARCHAR(255);