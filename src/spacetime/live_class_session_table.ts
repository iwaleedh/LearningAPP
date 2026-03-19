// Live Class – hand-authored; run `spacetime generate` after deploying the Rust module.
/* eslint-disable */
/* tslint:disable */
import { t as __t } from "spacetimedb";

export default __t.row({
  classId:        __t.u64().primaryKey().name("class_id"),
  hostIdentity:   __t.identity().name("host_identity"),
  title:          __t.string(),
  backgroundType: __t.string().name("background_type"), // "white"|"lined"|"grid"|"dotted"|"yellow"
  status:         __t.string(), // "active" | "ended"
  createdAt:      __t.u64().name("created_at"),
});
