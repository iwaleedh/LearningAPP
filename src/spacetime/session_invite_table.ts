// Phase 2 – hand-authored; run `spacetime generate` after deploying the Rust module.
/* eslint-disable */
/* tslint:disable */
import { t as __t } from "spacetimedb";

export default __t.row({
  inviteId:     __t.u64().primaryKey().name("invite_id"),
  sessionId:    __t.u64().name("session_id"),
  fromIdentity: __t.identity().name("from_identity"),
  toUsername:   __t.string().name("to_username"),
  status:       __t.string(), // "pending" | "accepted" | "declined"
  createdAt:    __t.u64().name("created_at"),
});
