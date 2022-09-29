/*
  Warnings:

  - Added the required column `name` to the `PLaylist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Song` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PLaylist" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Song" ADD COLUMN     "name" TEXT NOT NULL;
