/*
  Warnings:

  - You are about to drop the column `driverLicense` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isAdmin` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "driverLicense",
DROP COLUMN "isAdmin";
