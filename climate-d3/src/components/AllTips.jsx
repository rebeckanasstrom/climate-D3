import React, { Component } from 'react';
import Tools from '../tools.png';
import Plastic from "../plastic.png";
import Subway from "../subway.png";
import Sprout from "../sprout.png";
import Dress from "../dress.png";
import Vote from "../vote.png";
import DIY from "../diy.png";
import Cleaning from "../cleaning.png";
import periodCup from "../periodcup.png";
import soyMilk from "../soy-milk.png";
import Friends from "../friends.png";
import Cosmetics from "../cosmetics.png";

class FossilTips extends Component {
    render() {
        return (
            <div class="ui basic segment" style={{backgroundColor: "rgba(250, 211, 202, 0.15)"}}>
                <div className="TipsBox" style={{textAlign:"left", width:"70%", marginLeft:"12rem"}}>
                    <div>
                        <h1 className="tipHeader"> So, what can you do to save the planet?</h1>
                    </div>
                    <div>
                        <h2 style={{marginBottom:"3em"}}>Don't worry - we got you! We asked our community what they do to live a more sustainable everyday life</h2>
                    </div>
                    <div class="ui grid">
                     
                        <div class="twelve wide column">
                            <h3>Unfriend the plastic in your life!</h3>
                            <p>Start with getting a pretty water bottle and make it a habit of filling it up before you leave in the morning. Invest in a set of those nifty (and cute!) reusable cutlery sets for lunches on the go and bring a reusable straw. While you're at it, get some of those nice glass containers for storing your homemade lunch in. Good for reducing food waste and saving money. Speaking about food, keep the plastic out of your life by going with reusable bags for fruit and veggies and bring a tote bag for carrying your groceries! </p>
                            <p style={{marginBottom:"2em", fontFamily: "Century Gothic"}}><strong>Last summer, Lush came out with an all plastic free shower collection, how amazing is that? Check out the glorious collection here:</strong> <a style={{color: "rgb(84, 178, 204)"}} href="https://www.cosmopolitan.com/uk/beauty-hair/g28516354/lush-plastic-free-shower-collection/" target="_blank" rel="noopener noreferrer"><strong>Lush's Plastic Free Collection</strong></a></p>
                        </div>
                        <div class="four wide column">
                            <img className="tipsPic" alt="Icon of a plastic recyling bin." src={Plastic} />
                        </div>
                        
                        <div class="twelve wide column">
                            <h3>Embrace the commute!</h3>
                            <p>Say no thanks to cars and start embracing the public transport system. Getting from point A to B is often more time efficient and saves you money in the long run - especially if you're living in the city. It's also a ton more energy efficient and less harmful to the planet, not to mention the fact you don't have to circle the city center fifty times before finding a parking spot. Still need a car? Try to share rides with co-workers or family and plan your trips to avoid having to go back and forth as few times as possible. And hey, after a crazy night out - is that cab ride home really worth it? If it is, try to at least share it with a friend or a few. Travelling together is more fun anyways!</p>
                            <p style={{marginBottom:"2em", fontFamily: "Century Gothic"}}><strong>Want to know more on how exactly you're helping our planet by going by bus or train? Read this article from the U.S. Department of transportation:</strong> <a style={{color: "rgb(84, 178, 204)"}} href="https://www.transit.dot.gov/regulations-and-guidance/environmental-programs/transit-environmental-sustainability/transit-role" target="_blank" rel="noopener noreferrer"><strong>Federal Transit Administration</strong></a></p>
                        </div>
                        <div class="four wide column">
                            <img className="tipsPic" alt="Icon of a subway train." src={Subway}/>
                        </div>
                        <div class="twelve wide column">
                            <h3>It's probably not that broken, right?</h3>
                            <p>We’ve all been there. Something stops working and your first reaction is ”Oh no, I need to buy a new one”. Before you go all trigger happy on that ”Add to cart”-button, consider getting it repaired or at least have someone look at what could be done. If we can start repairing what we have instead of consuming more, that's a great way of being more sustainable. Computer or phone broken? Get it to a technician. Beloved jacket lost its zipper? Consult a tailor. Nothing is truly broken, until… well… it is. But then at least you've tried. And if it's beyond repair, remember to recycle all the parts so they can become something new!</p>
                            <p style={{marginBottom:"2em", fontFamily: "Century Gothic"}}><strong>Do you want to become your own tailor? Adrianna over at Hey June will help you to get started. She has tutorials and sew alongs suited for everybody:</strong> <a style={{color: "rgb(84, 178, 204)"}} href="https://www.heyjunehandmade.com/blog/" target="_blank" rel="noopener noreferrer"><strong>HeyJuneHandmade.com</strong></a></p>
                        </div>
                        <div class="four wide column">
                            <img class="ui small circular image" className="tipsPic" alt="Icon of a wrench and a screwdriver." src={Tools}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class TempTips extends Component {
    render() {
        return (
            <div class="ui basic segment" style={{backgroundColor: "rgba(250, 211, 202, 0.15)"}}>
                <div className="TipsBox" style={{textAlign:"left", width:"70%", marginLeft:"12rem"}}>
                    <div>
                        <h1 className="tipHeader"> So, what can you do to save the planet?</h1>
                    </div>
                    <div>
                        <h2 style={{marginBottom:"3em"}}>Don't worry - we got you! We asked our community what they do to live a more sustainable everyday life</h2>
                    </div>
                    <div class="ui grid">
                        <div class="twelve wide column">
                            <h3>Vote! Vote! Vote!</h3>
                            <p>Did you know that the right to take part in and vote in democratic elections are fundamental for human rights? Did you know that you have the right to natural resources such as clean water in your taps and even the food that is produced and ends up on your table? To be able to protect the planets resources and to ensure that all people around the world can live in peace in the future we need to take action against climate change. Make your voice heard and vote for Green Parties whose mission is climate justice for all!</p>
                            <p style={{marginBottom:"2em", fontFamily: "Century Gothic"}}><strong>Check out the climate change movement by Greta Thunberg:</strong> <a style={{color: "rgb(84, 178, 204)"}} href="https://www.fridaysforfuture.org/" target="_blank" rel="noopener noreferrer"><strong>Fridays for Future</strong></a></p>
                        </div>
                        <div class="four wide column">
                            <img class="ui small circular image" className="tipsPic" alt="Icon of a voting ballot paper going down in a ballot box" src={Vote}/>
                        </div>

                        <div class="twelve wide column">
                            <h3>Use your fashion sense to find new clothes at a thrift shop!</h3>
                            <p>I know that it's tempting to buy a new dress from that special store you love, but have you ever considered to get your new dress from a second hand store instead? A lot of second hand stores have lovely and basically unworn pieces just waiting for a new home! Online stores like Asos.com and Ebay.com sell thrifted clothes, so if you can't buy your items in a thrift shop, you can go online and buy them instead. You could also host a clothing swap party,  where you trade your unwanted clothes in exchange for another person's unwanted items - it's a win, win!</p>
                            <p style={{marginBottom:"2em", fontFamily: "Century Gothic"}}><strong>Read our guide on how to thrift shop:</strong> <a style={{color: "rgb(84, 178, 204)"}} href="https://www.cosmopolitan.co.za/advice-buys/how-to-thrift-shop/" target="_blank" rel="noopener noreferrer"><strong>How to Thrift Shop</strong></a></p>
                        </div>
                        <div class="four wide column">
                            <img class="ui small circular image" className="tipsPic" alt="Icon of a dress with a sales tag on it." src={Dress}/>
                        </div>

                        <div class="twelve wide column">
                            <h3>Use a search engine to plant trees!</h3>
                            <p>Did you know that you could actually plant trees by doing a search on the internet? A company named Ecosia strives to plant as many trees as possible with the help of their users. The company uses the income from their ad revenue to plant trees where it's mostly needed. We know that you're busy, and that it can be hard to make big, dramatic changes in your life, this is the perfect solution! By doing roughly 45 searches, (which doesn't take any time at all) you are actually the cause for a new tree being planted! How amazing is that!</p>
                            <p style={{marginBottom:"2em", fontFamily: "Century Gothic"}}><strong>You can find Ecosia’s search engine here:</strong> <a style={{color: "rgb(84, 178, 204)"}} href="https://www.ecosia.org/ " target="_blank" rel="noopener noreferrer"><strong>Ecosia.org</strong></a></p>
                        </div>
                        <div class="four wide column">
                            <img class="ui small circular image" className="tipsPic" alt="Icon of a sprout in human hands." src={Sprout}/>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

class GlacierTips extends Component {
    render() {
        return (
            <div class="ui basic segment" style={{backgroundColor: "rgba(250, 211, 202, 0.15)"}}>
                <div className="TipsBox" style={{textAlign:"left", width:"70%", marginLeft:"12rem"}}>
                    <div>
                        <h1 className="tipHeader"> So, what can you do to save the planet?</h1>
                    </div>
                    <div>
                        <h2 style={{marginBottom:"3em"}}>Don't worry - we got you! We asked our community what they do to live a more sustainable everyday life</h2>
                    </div>
                    <div class="ui grid">
                        <div class="twelve wide column">
                            <h3>Be a period champion!</h3>
                            <p>If you're a woman, you know the drill. While it might be comforting knowing your body is working as it should, periods are a struggle. Let's be honest. For a lot of women out there, it's like that uninvited guest showing up with a whole entourage of annoying friends. And period products like tampons are unnecessarily expensive and doesn't give a damn about the environment. So while your period won't stop, you can still make better choices by investing in a menstrual cup. It will help the environment, plus it will cut the costs of just being a woman so you can spend your hard earned money on other things. Like chocolate. Or wine. </p>
                            <p style={{marginBottom:"2em", fontFamily: "Century Gothic"}}><strong>If you still don't like the cups, there are more sustainable tampon options out there, check this out:</strong> <a style={{color: "rgb(84, 178, 204)"}} href="https://www.cosmopolitan.com/lifestyle/news/a43073/lola-sustainable-tampons/" target="_blank" rel="noopener noreferrer"><strong>Sustainable Tampons</strong></a></p>
                        </div>
                        <div class="four wide column">
                            <img class="ui small circular image" className="tipsPic" alt="Icon of a menstrual cup." src={periodCup}/>
                        </div>

                        <div class="twelve wide column">
                            <h3>Make your own beauty products</h3>
                            <p>Why buy when you can make it yourself! Take a look in the pantry and you will find a lot of useful ingredients that will do wonders for your skin! If you thought food was only for eating, think again! Honey is antibacterial and therefore perfect for acne treatment, nutmeg reduces redness and avocado and olive oil hydrates your skin. Do you have any milk or yoghurt left? Why not make a facemask that will reduce fine lines and wrinkles and at the same time tightens your pores. Homemade beauty products are good for your wallet, for your skin and for our planet!</p>
                            <p style={{marginBottom:"2em", fontFamily: "Century Gothic"}}><strong>Dry skin, blackheads or problems with acne? Check out these homemade face mask recipes and you will find the perfect one for your skin:</strong> <a style={{color: "rgb(84, 178, 204)"}} href="https://www.cosmopolitan.com/style-beauty/beauty/a29506753/homemade-face-masks-diy-recipes/" target="_blank" rel="noopener noreferrer"><strong>Homemade Face Masks</strong></a></p>
                        </div>
                        <div class="four wide column">
                            <img class="ui small circular image" className="tipsPic" alt="Icon of homemade soap." src={DIY}/>
                        </div>

                        <div class="twelve wide column">
                            <h3>Make your own cleaning products!</h3>
                            <p>Most of our cleaning products contain ingredients that are toxic and harmful to the environment. But you can actually make your own non toxic cleaning supplies, and it might surprise you to hear that they actually work very well. Cleaning is usually never fun, but we think that it might be a little more doable if you can use products that you've made yourself. You can make everything from a lavender scented laundry detergent to a peppermint spray cleaner (perfect for christmas!). You might think that you need a whole lot of unusual ingredients, but luckily, that's not the case!</p>
                            <p style={{marginBottom:"2em", fontFamily: "Century Gothic"}}><strong>If you're curious about DIY:ing your own products (healthy both for your family and your pockets) you should check out this website:</strong> <a style={{color: "rgb(84, 178, 204)"}} href="https://www.backwoodshome.com/clean-up-your-act/ " target="_blank" rel="noopener noreferrer"><strong>How to Clean Up Your Act</strong></a></p>
                        </div>
                        <div class="four wide column">
                            <img class="ui small circular image" className="tipsPic" alt="Icon of cleaning products." src={Cleaning}/>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

class SeaTips extends Component {
    render() {
        return (
            <div class="ui basic segment" style={{backgroundColor: "rgba(250, 211, 202, 0.15)"}}>
                <div className="TipsBox" style={{textAlign:"left", width:"70%", marginLeft:"12rem"}}>
                    <div>
                        <h1 className="tipHeader"> So, what can you do to save the planet?</h1>
                    </div>
                    <div>
                        <h2 style={{marginBottom:"3em"}}>Don't worry - we got you! We asked our community what they do to live a more sustainable everyday life</h2>
                    </div>
                    <div class="ui grid">
                        <div class="twelve wide column">
                            <h3>Sharing is caring</h3>
                            <p>Did you know that riding alone in a car fueled by gasoline or diesel almost have the same climate impact per kilometer as when travelling by air? Or what about that new gasoline fuming lawn mower your husband just bought, which you know will only be used twice and end up in the shed? Sharing is caring! Why not start a carpool with your colleagues or why not share tools, bikes, party tents and other stuff with your neighbours? This way you can do both the planet and your wallet a favour. And who knows, you might even make some new friends.</p>
                            <p style={{marginBottom:"2em", fontFamily: "Century Gothic"}}><strong>Check out Grannsaker, an awesome app where sharing with your neighbours is made easier. Grannsaker is available both for iOs and Android:</strong> <a style={{color: "rgb(84, 178, 204)"}} href="https://grannsaker.se/" target="_blank" rel="noopener noreferrer"><strong>Grannsaker.se</strong></a></p>
                        </div>
                        <div class="four wide column">
                            <img class="ui small circular image" className="tipsPic" alt="Icon of two happy friends." src={Friends}/>
                        </div>

                        <div class="twelve wide column">
                            <h3>Buy eco-friendly makeup!</h3>
                            <p>Do you still want to look amazing but at the same time make the world a little better? There is a ton of beauty products that can help you do just that! We know that it can be hard to switch from your favourite mascara or try a new powder instead of the one you have been using for years. But we promise you won't be disappointed! There are a lot of brands out there making stuff that's eco-friendly and sometimes also 100% vegan. It's not that much more expensive than your usual stuff, plus it's good for the planet and your skin! </p>
                            <p style={{marginBottom:"2em", fontFamily: "Century Gothic"}}><strong>If you're unsure on which beauty products to buy, you should read our eco friendly guide, we've gathered all of our favourites:</strong> <a style={{color: "rgb(84, 178, 204)"}} href="https://www.cosmopolitan.com/style-beauty/beauty/advice/g3142/eco-friendly-beauty-products/?slide=2" target="_blank" rel="noopener noreferrer"><strong>Eco Friendly Beauty Products</strong></a></p>
                        </div>
                        <div class="four wide column">
                            <img class="ui small circular image" className="tipsPic" alt="Icon of a subway train." src={Cosmetics}/>
                        </div>

                        <div class="twelve wide column">
                            <h3>You should consider to stop drinking cow's milk</h3>
                            <p >Did you know that one glass of cow milk (200ml) uses approximately 125 liters of water to be produced? That's just one glass! If you drink a glass of cow milk a year, you indirectly use 45 625 liters of water. To compare, that's having an eight minute shower, 701 times. Did you also know that 65 % of all the grown up population is lactose intolerant? Don't worry, now a days you have a lot of options for lactose free milk compared to just a decade ago. You have soy milk, rice milk , almond milk and oat milk. A glass of oat milk only uses 11 liters of water. That's a huge difference!</p>
                            <p style={{marginBottom:"2em", fontFamily: "Century Gothic"}}><strong>Don’t want to give up cow’s milk just yet? Understandable. But you should read this article from BBC on the environmental effects different milks have:</strong> <a style={{color: "rgb(84, 178, 204)"}} href="https://www.bbc.com/news/science-environment-46654042?fbclid=IwAR2LTXOuOYnMbMCk9e7J3qKNQ9oJuhG9-zyVXqBneklQJ0p0K6fX-yI0zpk" target="_blank" rel="noopener noreferrer"><strong>Which Milk Should I Choose?</strong></a></p>
                        </div>
                        <div class="four wide column">
                            <img class="ui small circular image" className="tipsPic" alt="Icon of a wrench and a screwdriver." src={soyMilk}/>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export { FossilTips, TempTips, GlacierTips, SeaTips };