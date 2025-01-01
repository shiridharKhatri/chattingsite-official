import React, { useEffect, useRef } from "react";
import { BsIcons, Fa6Icons } from "../assets/icons/icons";
import "../styles/components/Hero.css";
import Navbar from "./Navbar";
export default function Hero() {
  const sparkContainer = useRef(null);
  const chatBoxRef = useRef(null);
  const sparkBackground = useRef(null);
  useEffect(() => {
    sparkContainer.current.addEventListener("mousemove", (e) => {
      let calc = sparkContainer.current.getBoundingClientRect();
      let x = e.clientX - calc.left;
      let y = e.clientY - calc.top;
      particlesSpark(x, y);
    });
    const particlesSpark = (x, y) => {
      let sparkElement = document.createElement("div");
      sparkElement.className = "spark";
      sparkElement.style.left = `${x}px`;
      sparkElement.style.top = `${y}px`;
      sparkContainer.current.appendChild(sparkElement);
      const angle = Math.random() * 2 * Math.PI;
      const radius = Math.random() * 100;
      const targetX = x + radius * Math.cos(angle);
      const targetY = y + radius * Math.sin(angle);
      const animation = sparkElement.animate(
        [
          { transform: `translate(0, 0) scale(1)`, opacity: 1 },
          {
            transform: `translate(${targetX - x}px, ${
              targetY - y
            }px) scale(0.5)`,
            opacity: 0,
          },
        ],
        {
          duration: 800,
          easing: "ease-out",
          fill: "forwards",
        }
      );
      animation.onfinish = () => {
        sparkElement.remove();
      };
    };
  }, []);
  useEffect(() => {
    Array.from(chatBoxRef.current.children).forEach((elems, ind) => {
      setTimeout(() => {
        elems.style.transform = "scale(1)";
      }, (ind + 1) * 1000 - 800);
    });
  }, [chatBoxRef]);
  useEffect(() => {
    const particleElems = () => {
      let particles = document.createElement("div");
      particles.classList = "particleBg";
      sparkBackground.current.appendChild(particles);
    };
    for (let i = 0; i < 9; i++) {
      particleElems();
    }
    Array.from(sparkBackground.current.children).forEach((_, index) => {
      let angles = Math.random() * 100;
      let sideAngle = Math.random() * 100;
      sparkBackground.current.children[index].style.top = `${angles}%`;
      sparkBackground.current.children[index].style.left = `${sideAngle}%`;
    });
  }, []);
  return (
    <header>
      <Navbar/>
      <div className="spark-background" ref={sparkBackground}></div>
      <div
        ref={sparkContainer}
        className="sparkBox flex justify-end items-center w-full flex-col"
        id="sparkBox"
      >
        <div className="head-text mb-20">
          <h1>
            Meet and Chat with People Across the
            <span id="world" className=" ml-4">
              World Instantly!
            </span>
          </h1>
          <p>
            Join our platform to meet new friends, connect globally, and enjoy
            random chats with strangers from around the world!
          </p>
          <div className="head-buttons">
            <button>
              <span>
                {" "}
                <BsIcons.BsChatDots />
              </span>
              &nbsp;Chat Anonymously
            </button>
            <button>
              Get Started
              <span>
                <Fa6Icons.FaAngleRight />
              </span>
            </button>
          </div>
        </div>
        <div className="head-other-section">
          {/* <div className="circle"></div> */}
          <div className="display-glass">
            <div className="glass glassSecond">
              <img src="/homepage-image/videoCall.png" alt="video call" />
            </div>
            <div className="glass glassTop">
              <img src="/homepage-image/head.png" alt="device-two" />
              {/* conversation Start */}
              <div className="conversationBox" ref={chatBoxRef}>
                <div className="conversation kaneki right">
                  <img
                    src="/homepage-image/conversation/kaneki.png"
                    alt="kaneki"
                  />
                  <div className="chat-detail">
                    <div style={{ fontWeight: "bold" }}>James</div>
                    <p>Hi! How's your day going?</p>
                  </div>
                </div>

                <div className="conversation aaisha left">
                  <img
                    src="/homepage-image/conversation/aaisha.png"
                    alt="aaisha"
                  />
                  <div className="chat-detail">
                    <div style={{ fontWeight: "bold" }}>Jessica</div>
                    <p>Hey! Pretty good, thanks! How about yours?</p>
                  </div>
                </div>

                <div className="conversation kaneki right">
                  <img
                    src="/homepage-image/conversation/kaneki.png"
                    alt="kaneki"
                  />
                  <div className="chat-detail">
                    <div style={{ fontWeight: "bold" }}>James</div>
                    <p>
                      Not bad, just relaxing. Got any plans for the weekend?
                    </p>
                  </div>
                </div>

                <div className="conversation aaisha left">
                  <img
                    src="/homepage-image/conversation/aaisha.png"
                    alt="aaisha"
                  />
                  <div className="chat-detail">
                    <div style={{ fontWeight: "bold" }}>Jessica</div>
                    <p>Thinking of cooking. You?</p>
                  </div>
                </div>
              </div>
              {/* Conversation End */}
            </div>
            <div className="glass glassThird">
              <img src="/homepage-image/audioCall.png" alt="video call" />
            </div>
          </div>
        </div>
      </div>
      <div className="bottomLine"></div>
    </header>
  );
}
