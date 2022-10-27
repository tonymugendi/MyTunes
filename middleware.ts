import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const signedinPages = ["/", "/playlist", "/library"];

const middleware = (req: NextRequest) => {
  if (signedinPages.find((page) => page === req.nextUrl.pathname)) {
    const token = req.cookies.get('MYTUNES_ACCESS_TOKEN');

    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/signin";
      return NextResponse.redirect(url);
    }
  }
};

export default middleware;
