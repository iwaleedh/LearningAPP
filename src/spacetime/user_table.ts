// Phase 3 extension: added `role` field. Re-run `spacetime generate` after deploying the updated Rust module.
/* eslint-disable */
/* tslint:disable */
import {
  TypeBuilder as __TypeBuilder,
  t as __t,
  type AlgebraicTypeType as __AlgebraicTypeType,
  type Infer as __Infer,
} from "spacetimedb";

export default __t.row({
  identity: __t.identity().primaryKey(),
  username: __t.string(),
  createdAt: __t.u64().name("created_at"),
  role: __t.string(), // "student" (default) | "teacher"
});
