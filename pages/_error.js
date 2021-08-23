import React from "react";
import Link from "next/link";

const indexPage = () => (
  <div>
    <h1>Opps, Something went wrong</h1>
    <p>
      Try <Link href="/">Going Back</Link>
    </p>
  </div>
);

export default indexPage;
