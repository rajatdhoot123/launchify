"use client";
import Floater from "@/app/components/floater/varient-1";
import { useState } from "react";
import {
  CARDS,
  HERO,
  NAVBAR,
  PRICING,
  RANDOMCARD,
  TABLE,
  TESTIMONIALS,
} from "@/app/constants/floater";

export default function Home() {
  const [state, setState] = useState({
    navbar: "varient-1",
    hero: "varient-1",
    pricing: "varient-1",
    testimonials: "varient-1",
    table: "varient-1",
    accordion: "varient-1",
    cards: "varient-1",
    "random-cards": "varient-1",
    ga_id: "",
  });

  return (
    <>
      <Floater state={state} setState={setState} />
      <div className="space-y-12">
        <secion id="navbar">{NAVBAR[state.navbar]}</secion>
        <section id="hero">{HERO[state.hero]}</section>
        <section id="pricing">{PRICING[state.pricing]}</section>
        <section id="testimonials">{TESTIMONIALS[state.testimonials]}</section>
        <section id="table">{TABLE[state.table]}</section>
        {/* <section id="accordion">
          {ACCORDION[state.accordion]}
        </section> */}
        <section id="cards">{CARDS[state.cards]}</section>
        <section id="random-cards">{RANDOMCARD[state["random-cards"]]}</section>
      </div>
    </>
  );
}
