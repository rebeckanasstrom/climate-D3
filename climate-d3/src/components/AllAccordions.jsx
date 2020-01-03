import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';

class FossilAccordion extends Component {
      state = { activeIndex: -1 }
    
      handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index
    
        this.setState({ activeIndex: newIndex })
      }
    
      render() {
        const { activeIndex } = this.state
    
        return (
            <div class="ui basic segment">
            <div className="AccordionBox" style={{textAlign:"left", width:"60%", marginLeft:"29rem"}}>
                <div>
                    <h3 style={{paddingBottom:"2rem"}}>So, what does this diagram mean, really?</h3>
                </div>
          <Accordion>
            <Accordion.Title
              active={activeIndex === 0}
              index={0}
              onClick={this.handleClick}
            >
              <Icon name='dropdown' />
              What is million metric tonnes? 
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
              <p>
              You’ll often encounter the term “million metric tonnes of carbon” when reading about fossil fuel emissions. Crystal clear? Yeah, no, we didn’t get it either. Simply put, fossil fuel emissions are measured by comparing the emissions from various greenhouse gases based on their global warming potential. The global warming potential, in turn, describes how long a greenhouse gas is active in the atmosphere. Getting the right numbers means you multiply the tonnes of the gas with their respective global warming potentials, ending up with the final million metric tonne of carbon measurement. 
              </p>
            </Accordion.Content>
    
            <Accordion.Title
              active={activeIndex === 1}
              index={1}
              onClick={this.handleClick}
            >
              <Icon name='dropdown' />
              What's greenhouse gases?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
              <p>
              So what’s greenhouse gas then, and why do you need to know about it? Greenhouse gases are a collection of gases that contribute to global warming. By collecting data about them and comparing them in million metric tonnes, we can determine their individual impact on climate change.
              </p>
            </Accordion.Content>
    
            <Accordion.Title
              active={activeIndex === 2}
              index={2}
              onClick={this.handleClick}
            >
              <Icon name='dropdown' />
              So what's up with the diagram? Fossil fuels? 
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 2}>
              <p>
              If you look at the diagram you’ll see a number of different categories. How do they relate to tonnes and greenhouse gases? Fossil fuel is a term used to describe different kinds of burning of non renewable energy sources and are often divided up and measured like here in the diagram.
              </p>
            </Accordion.Content>
          </Accordion>
          </div>
          </div>
        )
      }
    };

    class TempAccordion extends Component {
        state = { activeIndex: -1 }
      
        handleClick = (e, titleProps) => {
          const { index } = titleProps
          const { activeIndex } = this.state
          const newIndex = activeIndex === index ? -1 : index
      
          this.setState({ activeIndex: newIndex })
        }
      
        render() {
          const { activeIndex } = this.state
      
          return (
              <div class="ui basic segment">
              <div className="AccordionBox" style={{textAlign:"left", width:"60%", marginLeft:"29rem"}}>
                  <div>
                      <h3 style={{paddingBottom:"2rem"}}>Why does it matter?</h3>
                  </div>
            <Accordion>
              <Accordion.Title
                active={activeIndex === 0}
                index={0}
                onClick={this.handleClick}
              >
                <Icon name='dropdown' />
                Why should I care? 
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 0}>
                <p>
                One degree here, one degree there. One week it’s cold, another week hot. Who cares, really? You, you should care! Why? While warming your front porch by one degree from one day to another might not seem significant, and isn’t, it is serious when the change is global.
                </p>
              </Accordion.Content>
      
              <Accordion.Title
                active={activeIndex === 1}
                index={1}
                onClick={this.handleClick}
              >
                <Icon name='dropdown' />
                Global change, what's that? 
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 1}>
                <p>
                When talking about temperature changes, we talk about a global average. That means the entire surface of the earth is one degree hotter. That is significant! To put this into perspective, all it took was a 1-2 degree global decrease to put the earth into a minor ice age. 
                </p>
              </Accordion.Content>
      
              <Accordion.Title
                active={activeIndex === 2}
                index={2}
                onClick={this.handleClick}
              >
                <Icon name='dropdown' />
                Why is even one degree really alarming?
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 2}>
                <p>
                Global warming, or temperature changes, might not even mean that all of the surface of the earth is one degree hotter always. But it leads to some pretty strange ongoings. Unusually cold winters followed by sweltering hot summers. Recognize that? Yeah. The world is unbalanced and it needs some help ASAP. 
                </p>
              </Accordion.Content>
            </Accordion>
            </div>
            </div>
          )
        }
      };

      class GlacierAccordion extends Component {
        state = { activeIndex: -1 }
      
        handleClick = (e, titleProps) => {
          const { index } = titleProps
          const { activeIndex } = this.state
          const newIndex = activeIndex === index ? -1 : index
      
          this.setState({ activeIndex: newIndex })
        }
      
        render() {
          const { activeIndex } = this.state
      
          return (
              <div class="ui basic segment">
              <div className="AccordionBox" style={{textAlign:"left", width:"60%", marginLeft:"29rem"}}>
                  <div>
                      <h3 style={{paddingBottom:"2rem"}}>How does one measure a glacier, really?</h3>
                  </div>
            <Accordion>
              <Accordion.Title
                active={activeIndex === 0}
                index={0}
                onClick={this.handleClick}
              >
                <Icon name='dropdown' />
                Shoving a ruler into a glacier, really?
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 0}>
                <p>
                We mentioned on the page about sea levels that you can’t shove a ruler into the ocean and simply measure the changes. So, you’d be surprised to know that’s exactly how you measure the thickness of a glacier, or the glacier mass balance which is the scientific term. Well, one of the ways. Teams of scientists will travel to the glacier and stake it out, actually shoving stakes into the snow at exact depths providing point measurements of the glacier surface. 
                </p>
              </Accordion.Content>
      
              <Accordion.Title
                active={activeIndex === 1}
                index={1}
                onClick={this.handleClick}
              >
                <Icon name='dropdown' />
                How does the stick method help?
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 1}>
                <p>
                You might think “Really? Shoving sticks in ice? How does that help?!” We know. Few people, many sticks, even more glaciers to measure. In the cold nonetheless. It’s a challenging, exhausting and hard logistical nightmare. But it does help in keeping track of a few key points measuring ice depth, size, movement and water content. 
                </p>
              </Accordion.Content>
      
              <Accordion.Title
                active={activeIndex === 2}
                index={2}
                onClick={this.handleClick}
              >
                <Icon name='dropdown' />
                Are there other types of measurements?
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 2}>
                <p>
                The stick or stake method is paired with the study of satellite images of glaciers. This is done in part by GLIMS: Global Land Ice Measurements from Space - 100 investigators in over 24 countries building a database! That’s teamwork. The GLIMS team uses high-resolution satellite images from the Advanced Spaceborne Thermal Emission and Reflection Radiometer (ASTER) instrument and the Landsat Enhanced Thematic Mapper Plus (ETM+). Whoa. That’s a mouthful. 
                </p>
              </Accordion.Content>
            </Accordion>
            </div>
            </div>
          )
        }
      };

      class SeaAccordion extends Component {
        state = { activeIndex: -1 }
      
        handleClick = (e, titleProps) => {
          const { index } = titleProps
          const { activeIndex } = this.state
          const newIndex = activeIndex === index ? -1 : index
      
          this.setState({ activeIndex: newIndex })
        }
      
        render() {
          const { activeIndex } = this.state
      
          return (
              <div class="ui basic segment">
              <div className="AccordionBox" style={{textAlign:"left", width:"60%", marginLeft:"29rem"}}>
                  <div>
                      <h3 style={{paddingBottom:"2rem"}}>Measuring sea levels - how?</h3>
                  </div>
            <Accordion>
              <Accordion.Title
                active={activeIndex === 0}
                index={0}
                onClick={this.handleClick}
              >
                <Icon name='dropdown' />
                So, what methods are used? 
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 0}>
                <p>
                Okay, so shoving a ruler into the ocean is by no means a way to measure the rising sea levels. What is? If your guess is satellites, you’re right. If your second guess was through NASA, bonus point. Space born satellites measures changes in water mass, including groundwater, rivers, snow and ice. It also measures and mass changes within the ocean itself, as well as the movement of water between land and ocean.
                </p>
              </Accordion.Content>
      
              <Accordion.Title
                active={activeIndex === 1}
                index={1}
                onClick={this.handleClick}
              >
                <Icon name='dropdown' />
                Satellites - check. What else?
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 1}>
                <p>
                Measurements from the satellites are paired with measurements from something called Argo sensors, which are basically free floating sensors (roughly 4000 of them!) measuring sea temperature and salt levels. But! Yes, there’s always a but. It doesn’t stop there. Changes are also measured via aircraft. 
                </p>
              </Accordion.Content>
      
              <Accordion.Title
                active={activeIndex === 2}
                index={2}
                onClick={this.handleClick}
              >
                <Icon name='dropdown' />
                Satellites and sensors - check. But planes, really? 
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 2}>
                <p>
                Planes? To measure sea levels? What? Yeah. It even has a fancy mission name: Operation IceBridge. Typical NASA. The measurements are made by laser altimetry. This is a method that uses lasers that bounce off the surface of for example glaciers, giving scientists a topographic map of the measured area. This can then be used to track changes over time, when glaciers melt, ending up in? You guessed it. The ocean. 
                </p>
              </Accordion.Content>
            </Accordion>
            </div>
            </div>
          )
        }
      };

export { FossilAccordion, TempAccordion, GlacierAccordion, SeaAccordion};