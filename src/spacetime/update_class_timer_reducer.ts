// Live Class – hand-authored; run `spacetime generate` after deploying the Rust module.
/* eslint-disable */
/* tslint:disable */
import { t as __t } from "spacetimedb";

export default {
  classId:   __t.u64(),
  mode:      __t.string(), // "stopwatch" | "countdown"
  state:     __t.string(), // "stopped" | "running" | "paused"
  elapsedMs: __t.u64(),
  targetMs:  __t.u64(),
};
