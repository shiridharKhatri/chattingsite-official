import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  AiIcons,
  BiIcons,
  BsIcons,
  FiIcons,
  HiIcons,
  Io5Icon,
  MdIcons,
  PiIcons,
} from "../assets/icons/icons";
import gsap from "gsap";
import '../styles/components/Setting.css'
export default function Setting(props) {
  const getPremiumBtn = useRef(null);
  const elRef = useRef(null);
  const [hover, setHover] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [activeLink, setActiveLink] = useState("profile");
  const navOnClick = (name) => {
    setActiveLink(name);
  };
  const calculatePosition = useCallback(() => {
    const el = elRef.current;
    if (el) {
      gsap.set(el, { x: 0, y: 0, scale: 1 });
      const box = el.getBoundingClientRect();
      setPosition({
        x: box.left + box.width * 0.5,
        y: box.top + box.height * 0.5,
        width: box.width,
        height: box.height,
      });
    }
  }, []);

  useEffect(() => {
    calculatePosition();
    window.addEventListener("resize", calculatePosition);
    return () => {
      window.removeEventListener("resize", calculatePosition);
    };
  }, [calculatePosition]);

  useEffect(() => {
    const el = elRef.current;
    const onMouseMove = (e) => {
      if (!el) return;
      const x = e.clientX - position.x;
      const y = e.clientY - position.y;
      const distance = Math.sqrt(x * x + y * y);
      const hoverArea = 0.5;
      if (distance < position.width * hoverArea) {
        if (!hover) {
          setHover(true);
        }
        onHover(e.clientX, e.clientY);
      } else if (hover) {
        setHover(false);
        onLeave();
      }
    };

    const onHover = (x, y) => {
      gsap.to(el, {
        x: (x - position.x) * 0.4,
        y: (y - position.y) * 0.4,
        scale: 1.15,
        ease: "power2.out",
        duration: 0.4,
      });
      el.style.zIndex = 10;
    };

    const onLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        scale: 1,
        ease: "elastic.out(1.2, 0.4)",
        duration: 0.7,
      });
      el.style.zIndex = 1;
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [hover, position]);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target.id === "settingContainer") {
        props.closeOnClick();
      }
    });
  }, []);

  return (
    <section
      ref={props.settingContRef}
      id="settingContainer"
      className="settingContainer"
    >
      <div className="settingBox">
        <div className="first-container">
          <ul>
            <li>
              <h2>User Settings</h2>
            </li>
            <li
              style={
                activeLink === "profile"
                  ? { background: "rgb(58 58 77)" }
                  : { background: "transparent" }
              }
              onClick={() => navOnClick("profile")}
              className="settingMenu"
            >
              <span>
                <Io5Icon.IoPersonOutline />
              </span>
              Profile
            </li>
            <li
              style={
                activeLink === "account"
                  ? { background: "rgb(58 58 77)" }
                  : { background: "transparent" }
              }
              onClick={() => navOnClick("account")}
              className="settingMenu"
            >
              <span>
                <Io5Icon.IoSettingsOutline />
              </span>
              My Account
            </li>

            <li
              style={
                activeLink === "privacy"
                  ? { background: "rgb(58 58 77)" }
                  : { background: "transparent" }
              }
              onClick={() => navOnClick("privacy")}
              className="settingMenu"
            >
              <span>
                <AiIcons.AiOutlineSafety />
              </span>
              Privacy
            </li>
            <li
              style={
                activeLink === "block"
                  ? { background: "rgb(58 58 77)" }
                  : { background: "transparent" }
              }
              onClick={() => navOnClick("block")}
              className="settingMenu"
            >
              <span>
                <MdIcons.MdBlockFlipped />
              </span>
              Blocked Accounts
            </li>
            <li
              style={
                activeLink === "friend"
                  ? { background: "rgb(58 58 77)" }
                  : { background: "transparent" }
              }
              onClick={() => navOnClick("friend")}
              className="settingMenu"
            >
              <span>
                <BsIcons.BsPersonFillDown />{" "}
              </span>
              Friend Requests
            </li>
            <li
              style={
                activeLink === "preferences"
                  ? { background: "rgb(58 58 77)" }
                  : { background: "transparent" }
              }
              onClick={() => navOnClick("preferences")}
              className="settingMenu"
            >
              <span>
                <BiIcons.BiCustomize />{" "}
              </span>
              Preferences
            </li>
            <li
              style={
                activeLink === "new"
                  ? { background: "rgb(58 58 77)" }
                  : { background: "transparent" }
              }
              onClick={() => navOnClick("new")}
              className="settingMenu"
            >
              <span>
                <BsIcons.BsStars />{" "}
              </span>
              What's New
            </li>
          </ul>
          <div className="premium">
            <button ref={getPremiumBtn}>
              <span>
                <PiIcons.PiCrownSimpleFill />{" "}
              </span>
              Get Premium
            </button>
          </div>
        </div>
        <div className="second-container">
          <div className="topHeadTitle">
            <h2>Profile</h2>
            <span onClick={props.closeOnClick}>
              <Io5Icon.IoClose />
            </span>
          </div>
          <div className="profileOverviewBox">
            <div className="topBox">
              <div className="profileDetails">
                <div ref={elRef} className="image">
                  <input
                    type="file"
                    style={{ display: "none" }}
                    id="photoUpload"
                  />
                  <label htmlFor="photoUpload">
                    <span>
                      <HiIcons.HiOutlineUpload />
                    </span>
                    <img src="/homepage-image/headIcons/an.png" alt="kaneki" />
                  </label>
                </div>
                <h2>Anonymous</h2>
              </div>
              <div className="profileOverviewBoxBtns">
                <button>Change Avatar</button>
              </div>
            </div>
            <div className="userDetailsDiv">
              <div className="username userDiv">
                <div>
                  <div className="label">Username</div>
                  <p>Anonymous</p>
                </div>
                <span>
                  <FiIcons.FiEdit />
                </span>
              </div>
              <div className="email userDiv">
                <div>
                  <div className="label">Email</div>
                  <p>jsdev976@gmail.com</p>
                </div>
                <span>
                  <FiIcons.FiEdit />
                </span>
              </div>
              <div className="phoneNumber userDiv">
                <div>
                  <div className="label">Number</div>
                  <p>+9779800000001</p>
                </div>
                <span>
                  <FiIcons.FiEdit />
                </span>
              </div>
              <div className="secretCode userDiv">
                <div>
                  <div className="label">
                    Secret code{" "}
                    <div className="help">
                      <BsIcons.BsQuestion />
                    </div>
                  </div>
                  <p>JDYF879AS12@3^DASD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
