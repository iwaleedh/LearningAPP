/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as activityMetrics from "../activityMetrics.js";
import type * as admin from "../admin.js";
import type * as assets from "../assets.js";
import type * as authHelpers from "../authHelpers.js";
import type * as badgeMetrics from "../badgeMetrics.js";
import type * as crons from "../crons.js";
import type * as cursors from "../cursors.js";
import type * as dataQuality from "../dataQuality.js";
import type * as eventBus from "../eventBus.js";
import type * as eventHandlers from "../eventHandlers.js";
import type * as eventSchemas from "../eventSchemas.js";
import type * as eventTopics from "../eventTopics.js";
import type * as featureFlags from "../featureFlags.js";
import type * as flashcards from "../flashcards.js";
import type * as gateway from "../gateway.js";
import type * as handraises from "../handraises.js";
import type * as http from "../http.js";
import type * as invites from "../invites.js";
import type * as joinRequests from "../joinRequests.js";
import type * as leaderboard from "../leaderboard.js";
import type * as liveclass from "../liveclass.js";
import type * as logs from "../logs.js";
import type * as mistakes from "../mistakes.js";
import type * as notes from "../notes.js";
import type * as paymentRequests from "../paymentRequests.js";
import type * as readProgress from "../readProgress.js";
import type * as sessions from "../sessions.js";
import type * as strokes from "../strokes.js";
import type * as studyAttempts from "../studyAttempts.js";
import type * as teacherAnalytics from "../teacherAnalytics.js";
import type * as testUtils from "../testUtils.js";
import type * as timers from "../timers.js";
import type * as users from "../users.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  activityMetrics: typeof activityMetrics;
  admin: typeof admin;
  assets: typeof assets;
  authHelpers: typeof authHelpers;
  badgeMetrics: typeof badgeMetrics;
  crons: typeof crons;
  cursors: typeof cursors;
  dataQuality: typeof dataQuality;
  eventBus: typeof eventBus;
  eventHandlers: typeof eventHandlers;
  eventSchemas: typeof eventSchemas;
  eventTopics: typeof eventTopics;
  featureFlags: typeof featureFlags;
  flashcards: typeof flashcards;
  gateway: typeof gateway;
  handraises: typeof handraises;
  http: typeof http;
  invites: typeof invites;
  joinRequests: typeof joinRequests;
  leaderboard: typeof leaderboard;
  liveclass: typeof liveclass;
  logs: typeof logs;
  mistakes: typeof mistakes;
  notes: typeof notes;
  paymentRequests: typeof paymentRequests;
  readProgress: typeof readProgress;
  sessions: typeof sessions;
  strokes: typeof strokes;
  studyAttempts: typeof studyAttempts;
  teacherAnalytics: typeof teacherAnalytics;
  testUtils: typeof testUtils;
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
