/*
  Warnings:

  - Added the required column `createdBy` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "createdBy" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "_EventRequest" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventAttendee" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EventRequest_AB_unique" ON "_EventRequest"("A", "B");

-- CreateIndex
CREATE INDEX "_EventRequest_B_index" ON "_EventRequest"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventAttendee_AB_unique" ON "_EventAttendee"("A", "B");

-- CreateIndex
CREATE INDEX "_EventAttendee_B_index" ON "_EventAttendee"("B");

-- AddForeignKey
ALTER TABLE "_EventRequest" ADD CONSTRAINT "_EventRequest_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventRequest" ADD CONSTRAINT "_EventRequest_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventAttendee" ADD CONSTRAINT "_EventAttendee_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventAttendee" ADD CONSTRAINT "_EventAttendee_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
