/*
  Warnings:

  - Added the required column `cake` to the `Consument` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Consument` ADD COLUMN `cake` VARCHAR(191) NOT NULL,
    MODIFY `telpNo` VARCHAR(191) NOT NULL;
