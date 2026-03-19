// Live Class – hand-authored; run `spacetime generate` after deploying the Rust module.
/* eslint-disable */
/* tslint:disable */
import { t as __t } from "spacetimedb";

export default __t.row({
  raiseId:         __t.u64().primaryKey().name("raise_id"),
  classId:         __t.u64().name("class_id"),
  studentIdentity: __t.identity().name("student_identity"),
  status:          __t.string(), // "raised" | "acknowledged"
  raisedAt:        __t.u64().name("raised_at"),
});
