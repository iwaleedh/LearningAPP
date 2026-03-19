// Phase 2 – hand-authored; run `spacetime generate` after deploying the Rust module.
/* eslint-disable */
/* tslint:disable */
import { t as __t } from "spacetimedb";

export default __t.row({
  participantId: __t.u64().primaryKey().name("participant_id"),
  sessionId:     __t.u64().name("session_id"),
  userIdentity:  __t.identity().name("user_identity"),
  role:          __t.string(), // "host" | "editor" | "viewer"
  joinedAt:      __t.u64().name("joined_at"),
});
