"use client";
import Floater from "@/app/components/floater/varient-1";
import { useState } from "react";
import {
  ACCORDION,
  CARDS,
  HERO,
  NAVBAR,
  PRICING,
  TABLE,
  TESTIMONIALS,
} from "@/app/constants/floater";

export default function Home() {
  const [state, setState] = useState({
    nav_varient: "varient-1",
    hero_varient: "varient-1",
    pricing_varient: "varient-1",
    testimonials_varient: "varient-1",
    table_varient: "varient-1",
    accordion_varient: "varient-1",
    card_varient: "varient-1",
    ga_id: "",
  });

  return (
    <>
      <Floater state={state} setState={setState} />
      <div className="space-y-12">
        <secion id="nav_varient">{NAVBAR[state.nav_varient]}</secion>
        <section id="hero_varient">{HERO[state.hero_varient]}</section>
        <section id="pricing_varient">{PRICING[state.pricing_varient]}</section>
        <section id="testimonials_varient">
          {TESTIMONIALS[state.testimonials_varient]}
        </section>
        <section id="table_varient">{TABLE[state.table_varient]}</section>
        {/* <section id="accordion_varient">
          {ACCORDION[state.accordion_varient]}
        </section> */}
        <section id="card_varient">{CARDS[state.card_varient]}</section>
      </div>
    </>
  );
}
