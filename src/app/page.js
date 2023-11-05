"use client";
import Floater from "@/app/components/floater/varient-1";
import { useState } from "react";
import { HERO, NAVBAR, PRICING, TESTIMONIALS } from "@/app/constants/floater";

export default function Home() {
  const [state, setState] = useState({
    nav_varient: "varient-1",
    hero_varient: "varient-1",
    pricing_varient: "varient-1",
    testimonials_varient: "varient-1",
    ga_id: "",
  });

  return (
    <>
      <Floater state={state} setState={setState} />
      <secion id="nav_varient">{NAVBAR[state.nav_varient]}</secion>
      <section id="hero_varient">{HERO[state.hero_varient]}</section>
      <section id="pricing_varient">{PRICING[state.pricing_varient]}</section>
      <section id="testimonials_varient">
        {TESTIMONIALS[state.testimonials_varient]}
      </section>
    </>
  );
}
