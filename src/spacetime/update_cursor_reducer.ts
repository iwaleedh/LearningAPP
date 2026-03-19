// Live Class – hand-authored; run `spacetime generate` after deploying the Rust module.
/* eslint-disable */
/* tslint:disable */
import { t as __t } from "spacetimedb";

export default {
  classId: __t.u64(),
  x:       __t.f32(), // normalized 0–1
  y:       __t.f32(),
  tool:    __t.string(), // "pointer" | "laser"
};
