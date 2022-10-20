/*
  Warnings:

  - You are about to drop the `_EventAttendee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_EventRequest` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `createdBy` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_EventAttendee" DROP CONSTRAINT "_EventAttendee_A_fkey";

-- DropForeignKey
ALTER TABLE "_EventAttendee" DROP CONSTRAINT "_EventAttendee_B_fkey";

-- DropForeignKey
ALTER TABLE "_EventRequest" DROP CONSTRAINT "_EventRequest_A_fkey";

-- DropForeignKey
ALTER TABLE "_EventRequest" DROP CONSTRAINT "_EventRequest_B_fkey";

-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "createdBy" TEXT NOT NULL;

-- DropTable
DROP TABLE "_EventAttendee";

-- DropTable
DROP TABLE "_EventRequest";

-- CreateTable
CREATE TABLE "_Invitations" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Invitations_AB_unique" ON "_Invitations"("A", "B");

-- CreateIndex
CREATE INDEX "_Invitations_B_index" ON "_Invitations"("B");

-- AddForeignKey
ALTER TABLE "_Invitations" ADD CONSTRAINT "_Invitations_A_fkey" FOREIGN KEY ("A") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Invitations" ADD CONSTRAINT "_Invitations_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
