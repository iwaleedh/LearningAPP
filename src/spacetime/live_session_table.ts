// Phase 2 – hand-authored; run `spacetime generate` after deploying the Rust module.
/* eslint-disable */
/* tslint:disable */
import { t as __t } from "spacetimedb";

export default __t.row({
  sessionId:    __t.u64().primaryKey().name("session_id"),
  hostIdentity: __t.identity().name("host_identity"),
  paperId:      __t.string().name("paper_id"),
  title:        __t.string(),
  createdAt:    __t.u64().name("created_at"),
  status:       __t.string(), // "active" | "ended"
});
