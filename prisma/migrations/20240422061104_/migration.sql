/*
  Warnings:

  - You are about to drop the column `scope` on the `StravaRefreshToken` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "StravaRefreshToken" DROP COLUMN "scope";
