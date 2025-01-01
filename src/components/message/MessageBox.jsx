import React, { useState, useEffect, useRef } from "react";
import {
  BsIcons,
  Io5Icon,
  MdIcons,
  PiIcons,
  RiIcons,
  AiIcons,
  GoIcons,
} from "../../assets/icons/icons";
export default function MessageBox() {
  const [inpVal, setInpVal] = useState("");
  const [message, setMessage] = useState([]);
  const searchMessagePopUp = useRef(null);

  useEffect(() => {
    window.document.title = "Message | Bonfyre whisper";
  });

  const valueChangeOnMessageInput = (e) => {
    setInpVal(e.target.value);
  };
  useEffect(() => {
    let micBtn = document.getElementById("micBtn");
    let sendBtn = document.getElementById("sendBtn");
    if (inpVal.length > 0) {
      sendBtn.style.transform = "scale(1)";
      micBtn.style.transform = "scale(0)";
    } else {
      sendBtn.style.transform = "scale(0)";
      micBtn.style.transform = "scale(1)";
    }
  }, [inpVal]);
  const messageSend = (e) => {
    e.preventDefault();
    let messageBox = { position: "left", message: inpVal };
    setMessage([...message, messageBox]);
    setInpVal("");
  };

  const searchMenuOnClick = (scale) => {
    searchMessagePopUp.current.style.transform = `scale(${scale})`;
  };
  const searchMessageInput = (e) => {
    console.log(e.target);
  };

  // <div className="no-conversation-with-person">
  //   <img src="/noConvo.png" alt="no conversation" />
  //   <div>No conversation! send message to start conversation</div>
  // </div>

  const SimpleMessage = ({ type = "received", message, sender, time }) => {
    const isSent = type === "sent";
    return (
      <div
        className={`flex items-start gap-2.5 ${
          isSent ? "justify-end" : "justify-start"
        }`}
      >
        {isSent ? null : (
          <img
            className="w-12 h-12 rounded-full"
            src="/homepage-image/conversation/kaneki.png"
            alt="User image"
          />
        )}

        <div
          className={`flex flex-col w-full max-w-[320px] leading-1.5 p-4 ${
            isSent
              ? "bg-blue-100 text-gray-900 dark:bg-blue-700 dark:text-white rounded-s-xl rounded-se-xl"
              : "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white rounded-e-xl rounded-es-xl"
          }`}
        >
          <div
            className={`flex items-center space-x-2 rtl:space-x-reverse ${
              isSent ? "justify-end" : ""
            }`}
          >
            <span className="text-[1.2rem] font-semibold">
              {isSent ? "You" : sender}
            </span>
            <span className="text-[1rem] font-normal text-gray-500 dark:text-gray-400">
              {time}
            </span>
          </div>
          <p className="text-[1.2rem] font-normal py-2.5">{message}</p>
          <p className="text-[1.2rem] font-normal py-2.5">{message}</p>
          <p className="text-[1.2rem] font-normal py-2.5">{message}</p>
          <p className="text-[1.2rem] font-normal py-2.5">{message}</p>
          <span className="text-[1rem] font-normal text-gray-500 dark:text-gray-400">
            {isSent ? "Sent" : "Delivered"}
          </span>
        </div>

        {isSent && (
          <button
            id="dropdownMenuIconButton"
            data-dropdown-toggle="dropdownDots"
            data-dropdown-placement="bottom-start"
            className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
            type="button"
          >
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 4 15"
            >
              <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
            </svg>
          </button>
        )}

        {isSent && (
          <div
            id="dropdownDots"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownMenuIconButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Edit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Forward
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Copy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Report
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Delete
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  };

  const FileMessage = () => {
    return (
      <div className="flex items-start gap-2.5">
        <img
          className="w-12 h-12 rounded-full"
          src="/homepage-image/conversation/kaneki.png"
          alt="Bonnie Green image"
        />
        <div className="flex flex-col gap-1">
          <div className="flex flex-col w-full max-w-[326px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span className="text-[1.2rem] font-semibold text-gray-900 dark:text-white">
                Bonnie Green
              </span>
              <span className="text-[1.2rem] font-normal text-gray-500 dark:text-gray-400">
                11:46
              </span>
            </div>
            <div className="flex items-start my-2.5 bg-gray-50 dark:bg-gray-600 rounded-xl p-2">
              <div className="me-2">
                <span className="flex items-center gap-2 text-[1.2rem] font-medium text-gray-900 dark:text-white pb-2">
                  <svg
                    fill="none"
                    aria-hidden="true"
                    className="w-10 h-10 flex-shrink-0"
                    viewBox="0 0 20 21"
                  >
                    <g clip-path="url(#clip0_3173_1381)">
                      <path
                        fill="#E2E5E7"
                        d="M5.024.5c-.688 0-1.25.563-1.25 1.25v17.5c0 .688.562 1.25 1.25 1.25h12.5c.687 0 1.25-.563 1.25-1.25V5.5l-5-5h-8.75z"
                      />
                      <path
                        fill="#B0B7BD"
                        d="M15.024 5.5h3.75l-5-5v3.75c0 .688.562 1.25 1.25 1.25z"
                      />
                      <path
                        fill="#CAD1D8"
                        d="M18.774 9.25l-3.75-3.75h3.75v3.75z"
                      />
                      <path
                        fill="#F15642"
                        d="M16.274 16.75a.627.627 0 01-.625.625H1.899a.627.627 0 01-.625-.625V10.5c0-.344.281-.625.625-.625h13.75c.344 0 .625.281.625.625v6.25z"
                      />
                      <path
                        fill="#fff"
                        d="M3.998 12.342c0-.165.13-.345.34-.345h1.154c.65 0 1.235.435 1.235 1.269 0 .79-.585 1.23-1.235 1.23h-.834v.66c0 .22-.14.344-.32.344a.337.337 0 01-.34-.344v-2.814zm.66.284v1.245h.834c.335 0 .6-.295.6-.605 0-.35-.265-.64-.6-.64h-.834zM7.706 15.5c-.165 0-.345-.09-.345-.31v-2.838c0-.18.18-.31.345-.31H8.85c2.284 0 2.234 3.458.045 3.458h-1.19zm.315-2.848v2.239h.83c1.349 0 1.409-2.24 0-2.24h-.83zM11.894 13.486h1.274c.18 0 .36.18.36.355 0 .165-.18.3-.36.3h-1.274v1.049c0 .175-.124.31-.3.31-.22 0-.354-.135-.354-.31v-2.839c0-.18.135-.31.355-.31h1.754c.22 0 .35.13.35.31 0 .16-.13.34-.35.34h-1.455v.795z"
                      />
                      <path
                        fill="#CAD1D8"
                        d="M15.649 17.375H3.774V18h11.875a.627.627 0 00.625-.625v-.625a.627.627 0 01-.625.625z"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3173_1381">
                        <path
                          fill="#fff"
                          d="M0 0h20v20H0z"
                          transform="translate(0 .5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Flowbite Terms & Conditions
                </span>
                <span className="flex text-[1rem] font-normal text-gray-500 dark:text-gray-400 gap-2">
                  12 Pages
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="self-center"
                    width="3"
                    height="4"
                    viewBox="0 0 3 4"
                    fill="none"
                  >
                    <circle cx="1.5" cy="2" r="1.5" fill="#6B7280" />
                  </svg>
                  18 MB
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="self-center"
                    width="3"
                    height="4"
                    viewBox="0 0 3 4"
                    fill="none"
                  >
                    <circle cx="1.5" cy="2" r="1.5" fill="#6B7280" />
                  </svg>
                  PDF
                </span>
              </div>
              <div className="inline-flex self-center items-center">
                <button
                  className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600"
                  type="button"
                >
                  <svg
                    className="w-4 h-4 text-gray-900 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                  </svg>
                </button>
              </div>
            </div>
            <span className="text-[1rem] font-normal text-gray-500 dark:text-gray-400">
              Delivered
            </span>
          </div>
        </div>
        <button
          id="dropdownMenuIconButton"
          data-dropdown-toggle="dropdownDots"
          data-dropdown-placement="bottom-start"
          className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
          type="button"
        >
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 4 15"
          >
            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
          </svg>
        </button>
        <div
          id="dropdownDots"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownMenuIconButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Reply
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Forward
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Copy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Report
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Delete
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="secondContainer">
      <div className="userProfileHead">
        <div className="status-name">
          <img
            src="/homepage-image/headIcons/an.png"
            alt="conversation-image-profile"
          />
          <div>
            <div className="headText">Matt Andersen</div>
            <p>
              <span></span>Online
            </p>
          </div>
        </div>
        <div className="detailsSection">
          <ul>
            <li>
              <span onClick={() => searchMenuOnClick(1)}>
                {" "}
                <Io5Icon.IoSearchOutline />
              </span>

              <form name="searchForm" ref={searchMessagePopUp}>
                <span
                  onClick={() => searchMenuOnClick(0)}
                  className="goBackLeft"
                >
                  <GoIcons.GoChevronLeft />
                </span>
                <input
                  onChange={searchMessageInput}
                  type="search"
                  name="searchMessage"
                  id="searchMessage"
                  placeholder="Search message..."
                />
                <button name="searchMessageBtn" aria-label="search-form">
                  <Io5Icon.IoSearchOutline />
                </button>
              </form>
            </li>
            <li>
              <Io5Icon.IoVideocam />
            </li>
            <li>
              <Io5Icon.IoCall />
            </li>
            <li>
              <BsIcons.BsThreeDotsVertical />
            </li>
          </ul>
        </div>
      </div>
      <div className="main-box">
        <div className="chatting-box">
          {/* Conversaion starts from here  */}
          {!message || message.length === 0 ? (
            <>
              <SimpleMessage
                type="sent"
                message=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia porro fuga amet consequuntur odit laboriosam adipisci aspernatur dignissimos. Iure quia aspernatur soluta eius quis facere numquam doloremque incidunt libero at."
                sender="Shiridhar Khatri"
                time="11:11 PM"
              />
            </>
          ) : (
            <>
              {message?.map((e, index) => {
                return (
                  <div key={index} className={`person-chat ${e.position}`}>
                    {e.position === "right" ? (
                      ""
                    ) : (
                      <img
                        src="/homepage-image/conversation/kaneki.png"
                        alt="kaneki"
                      />
                    )}
                    <div className="message-details">
                      <div className="para-box">
                        <p>{e.message}</p>
                        <div className="message-menu">
                          <ul>
                            <li>
                              <span className="tooltip">Reply</span>
                              <MdIcons.MdReply />
                            </li>
                            <li>
                              <span className="tooltip">Delete</span>
                              <AiIcons.AiOutlineDelete />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
          {/*  */}
          {/* comversation ends here  */}
        </div>
        <div className="form-for-message-box">
          <form>
            <div className="shuffleBtn">
              <span className="tooltip">Skip</span>
              <PiIcons.PiShuffleFill />
            </div>

            <div className="input-div">
              <input
                value={inpVal}
                onChange={valueChangeOnMessageInput}
                type="text"
                placeholder="Type your message here ..."
              />
              <div className="emoji tools">
                <span className="tooltip">Emoji</span>
                <BsIcons.BsEmojiSmile />
              </div>
              <div style={{ marginLeft: "-1rem" }} className="attachment tools">
                <span className="tooltip">Choose image</span>
                <BsIcons.BsImage />
              </div>
            </div>

            <div className="message-btns">
              <button
                onClick={messageSend}
                id="sendBtn"
                aria-label="Send message"
              >
                <Io5Icon.IoSend />
              </button>
              <button
                // onClick={voiceRecord}
                id="micBtn"
                aria-label="Record message"
              >
                <RiIcons.RiMicFill />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
