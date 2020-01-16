import React, { Component } from "react";
import FossilFuel from "../fossilfuels.png";
import Temp from "../temp.png";
import Glaciers from "../glaciers.png";
import SeaLevels from "../sealevels.png";

class FossilArticle extends Component {
  render() {
    return (
      <div class="ui basic segment" style={{ backgroundColor: "#fef6fa" }}>
        <div
          className="FossilArticleBox"
          style={{ textAlign: "left", width: "80%", marginLeft: "12rem" }}
        >
          <div>
            <img
              class="ui fluid image"
              src={FossilFuel}
              alt="Illustrative collage of a power plant in a blue circle behind grey mountains. The headline reads Fossil fuels - the dirty facts."
              style={{
                width: "1500px",
                marginTop: "30px",
                marginBottom: "30px"
              }}
            />
          </div>
          <div>
            <h2 style={{ fontSize: "1.7rem", color: "#313030" }}>
              Everyone's heard it by now: fossil fuels are one of the main
              causes of climate change. But what exactly are fossil fuels, and
              how are they messing up the future of our planet?
            </h2>
          </div>
          <div style={{ width: "90%" }} class="ui padded one column grid">
            <div className="ColumnStyle">
              <div class="column">
                <h3
                  style={{
                    textAlign: "left",
                    color: "#E94D95",
                    marginBottom: "8px"
                  }}
                >
                  Effective, but not sustainable
                </h3>
                <p style={{ textAlign: "left" }}>
                  For over a hundred years, burning fossil fuels has been the
                  main energy source for most of our every-day activities. They
                  fuel cars, light up our homes and keep us warm. It's estimated
                  that fossil fuels supply more than 80% of the world's total
                  energy. The effectiveness of fossil fuels, however, doesn't
                  come without a price.
                </p>

                <p style={{ textAlign: "left" }}>
                  Fossil fuels are basically remains from a bunch of dead plants
                  and animals, buried deep underneath the earth’s crust. The
                  three main fossil fuels include coal, petroleum and natural
                  gas. When these are burned, they release greenhouse gases. In
                  turn, these greenhouse gases trap heat in our atmosphere,
                  making them the main contributors to global warming and
                  climate change.
                </p>

                <p style={{ textAlign: "left" }}>
                  Today, most people are aware of fossil fuels and their
                  negative impacts on our planet. There have even been global
                  efforts to address them, such as the 2015 Paris Climate
                  Agreement. Despite this, carbon dioxide emissions from fossil
                  fuels continue to rise. Don't worry, though! There is still
                  time. Just scroll down to find a few easy tips on how you can
                  lower the amount of carbon dioxide you emit, and help save the
                  planet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class TempArticle extends Component {
  render() {
    return (
      <div class="ui basic segment" style={{ backgroundColor: "#fef6fa" }}>
        <div
          className="FossilArticleBox"
          style={{ textAlign: "left", width: "80%", marginLeft: "12rem" }}
        >
          <div>
            <img
              class="ui fluid image"
              src={Temp}
              alt="Illustrative collage of a map of the earth that is burning in a yellow circle with dry desert and a koala on a branch. The headline reads Global warming and its devestating effects on our planet."
              style={{
                width: "1500px",
                marginTop: "30px",
                marginBottom: "30px"
              }}
            />
          </div>
          <div>
            <h2 style={{ fontSize: "1.7rem" }}>
              Temperatures are rising every year and the global temperature has
              increased by one degree in the last century. It might not sound so
              much but natural disasters, heat waves, intense droughts and
              wildfires are all consequences of that one degree.
            </h2>
          </div>
          <div class="ui padded one column grid">
            <div className="ColumnStyle">
              <div class="column">
                <h3
                  style={{
                    textAlign: "left",
                    color: "#E94D95",
                    marginBottom: "8px"
                  }}
                >
                  Why is it getting warmer?
                </h3>
                <p style={{ textAlign: "left" }}>
                  We've all heard that the planet is getting warmer and maybe
                  even seen some effects of that warming. Don't you remember the
                  heatwave this summer or the unusual drought last year! The
                  effects are clear but what are the reasons? If you wonder, we
                  have ourselves to blame. Carbon dioxide emission and other
                  greenhouse gases like methane or nitrous oxide are emitted
                  directly into the atmosphere and there they trap the heat. Too
                  much of these gases are making our planet warmer and leads to
                  heatwaves, droughts and lack of water but also natural
                  disasters like coastal storms, flooding and wildfires.
                </p>

                <p style={{ textAlign: "left" }}>
                  Because of the warm temperature, there is a greater risk of
                  having wildfires now than ever before. Heatwaves are getting
                  more and more common in many places around the world and if we
                  add intense droughts to this, we have the perfect fuel for
                  wildfires. The rising temperature has lengthened the wildfire
                  season and made the soil drier and more flammable which help
                  the fire to spread more easily. Wildfires are one serious
                  effect of the global warming. They are ruthless and show no
                  mercy. Homes are destroyed, animals are killed, and the
                  vegetation is damaged for life.
                </p>

                <p style={{ textAlign: "left" }}>
                  If the global warming continues to rise, we'll see more
                  serious effects in the future. More heatwaves and droughts
                  will lead to decreased harvests, in turn threatening the
                  world's food supply. The rapid rise in temperature changes
                  ecosystems and can lead to the loss of many species. Weather
                  related natural disasters will make certain places
                  uninhabitable. We all know that natural disasters, even today,
                  force people to leave their homes. But with a global
                  temperature that increases by two degrees, more people,
                  animals and places will be affected. Let's make sure we stop
                  before we reach two degrees!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class GlacierArticle extends Component {
  render() {
    return (
      <div class="ui basic segment" style={{ backgroundColor: "#fef6fa" }}>
        <div
          className="FossilArticleBox"
          style={{ textAlign: "left", width: "80%", marginLeft: "12rem" }}
        >
          <div className="ArticlePic">
            <img
              class="ui fluid image"
              src={Glaciers}
              alt="Illustrative collage of a sad polar bear in a pink circle surrounded by ice. The headline reads Our glaciers are melting away - bit by bit."
              style={{
                width: "1500px",
                marginBottom: "30px",
                marginTop: "30px"
              }}
            />
          </div>
          <div>
            <h2 style={{ fontSize: "1.7rem" }}>
              Since the early 1900s, many of the world's glaciers have been
              melting, rapidly. The root of this phenomenon are our human
              activities. Our own actions could possibly be the cause of massive
              destruction and make several countries uninhabitable.
            </h2>
          </div>
          <div class="ui padded one column grid">
            <div className="ColumnStyle">
              <div class="column">
                <h3
                  style={{
                    textAlign: "left",
                    color: "#E94D95",
                    marginBottom: "8px"
                  }}
                >
                  Why are the glaciers melting?
                </h3>
                <p style={{ textAlign: "left" }}>
                  Since the industrial revolution, where society went from hand
                  production methods to mass production through machines, carbon
                  dioxide and other greenhouse gas emissions have raised the
                  earth's temperature. Raised temperature in turn leads to
                  melting glaciers. Once a glacier starts to break down and
                  melt, the interaction between meltwater and sea water with the
                  glaciers structure, can cause it to rapidly melt and retreat
                  up on land.
                </p>

                <p style={{ textAlign: "left" }}>
                  If the glaciers continue to melt rapidly, the consequences
                  will affect the whole planet. As sea ice and glaciers melt and
                  oceans get's warmer, ocean currents will continue to disrupt
                  weather patterns. Flooding will happen more frequently and
                  storms will increase, causing an insane amount of recovery
                  bills. Both fishermen and fishing industries will be affected,
                  since the warmer waters will affect where and when fish spawn.
                </p>

                <p style={{ textAlign: "left" }}>
                  In the Arctic, polar bears rely on sea ice to hunt and store
                  energy. Now that the sea ice melts earlier in the spring, it
                  causes the bears to go into hibernation roughly when 10 kilos
                  lighter and in poorer condition than before. Unhealthy bears
                  can lead to lower reproduction rates and higher cub mortality,
                  which eventually will lead to local extinction. Walruses
                  depend on sea ice, as it is a platform where they feed and
                  rest. As the sea ice melts earlier, it forces the Walruses
                  ashore and it could be up to 35,000 walruses in one place,
                  this is especially deadly for walrus calves, since they can be
                  crushed in stampedes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class SeaArticle extends Component {
  render() {
    return (
      <div class="ui basic segment" style={{ backgroundColor: "#fef6fa" }}>
        <div
          className="FossilArticleBox"
          style={{ textAlign: "left", width: "80%", marginLeft: "12rem" }}
        >
          <div>
            <img
              class="ui fluid image"
              src={SeaLevels}
              alt="Illustrative collage of a city that is being surrounded by water in a pink circle. The headline reads Sea levels are rising and rising."
              style={{
                width: "1500px",
                marginBottom: "30px",
                marginTop: "30px"
              }}
            />
          </div>
          <div>
            <h2 style={{ fontSize: "1.7rem" }}>
              Global average sea level has risen about 21-24 cm since 1880.
              Almost a third of that has happened in the last two and a half
              decades. Ice loss from melting ice sheets and glaciers near the
              poles are one of the most significant contributions to global sea
              level rise.
            </h2>
          </div>
          <div class="ui padded one column grid">
            <div className="ColumnStyle">
              <div class="column">
                <h3
                  style={{
                    textAlign: "left",
                    color: "#E94D95",
                    marginBottom: "8px"
                  }}
                >
                  How are sea levels measured?
                </h3>
                <p style={{ textAlign: "left" }}>
                  Unfortunately, you can't just put a long ruler into the ocean
                  to measure the sea level, since it varies from place to place
                  and to differences in geography, gravity, temperature, ocean
                  currents and tides. The best way to measure these changes is
                  using a satellite called Jason-3. The satellite bounces radio
                  waves off the ocean surface, then times how long it takes for
                  these signals to return. In 10 days, the satellite has
                  measured the ocean height for the entire planet. Scientists
                  can use this measurement and give us an average sea level for
                  the whole planet. The sea level can also be measured by using
                  an instrument called tide gauges. They exist in many ports and
                  harbours, and they record the height of the rising and falling
                  tide.
                </p>

                <p style={{ textAlign: "left" }}>
                  There are primarily two factors that affect the global sea
                  level rise. Thermal expansion and melting of land ice. Because
                  of the greenhouse gases that are trapped in our atmosphere,
                  the global temperature has increased which in turn affects the
                  sea level. Thermal expansion means that when water is getting
                  warmer it's also expanding and covering a larger area. The
                  second factor includes glaciers and ice sheets and together
                  they cover ten percent of the world's land area. When the land
                  ice is melting, more and more water is added into the oceans
                  and the sea level is rising.
                </p>

                <p style={{ textAlign: "left" }}>
                  The effects of a rising sea level can be devastating! If you
                  live in a coastal community, the rising sea level is an
                  imminent threat. Thousands of people may be forced to leave
                  their homes if the sea continues to rise. Extreme weather,
                  storms and flooding are all getting more and more common and
                  there's a clear link between them and the rising sea level.
                  Even entire islands can disappear if climate change continues
                  to affect the sea level. Islands in the Pacific Ocean are
                  already suffering from the consequences and many islanders
                  must live with a constant fear that their homes could be
                  swallowed up by the sea. Let's stop the sea level rise in
                  time!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { FossilArticle, TempArticle, GlacierArticle, SeaArticle };
