import * as R from "pick/router.ts";
import * as H from "pick/handler.ts";
import { logRouter } from "pick/logger.ts";
import { jsx } from "pick/response.ts";
import { pipe } from "fun/fn.ts";

import { Main } from "./pages/main.tsx";

const router = pipe(
  R.router(),
  R.handle("GET /", H.puts(() => jsx(Main()))),
  logRouter,
  R.withState(null),
);

Deno.serve(router);
