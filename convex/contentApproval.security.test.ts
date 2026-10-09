import test from "node:test";
import assert from "node:assert/strict";
import { getNotesWithAuthors } from "./gateway";
import { createMockConvexCtx } from "./testUtils";
const getNotesWithAuthorsHandler = (getNotesWithAuthors as any)._handler as (ctx: any, args: any) => Promise<any>;

function createPendingCtx(tables = {}) {
  return createMockConvexCtx({
    identity: {
      subject: "student_pending",
      role: "student",
    },
    tables: {
      users: [
        {
          _id: "users:student_pending",
          userId: "student_pending",
          username: "Pending Student",
          role: "student",
          accountStatus: "pending",
          createdAt: 1,
        },
      ],
      ...tables,
    },
  });
}

test("getNotesWithAuthors rejects a pending account instead of exposing protected notes", async () => {
  const { ctx } = createPendingCtx({
    notes: [
      {
        _id: "notes:1",
        noteId: "note:chemistry:1:1:0",
        ownerUserId: "student_pending",
        subject: "chemistry",
        title: "Atoms",
        lastEditedAt: 1,
      },
    ],
  });

  await assert.rejects(
    () => getNotesWithAuthorsHandler(ctx, { subject: "chemistry" }),
    /Account pending approval\./
  );
});