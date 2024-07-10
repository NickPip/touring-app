import React from "react";
import Title from "./Title";
import { tours } from "../data";
import Tour from "./Tour";

function Tours() {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          return <Tour key={tours.id} {...tour} />;
        })}
      </div>
    </section>
  );
}

<section className="section" id="tours">
  <div className="section-title">
    <h2>
      featured <span>tours</span>
    </h2>
  </div>

  <div className="section-center featured-center"></div>
</section>;

export default Tours;
