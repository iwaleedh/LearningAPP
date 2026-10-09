/* eslint-disable */
  /**
   * Generated `api` utility.
   *
   * THIS CODE IS AUTOMATICALLY GENERATED.
   *
   * To regenerate, run `npx convex dev`.
   * @module
   */

  import type { ApiFromModules, FilterApi, FunctionReference } from "convex/server";
  import type * as access from "../access.js";
import type * as activityMetrics from "../activityMetrics.js";
import type * as admin from "../admin.js";
import type * as assets from "../assets.js";
import type * as authHelpers from "../authHelpers.js";
import type * as authNotifications from "../authNotifications.js";
import type * as badgeMetrics from "../badgeMetrics.js";
import type * as crons from "../crons.js";
import type * as dataQuality from "../dataQuality.js";
import type * as eventBus from "../eventBus.js";
import type * as eventHandlers from "../eventHandlers.js";
import type * as eventSchemas from "../eventSchemas.js";
import type * as eventTopics from "../eventTopics.js";
import type * as featureFlags from "../featureFlags.js";
import type * as flashcards from "../flashcards.js";
import type * as gateway from "../gateway.js";
import type * as http from "../http.js";
import type * as leaderboard from "../leaderboard.js";
import type * as logs from "../logs.js";
import type * as mistakes from "../mistakes.js";
import type * as notes from "../notes.js";
import type * as observability from "../observability.js";
import type * as paymentRequests from "../paymentRequests.js";
import type * as readProgress from "../readProgress.js";
import type * as studyAttempts from "../studyAttempts.js";
import type * as testUtils from "../testUtils.js";
import type * as users from "../users.js";

  /**
   * A utility for referencing Convex functions in your app's API.
   *
   * Usage:
   * ```js
   * const myFunctionReference = api.myModule.myFunction;
   * ```
   */
  declare const fullApi: ApiFromModules<{
    "access": typeof access,
"activityMetrics": typeof activityMetrics,
"admin": typeof admin,
"assets": typeof assets,
"authHelpers": typeof authHelpers,
"authNotifications": typeof authNotifications,
"badgeMetrics": typeof badgeMetrics,
"crons": typeof crons,
"dataQuality": typeof dataQuality,
"eventBus": typeof eventBus,
"eventHandlers": typeof eventHandlers,
"eventSchemas": typeof eventSchemas,
"eventTopics": typeof eventTopics,
"featureFlags": typeof featureFlags,
"flashcards": typeof flashcards,
"gateway": typeof gateway,
"http": typeof http,
"leaderboard": typeof leaderboard,
"logs": typeof logs,
"mistakes": typeof mistakes,
"notes": typeof notes,
"observability": typeof observability,
"paymentRequests": typeof paymentRequests,
"readProgress": typeof readProgress,
"studyAttempts": typeof studyAttempts,
"testUtils": typeof testUtils,
"users": typeof users,
  }>;
  export declare const api: FilterApi<typeof fullApi, FunctionReference<any, "public">>;
  export declare const internal: FilterApi<typeof fullApi, FunctionReference<any, "internal">>;
