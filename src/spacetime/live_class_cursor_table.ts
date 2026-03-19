// Live Class – hand-authored; run `spacetime generate` after deploying the Rust module.
/* eslint-disable */
/* tslint:disable */
import { t as __t } from "spacetimedb";

// One row per participant per class – upsert on each cursor move.
export default __t.row({
  cursorId:   __t.identity().primaryKey().name("cursor_id"), // == userIdentity
  classId:    __t.u64().name("class_id"),
  x:          __t.f32(), // normalized 0–1 relative to canvas width
  y:          __t.f32(), // normalized 0–1 relative to canvas height
  tool:       __t.string(), // "pointer" | "laser"
  updatedAt:  __t.u64().name("updated_at"),
});
