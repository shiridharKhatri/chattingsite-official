import React from "react";
import MessageDetailsBox from "../components/message/MessageDetailsBox";
import "../styles/components/Message.css";
import MessageBox from "../components/message/MessageBox";
import Setting from "../components/Setting";
export default function Message() {
  return (
    <section className="message-section">
        <Setting/>
      <MessageDetailsBox />
      <MessageBox/>
    </section>
  );
}
