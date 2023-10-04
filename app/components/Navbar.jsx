import Image from "next/image";
import Link from "next/link";
import React from "react";
import red from './red.png'

export default function Navbar() {
  return (
    <nav>
        <Image
            src={red}
            alt="Jonte red logo"
            width={60}
            quality={100}
            placeholder="blur"
        />
      <h1>Jontes helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
