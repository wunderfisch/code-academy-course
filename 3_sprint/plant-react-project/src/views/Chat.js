import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../config/firebaseConfig";
import { AuthContext } from "../context/AuthContext";

function Chat() {
  // make user available to have credentials to make posting possible
  const { user } = useContext(AuthContext);

  // state variable to store the chat messages in an array of data
  const [messages, setMessages] = useState([]);
  // create state variable to store the text of user posting, empty string
  const [userMessage, setuserMessage] = useState("");

  // not needed anymore. getMessagesRealTime does everthing
  // const getMessages = async () => {
  //   // variable "querySnapshot" stores the value of async function "getDocs",
  //   // takes a parameter "collection" that has access to "db" we exported in "config" (all need to be imported)
  //   // "chat" is name of the collection we set
  //   // for everything stored there, we do a forEach and access ".data"
  //   const querySnapshot = await getDocs(collection(db, "chat"));
  //   // create empty array to store messages
  //   const messagesArray = [];
  //   querySnapshot.forEach((doc) => {
  //     // doc is a firebase specific object, only with method .data() we can access needed part of doc
  //     // console.log("doc :>> ", doc);
  //     // console.log("doc.data :>> ", doc.data());
  //     // push messages to messagesArray
  //     messagesArray.push(doc.data());
  //     // console.log(`${doc.id} => ${doc.data()}`);
  //   });
  //   // setMessage variable with messagesArray
  //   setMessages(messagesArray);
  // };

  const getMessagesRealTime = () => {
    // listen to collection "chat"
    // (delelte where-part to listen to every part of the database)
    // import query + collection + orderBy
    // orderBy orders the database by the given variable
    const q = query(collection(db, "chat"), orderBy("date"));
    // import onSnapshot
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messagesArray = [];
      // querySnapshot is observing live, loop over that
      querySnapshot.forEach((doc) => {
        // push the full document in the array
        messagesArray.push(doc.data());
      });
      // setMessages with messagesArray when loop finishes
      setMessages(messagesArray);
    });
  };

  // make function to render the date object (in fact milliseconds *1000 = seconds)
  const transformDate = (seconds) => {
    // older way of transforming seconds in to dates
    // const date = new Date(seconds * 1000).toLocaleDateString();
    const intlDate = new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "short",
      day: "numeric",
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
    }).format(seconds * 1000);
    return intlDate;
  };

  // for user Input
  const handleUserInput = (event) => {
    setuserMessage(event.target.value);
  };

  // handler for button click
  // when adding firebase code, make async
  const handleUserMessageSubmit = async () => {
    console.log("userMessage :>> ", userMessage);

    // create object that contains the user generated message
    const messageObject = {
      // value of typed input after button click
      text: userMessage,
      // logged in user from authContext, therefore add useContext(authContext)
      author: user.email,
      // date from time when posting
      date: new Date(),
    };

    // Add a new document with a generated id.
    // import addDoc, collection it should be added is called "chat"
    // for every message posted call addDoc Method and collection Method and name which collection it should be written in
    const docRef = await addDoc(collection(db, "chat"), messageObject);
    console.log("Document written with ID: ", docRef.id);
  };

  // run everytime we open component
  useEffect(() => {
    // not needed anymore because getMessagesRealTime does the full job
    // getMessages();
    // getMessagesRealTime does get messages and update them everytime there is a new one
    getMessagesRealTime();
  }, []);

  return (
    <div>
      <h3 className="margin">Chat</h3>
      {/* map over to display single messages = msg in new div*/}
      <div>
        {messages &&
          messages.map((msg, index) => {
            return (
              <div className="chatmessage" key={index}>
                {/* date is a timestamp/ obejct, can't be rendered just like msg.date. needs to be transformed */}
                <p>{transformDate(msg.date.seconds)}</p>
                <p>{msg.author}</p>
                <p>{msg.text}</p>
              </div>
            );
          })}
      </div>
      <div>
        <input type="text" value={userMessage} onChange={handleUserInput} />
        <button onClick={handleUserMessageSubmit}>send</button>
      </div>
    </div>
  );
}

export default Chat;
