import * as R from "pick/router.ts";
import { logRouter } from "pick/logger.ts";
import { jsx } from "pick/response.ts";
import { pipe } from "fun/fn.ts";

import { Main } from "./pages/main.tsx";

const router = pipe(
  R.router(),
  R.respond("GET /", () => jsx(Main())),
  logRouter,
  R.withState(null),
);

Deno.serve(router);
