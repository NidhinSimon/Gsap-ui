import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import "./Home.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Power3 } from "gsap";


const Home = () => {
  gsap.registerPlugin(ScrollTrigger);

  let main = useRef(null);
  let main2 = useRef(null);
  let nav = useRef(null);
  let section = useRef(null);
  let main3 = useRef(null);
  let main4 = useRef(null);
  let main5 = useRef(null);
  let cards = useRef(null);
  let main6 = useRef(null);



  let about=useRef(null)

  useEffect(() => {
    const navElement = nav.current;
    navElement.style.backgroundColor = "rgb(0,0,0,0)";
  }, []);

  useEffect(() => {
    gsap.to(nav.current, {
      backgroundColor: "#000",
      duration: 0.5,
      height: "110px",
      scrollTrigger: {
        trigger: main.current,
        start: "top 0%",
        end: "top -11%",
        // markers: true,
        scrub: true,
      },
    });

    gsap.to(main2.current, {
      backgroundColor: "#000",

      scrollTrigger: {
        trigger: main.current,
        start: "top 10%",
        end: "top -100%",

        // markers: true,
        scrub: 2,
      },
    });
    gsap.to(main3.current, {
      backgroundColor: "#000",
      height: "70vh",
      scrollTrigger: {
        trigger: main.current,
        start: "top 20%",
        end: "top -100%",
        // markers: true,
        scrub: 2,
      },
    });
    gsap.to(main4.current, {
      backgroundColor: "#000",
      height: "70vh",
      scrollTrigger: {
        trigger: main.current,
        start: "top 20%",
        end: "top -100%",
        // markers: true,
        scrub: 2,
      },
    });
    gsap.to(main5.current, {
      backgroundColor: "#000",
      height: "60vh",
      scrollTrigger: {
        trigger: main.current,
        start: "top 20%",
        end: "top -100%",
        // markers: true,
        scrub: 2,
      },
    });
    gsap.to(cards.current, {
      duration: 1,
      delay: 0.5,
      opacity: 1,
      y: -50,
      ease: Power3.easeIn,
      scrollTrigger: {
        trigger: cards.current,
        start: "top 150%",
        end: "top 30%",
        // markers: true,
        scrub: true,
      },
    });
    gsap.to(main6.current, {
      backgroundColor: "#000",
      height: "40vh",
      scrollTrigger: {
        trigger: main.current,
        start: "top 20%",
        end: "top -100%",
        // markers: true,
        scrub: 2,
      },
    });

   
  }, [nav.current, main.current]);

  useEffect(() => {
    gsap.to(cards.current.children, {
      duration: 0.5,
      opacity: 1,
      delay:0.5,
      y: -50,
      ease: Power3.easeIn,
      stagger: 5, 
      scrollTrigger: {
        trigger: cards.current,
        start: "top 80%", 
        end: "top 30%",
        scrub: true,
      },

    });
   
   

    
  }, [cards.current]);



  useEffect(() => {
    gsap.to(about.current.children, {
      duration: 1,
      opacity: 1,
      delay:1,
      y: -40,
      ease: Power3.easeIn,
      stagger: 5, 
      scrollTrigger: {
        trigger: about.current,
        start: "top 100%", 
        end: "top 60%",
        scrub: true,
      },

    });
   
   

    
  }, [about.current]);



  

  useEffect(() => {
    var mainCursor = document.querySelector("#cursor");
    var bgcursor = document.querySelector("#cursor-blur");

    const cursorTimeline = gsap.timeline();

    cursorTimeline.to(mainCursor, {
      duration: 2,
      opacity: 1,
      ease: Power3.easeIn,
      stagger: 3,
    });

    document.addEventListener("mousemove", function (event) {
      mainCursor.style.left = event.x - 10 + "px";
      mainCursor.style.top = event.y - 5 + "px";
      bgcursor.style.left = event.x - 100 + "px";
      bgcursor.style.top = event.y - 100 + "px";
    });

    return () => {
      document.removeEventListener("mousemove", function (event) {
        mainCursor.style.left = event.x + "px";
        mainCursor.style.top = event.y + "px";
      });
    };
  }, []);

  return (
    <>
      <section className="" ref={section} id="bg">
        <div className="overlay"></div>

        <nav className=" bg-purple-600 fixed w-full z-50 " ref={nav} id="nav">
          <div className="flex justify-start p-5 pl-16">
            <img
              className="h-20"
              src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/logo-white.svg"
              alt="eee"
            />
            <div className="flex justify-start p-10 gap-10 text-white">
              <h1>TOPTRACER RANGE</h1>
              <h1>GOLF LESSONS</h1>
              <h1>ADVENTURE GOLF</h1>
              <h1>CAFÉ</h1>
              <h1>EVENTS</h1>
            </div>
          </div>
        </nav>
        <div id="cursor"></div>
        <div id="cursor-blur"></div>

        <div className=" p-32 h-screen" ref={main} id="main">
          <div
            className="flex gap-5 text-9xl text-white dropx-shadow-2xl justify-center p-16"
            id="Eat"
          >
            <h1>EAT.DRINK.PLAY.</h1>
          </div>
          <div className="flex justify-center text-4xl text-white">
            <h1>WELCOME TO SIDCUP FAMILY GOLF!</h1>
          </div>
          <div className="flex justify-center text-white font-bold p-5 text-center">
            <h1>
              Sidcup Family Golf is a Toptracer driving range and crazy golf
              venue
              <br />
              in Sidcup, South East London. Passionate about technology, player
              <br />
              development and making golf fun and accessible to everyone.
            </h1>
          </div>
        </div>
      </section>
      <div className="h-screen overflow-hidden" ref={main2}>
        <div
          className="whitespace-nowrap flex overflow-x-auto overflow-y-hidden text-9xl h-56 p-10 mt-10  "
          id="scroller"
        >
          <div
            id="scroller-inside"
            className=" whitespace-nowrap flex  text-white gap-20 "
          >
            <h4>ADVENTURE GOLF</h4>
            <h4> CAFÉ EVENTS</h4>
            <h4>TOPTRACER</h4>
            <h4>GOLF LESSONS </h4>
            <h4>ADVENTURE GOLF</h4>
            <h4> CAFÉ EVENTS</h4>
            <h4>TOPTRACER</h4>
            <h4>GOLF LESSONS </h4>
            <h4>ADVENTURE GOLF</h4>
            <h4> CAFÉ EVENTS</h4>
            <h4>TOPTRACER</h4>
            <h4>GOLF LESSONS </h4>
          </div>
        </div>
        <div ref={about}
          className="about flex justify-center align-middle w-full p-16   "
          id="about-div"
        >
          <img
            className="h-60 w-52 rounded-lg mt-12 about-img"
            src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-about-1.jpg?strip=all&lossy=1&sharp=1&w=384&ssl=1"
            alt=""
          />
          <div
            className="about-us-inside text-white w-2/3  p-10
            "
          >
            <h2 className="text-lg font-semibold mt-12">
              {" "}
              Home to a 46-bay, multi-tier, floodlit driving range, powered by
              Toptracer Range technology. Complimented by a practice green and
              bunker, coffee shop and American Golf Store. There truly is
              something for everyone as we also boast two outdoor 18-hole
              dinosaur themed crazy golf courses. RACER RANGE Looking for
              somewhere to enjoy quality time with friends and family or simply
              have some “me” time.
            </h2>
          </div>
          <img
            className="h-60 w-52 rounded-lg mt-12 about-img"
            src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-about-2.jpg?strip=all&lossy=1&sharp=1&w=384&ssl=1"
            alt=""
          />
        </div>
      </div>

      <section ref={main3}>
        <div
          className="flex w-full justify-evenly  cards "
          style={{ height: "100vh" }}
          ref={cards}
        >
          <div className="h-3/5 w-96 bg-red-400 rounded-lg card1">
            <div className="overlay bg-green-500 h-full p-10">
              <h4 className="font-bold text-center ">RACER RANGE</h4>
              <p className="mt-5 font-semibold">
                Looking for somewhere to enjoy quality time with friends and
                family or simply have some “me” time. Our floodlit 46-bay
                multi-tier range features market leading technology in Toptracer
                that everyone can enjoy. Open until late all week, nothing quite
                beats a chilled evening session on the range with food and
                drinks delivered straight to your bay.
              </p>
            </div>
          </div>
          <div className="h-3/5 w-96 bg-red-400 rounded-lg card2">
            <div className="overlay bg-green-500 h-full p-10">
              <h4 className="font-bold text-center ">RACER RANGE</h4>
              <p className="mt-5 font-semibold">
                Looking for somewhere to enjoy quality time with friends and
                family or simply have some “me” time. Our floodlit 46-bay
                multi-tier range features market leading technology in Toptracer
                that everyone can enjoy. Open until late all week, nothing quite
                beats a chilled evening session on the range with food and
                drinks delivered straight to your bay.
              </p>
            </div>
          </div>
          <div className="h-3/5 w-96 bg-red-400 rounded-lg card3">
            <div className="overlay bg-green-500 h-full p-10">
              <h4 className="font-bold text-center ">RACER RANGE</h4>
              <p className="mt-5 font-semibold">
                Looking for somewhere to enjoy quality time with friends and
                family or simply have some “me” time. Our floodlit 46-bay
                multi-tier range features market leading technology in Toptracer
                that everyone can enjoy. Open until late all week, nothing quite
                beats a chilled evening session on the range with food and
                drinks delivered straight to your bay.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="h-screen" ref={main4}>
        <div className="h-60 bg-gradient-to-r from-green-800 to-green-600 text-white  text-2xl w-full flex justify-center  ">
          <img
            src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-footer.svg"
            alt=""
          />
          <h1 className="mt-10 font-bold text-center text-4xl ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
       
          </h1>
          <img
            src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-footer.svg"
            alt=""
          />
        </div>
      </section>

      <section className="h-screen" ref={main5}>
        <div className="quote-images-container flex justify-center relative">
          <img
            className="quote-image h-10 absolute left-10"
            src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-left.svg"
            alt=""
          />
          <div className="w-4/5 ">
            <h1 className="text-5xl text-white ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem aliquam voluptatum voluptas! Repellat, facilis debitis
              eaque fuga nisi modi cumque quis perferendis maiores, ipsum rem
              sapiente saepe delectus, expedita impedit!
            </h1>
          </div>
          <img
            className="quote-image h-10 absolute right-40 top-60"
            src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-right.svg"
            alt=""
          />
        </div>


        <h1 className=" text-center text-8xl uppercase mt-36" id="last-h1">What are you waiting for?</h1>
     
     {/* <div className="  flex justify-evenly " id="last-cards">
       
       <div className="h-60 w-96 bg-blue-400 rounded-2xl">fjggfg</div>
       <div className="h-60 w-96  bg-blue-400 rounded-2xl">fjggfg</div>
       <div className="h-60 w-96 bg-blue-400 rounded-2xl">fjggfg</div>
     </div>
 */}

      </section>

      <section className="h-screen" ref={main6}>
        
      </section>

   {/* <footer>
    <div className="h-64  bg-green-400 flex justify-around ">
<div className="w-1/5 h-full bg-red-400 ">
<img src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-footer.svg" alt="" />
</div>
<div className="w-1/5 h-full bg-red-400 "></div>
<div className="w-1/5 h-full bg-red-400 "></div>
<div className="w-1/5 h-full bg-red-400 "></div>
    </div>
   </footer> */}
    </>
  );
};

export default Home;
