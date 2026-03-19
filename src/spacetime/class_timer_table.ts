// Live Class – hand-authored; run `spacetime generate` after deploying the Rust module.
/* eslint-disable */
/* tslint:disable */
import { t as __t } from "spacetimedb";

// One row per live class session. Upserted by the teacher.
export default __t.row({
  classId:   __t.u64().primaryKey().name("class_id"),
  mode:      __t.string(), // "stopwatch" | "countdown"
  state:     __t.string(), // "stopped" | "running" | "paused"
  elapsedMs: __t.u64().name("elapsed_ms"),
  targetMs:  __t.u64().name("target_ms"), // countdown target; 0 when unused
  startedAt: __t.u64().name("started_at"),
});
