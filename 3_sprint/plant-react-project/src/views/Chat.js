import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../config/firebaseConfig";

function Chat() {
  // state variable to store the chat messages in an array of data
  const [messages, setMessages] = useState([]);

  const getMessages = async () => {
    // variable "querySnapshor" stores tha value of async function "getDocs",
    // takes a parameter "collection" that has access to "db" we exported in "config" (all need to be imported)
    // "chat" is name of the collection we use
    // for everything stored there, we do a forEach and access ".data"
    const querySnapshot = await getDocs(collection(db, "chat"));
    // create empty array to store messages
    const messagesArray = [];
    querySnapshot.forEach((doc) => {
      // doc is a firebase specific object, only with method .data() we can access needed part of doc
      console.log("doc :>> ", doc);
      console.log("doc.data :>> ", doc.data());
      // push messages to messagesArray
      messagesArray.push(doc.data());
      console.log(`${doc.id} => ${doc.data()}`);
    });
    // setMessage variable with messagesArray
    setMessages(messagesArray);
  };
  // make function to render the date object (in fact milliseconds *1000 = seconds)
  const transformDate = (seconds) => {
    const date = new Date(seconds * 1000).toLocaleDateString();
    return date;
  };

  // run everytime we open component
  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div>
      <h3>Chat</h3>
      {/* map over to display single messages = msg in new div*/}
      <div>
        {messages &&
          messages.map((msg) => {
            return (
              <div className="chatmessage">
                {/* date is a timestamp/ obejct, can't be rendered just like msg.date. needs to be transformed */}
                <p>{transformDate(msg.date.seconds)}</p>
                <p>{msg.author}</p>
                <p>{msg.text}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Chat;
