// Phase 2 – hand-authored; run `spacetime generate` after deploying the Rust module.
/* eslint-disable */
/* tslint:disable */
import { t as __t } from "spacetimedb";

export default __t.row({
  strokeId:         __t.u64().primaryKey().name("stroke_id"),
  sessionId:        __t.u64().name("session_id"),
  pageNumber:       __t.u32().name("page_number"),
  userIdentity:     __t.identity().name("user_identity"),
  fabricObjectJson: __t.string().name("fabric_object_json"),
  createdAt:        __t.u64().name("created_at"),
  updatedAt:        __t.u64().name("updated_at"),
});
