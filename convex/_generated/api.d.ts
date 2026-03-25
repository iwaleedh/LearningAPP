/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as assets from "../assets.js";
import type * as cursors from "../cursors.js";
import type * as flashcards from "../flashcards.js";
import type * as handraises from "../handraises.js";
import type * as invites from "../invites.js";
import type * as liveclass from "../liveclass.js";
import type * as notes from "../notes.js";
import type * as sessions from "../sessions.js";
import type * as strokes from "../strokes.js";
import type * as timers from "../timers.js";
import type * as users from "../users.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  assets: typeof assets;
  cursors: typeof cursors;
  flashcards: typeof flashcards;
  handraises: typeof handraises;
  invites: typeof invites;
  liveclass: typeof liveclass;
  notes: typeof notes;
  sessions: typeof sessions;
  strokes: typeof strokes;
  timers: typeof timers;
  users: typeof users;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {};
