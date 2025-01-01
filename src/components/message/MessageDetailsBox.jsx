import React, { useEffect, useRef } from "react";
import {
  BsIcons,
  Io5Icon,
  LuIcons,
  MdIcons,
  PiIcons,
  RiIcons,
} from "../../assets/icons/icons";
import { Link } from "react-router-dom";
export default function MessageDetailsBox() {
  const popUpmenu = useRef(null);
  const navBulletRef = useRef(null);
  const settingContRef = useRef(null);

  useEffect(() => {
    window.document.title = "Message | Bonfyre whisper";
  });

  const headMenuOnClick = (e) => {
    if (e.target.checked && popUpmenu.current.style.transform === "scale(0)") {
      popUpmenu.current.style.transform = "scale(1)";
    } else {
      popUpmenu.current.style.transform = "scale(0)";
    }
  };

  const dummyInbos = [
    {
      name: "Monkey Sentinel",
      img: "/homepage-image/headIcons/an.png",
      msg: "Lorem ipsum dolor sit dgef reaf....",
      background: "linear-gradient( 135deg, #FFAA85 10%, #B3315F 100%)",
    },
    {
      name: "Blood Witch",
      img: "/homepage-image/headIcons/an.png",
      msg: "Lorem ipsum dolor sit dgef reaf....",
      background: "linear-gradient( 135deg, #6B73FF 10%, #000DFF 100%)",
    },
    {
      name: "Thug-Master",
      img: "/homepage-image/headIcons/an.png",
      msg: "Lorem ipsum dolor sit dgef reaf....",
      background: "linear-gradient( 135deg, #FEC163 10%, #DE4313 100%)",
    },
    {
      name: "Desk Sandal",
      img: "/homepage-image/headIcons/an.png",
      msg: "Lorem ipsum dolor sit dgef reaf....",
      background: "linear-gradient( 135deg, #F6CEEC 10%, #D939CD 100%)",
    },
  ];

  const radioChangeOnClick = (e) => {
    if (e !== e) {
      navBulletRef.current.style.height = ".5rem";
      navBulletRef.current.style.width = ".5rem";
    } else {
      navBulletRef.current.style.left = `calc(var(--navmenu-width)/${e})`;
    }
  };

  const openSetting = () => {
    settingContRef.current.style.transform = "scale(1)";
  };

  return (
    <div className="firstContainer">
      <div className="messageHeader">
        <Link to={"/"}>
          <img src="/logoOnly.svg" alt="Bonfyre whisper logo" />
        </Link>
        <div id="headMenuIco" className="chatIcon">
          <label className="hamburger">
            <input type="checkbox" onClick={headMenuOnClick} />
            <svg viewBox="0 0 32 32">
              <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path className="line" d="M7 16 27 16"></path>
            </svg>
          </label>
        </div>
        <div className="popUpMenu" ref={popUpmenu}>
          <div className="card">
            <ul className="list">
              <li className="element">
                <svg
                  className="lucide lucide-settings"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  stroke="#7e8590"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                  <circle r="3" cy="12" cx="12"></circle>
                </svg>
                <p className="label">Setting</p>
              </li>
              <li className="element">
                <svg
                  className="lucide lucide-user-round-plus"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  stroke="#7e8590"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 21a8 8 0 0 1 13.292-6"></path>
                  <circle r="5" cy="8" cx="10"></circle>
                  <path d="M19 16v6"></path>
                  <path d="M22 19h-6"></path>
                </svg>
                <p className="label">Friend request</p>
              </li>
            </ul>
            <div className="separator"></div>
            <ul className="list">
              <li className="element delete">
                <svg
                  className="lucide lucide-trash-2 "
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  stroke="#7e8590"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                  <line y2="17" y1="11" x2="10" x1="10"></line>
                  <line y2="17" y1="11" x2="14" x1="14"></line>
                </svg>
                <p className="label">Delete all</p>
              </li>
              <li className="element delete">
                <MdIcons.MdBlockFlipped />
                <p className="label">Blocked accounts</p>
              </li>
            </ul>
            <div className="separator"></div>
            <ul className="list">
              <li className="element">
                <svg
                  className="lucide lucide-users-round"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  stroke="#7e8590"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 21a8 8 0 0 0-16 0"></path>
                  <circle r="5" cy="8" cx="10"></circle>
                  <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path>
                </svg>
                <p className="label">Team Access</p>
              </li>
            </ul>
          </div>
          {/* <ul>
          <li>
            <span>
              <BsIcons.BsPersonFillDown />
            </span>
            Friend Requests
          </li>
          <li>
            <span>
              <MdIcons.MdDelete />
            </span>
            Delete Conversation
          </li>
          <li>
            <span>
              <MdIcons.MdBlockFlipped />
            </span>
            Blocked accounts
          </li>
        </ul> */}
        </div>
      </div>
      <div className="navigation-bar">
        <div ref={navBulletRef} className="navmenu-director"></div>
        <label htmlFor="chat">
          <input
            type="radio"
            onClick={() => {
              radioChangeOnClick(7);
            }}
            id="chat"
            value="chat"
            name="value-radio"
            defaultChecked
          />
          <span>
            <BsIcons.BsChatDots />
          </span>
        </label>
        <label htmlFor="friend">
          <input
            type="radio"
            onClick={() => {
              radioChangeOnClick(2.2);
            }}
            id="friend"
            value="friend"
            name="value-radio"
          />
          <span>
            <PiIcons.PiUsers />
          </span>
        </label>
        <label htmlFor="notification">
          <input
            type="radio"
            onClick={() => {
              radioChangeOnClick(1.315);
            }}
            id="notification"
            value="notification"
            name="value-radio"
          />
          <span>
            <RiIcons.RiNotification2Line />
          </span>
        </label>
      </div>
      {/* Recent message section  */}
      <div className="recent-messages-section">
        <div className="message-box-info">Recent messages</div>
        {dummyInbos.length <= 0 ? (
          <div className={`inboxEmpty chat`}>
            <img src="/inbox.svg" alt="empty inbox" />
            <div>No message found!!</div>
          </div>
        ) : (
          <>
            {dummyInbos.map((e, index) => {
              return (
                <div key={index} className="message-card">
                  <div className="chat-card-details">
                    <img
                      src={e.img}
                      alt={e.name}
                      style={{ backgroundImage: e.background }}
                    />
                    <div>
                      <div className="name">{e.name}</div>
                      <p>{e.msg}</p>
                    </div>
                  </div>
                  <div className="message-card-menu">
                    <span className="time">2 min ago</span>
                    <span className="inboxStatus">2</span>
                  </div>
                  <div className="message-box-menu">
                    <span className="message-box-menu-icon">
                      <BsIcons.BsThreeDotsVertical />
                    </span>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>

      {/* Recent message section ends */}

      {/* Showing Empty messages  */}
      {/* <div className={`inboxEmpty ${navStatus === "chat" ? "chat" : ""}`}>
      <img src="/inbox.svg" alt="empty inbox" />
      <div>No message found!!</div>
    </div>

    <div className={`inboxEmpty ${navStatus === "friend" ? "friend" : ""}`}>
      <img src="/noFriend.svg" alt="empty friend" />
      <div>No friends found!!</div>
    </div>
    <div
      className={`inboxEmpty ${navStatus === "search" ? "search" : ""}`}
    ></div> */}
      {/* End of showing Empty messges  */}

      <div className="profileSection">
        <div className="imageProfile">
          <img
            src="/homepage-image/conversation/kaneki.png"
            alt="conversation-image-profile"
          />
        </div>
        <div className="otherMenu">
          <div className="name">
            {" "}
            <h2>Walker Vasquez</h2>
            <p>sidnight976@gmail.com</p>
          </div>
          <div className="setting-logout">
            <div className="setting" onClick={openSetting}>
              <span className="tooltip">Setting</span>
              <Io5Icon.IoSettingsSharp />
            </div>
            <div className="logOut">
              <span className="tooltip">Logout</span>
              <LuIcons.LuLogOut />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
