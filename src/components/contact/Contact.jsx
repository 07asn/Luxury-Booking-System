// // import { useState } from "react";
// // import { database } from "/src/firebaseConfig";
// // import { ref, push } from "firebase/database";
// // import ChatBot from "react-simple-chatbot";
// // import { ThemeProvider } from "styled-components";
// // import Navbar from "../navBar/NavBar";
// // import Footer from "../footer/Footer";

// // const Contact = () => {
// //   const [isChatOpen, setIsChatOpen] = useState(false);
// //   const [formData, setFormData] = useState({ name: "", email: "", message: "" });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await push(ref(database, "contactMessages"), formData);
// //       alert("Message sent successfully!");
// //       setFormData({ name: "", email: "", message: "" });
// //     } catch (error) {
// //       console.error("Error sending message:", error);
// //     }
// //   };

// //   const steps = [
// //     { id: "1", message: "Hello! How can I assist you today? 😊", trigger: "2" },
// //     {
// //       id: "2",
// //       options: [
// //         { value: "buy", label: "🔎 Looking to buy an apartment", trigger: "3" },
// //         { value: "rent", label: "🏠 Looking to rent an apartment", trigger: "4" },
// //         { value: "support", label: "⚙️ Technical support", trigger: "5" },
// //         { value: "other", label: "❓ Other questions", trigger: "6" },
// //       ],
// //     },
// //     { id: "3", message: "What is your budget range?", trigger: "askAgain" },
// //     { id: "4", message: "Are you looking for a furnished or unfurnished apartment?", trigger: "askAgain" },
// //     { id: "5", message: "Please send us the details, and we will assist you immediately!", trigger: "askAgain" },
// //     { id: "6", message: "Please type your question:", trigger: "userInput" },
// //     { id: "userInput", user: true, trigger: "7" },
// //     { id: "7", message: "Thank you for your message! We will get back to you soon.", trigger: "askAgain" },
// //     { id: "askAgain", message: "Would you like to ask another question?", trigger: "endChat" },
// //     { id: "endChat", options: [{ value: "yes", label: "Yes", trigger: "userInput" }, { value: "no", label: "No", trigger: "closeChat" }] },
// //     { id: "closeChat", message: "Thank you for reaching out! Closing chat now...", end: true },
// //   ];

// //   const theme = {
// //     background: "#EDEADE",
// //     fontFamily: "Arial",
// //     headerBgColor: "#A09681",
// //     headerFontColor: "#fff",
// //     botBubbleColor: "#A09681",
// //     botFontColor: "#fff",
// //     userBubbleColor: "#8C826D",
// //     userFontColor: "#fff",
// //   };

// //   const toggleChat = () => setIsChatOpen(!isChatOpen);
// //   const closeChat = () => setIsChatOpen(false);

// //   return (
// //     <div
// //       className="bg-blue-50"
// //       style={{
// //         backgroundColor: "#EDEADE",
// //         backgroundSize: "cover",
// //         backgroundPosition: "center"
// //       }}
// //     >
// //       <Navbar />
// //       <div className="min-h-screen flex flex-col items-center py-20 px-5">
// //   <div className="w-full max-w-4xl space-y-8">
// //     <div className="bg-[#C2B8A3] p-6 rounded-lg shadow-md text-[#FAF9F6]">
// //       <h2 className="text-2xl font-bold text-center mb-4">📩 Contact Us</h2>
// //       <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
// //         <label className="text-lg font-semibold">Name</label>
// //         <input
// //           type="text"
// //           name="name"
// //           placeholder="✍️ Your Name"
// //           value={formData.name}
// //           onChange={handleChange}
// //           className="p-3 border-2 border-[#B3A890] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A49B89] text-black"
// //           required
// //         />
// //         <label className="text-lg font-semibold">Email</label>
// //         <input
// //           type="email"
// //           name="email"
// //           placeholder="📧 Your Email"
// //           value={formData.email}
// //           onChange={handleChange}
// //           className="p-3 border-2 border-[#B3A890] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A49B89] text-black"
// //           required
// //         />

// //         <label className="text-lg font-semibold">Message</label>
// //         <textarea
// //           name="message"
// //           rows="4"
// //           placeholder="📝 Write your message..."
// //           value={formData.message}
// //           onChange={handleChange}
// //           className="p-3 border-2 border-[#B3A890] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A49B89] text-black"
// //           required
// //         ></textarea>

// //         <button className="bg-[#B3A890] text-white py-3 rounded-lg text-lg font-bold hover:bg-[#9C9278] transition duration-300">
// //            Send Message
// //         </button>
// //       </form>
// //     </div>
// //   </div>

// //   <div className="w-full mt-8">
// //     <iframe
// //       src="https://maps.google.com/maps?q=your-location&output=embed"
// //       className="w-full h-96 rounded-lg shadow-lg"
// //     ></iframe>
// //   </div>
// // </div>
// //       <div onClick={toggleChat} className="fixed bottom-10 right-10 bg-[#A59B87] p-4 rounded-full shadow-lg cursor-pointer transition duration-300 hover:bg-[#7C7363]">
// //   <span className="text-[#F5F1E8] text-xl">🤖</span>
// // </div>

// //       {isChatOpen && (
// //         <div className="fixed bottom-20 right-10 w-80 h-96 bg-[#EAE6DA] rounded-lg shadow-md z-50">
// //   <ThemeProvider theme={theme}>
// //     <div className="flex justify-end p-2">
// //       <button 
// //         onClick={closeChat} 
// //         className="text-[#5C5346] text-2xl font-bold p-2 transition duration-300 hover:text-[#3F3A32]"
// //       >
// //         X
// //       </button>
// //     </div>
// //     <ChatBot steps={steps} handleEnd={closeChat} />
// //   </ThemeProvider>
// // </div>
// //       )}
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default Contact;





// import { useState } from "react";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import Navbar from "../navBar/NavBar";
// import Footer from "../footer/Footer";

// // إعداد Google Gemini API باستخدام متغير بيئة
// const genAI = new GoogleGenerativeAI("AIzaSyBJyntscA6thfETnoWWvcpdQtpuf3nOeJ4");

// const Contact = () => {
//   const [isChatOpen, setIsChatOpen] = useState(false);
//   const [messages, setMessages] = useState([{ role: "system", content: "Hello! How can I assist you today?" }]);
//   const [input, setInput] = useState("");

//   const handleChatSubmit = async (e) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     const newMessages = [...messages, { role: "user", content: input }];
//     setMessages(newMessages);
//     setInput("");

//     try {
//       const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//       const result = await model.generateContent(input);

//       const aiReply = result.response.candidates[0].content.parts[0].text;
//       setMessages([...newMessages, { role: "assistant", content: aiReply }]);
//     } catch (error) {
//       console.error("Error fetching AI response:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f5f2e9]">
//       <Navbar />
//       <div className="min-h-screen flex flex-col items-center py-20 px-5">
//         <h2 className="text-3xl font-bold text-[#5C5346]">📩 Contact Us</h2>

//         {/* Chat Section */}
//         <div className="fixed bottom-10 right-10">
//           <button onClick={() => setIsChatOpen(!isChatOpen)} className="bg-[#8C826D] text-white p-4 rounded-full shadow-lg">
//             🤖 Chat
//           </button>
//         </div>

//         {isChatOpen && (
//           <div className="fixed bottom-24 right-10 w-96 bg-white rounded-xl shadow-lg p-4">
//             <div className="flex justify-between items-center border-b pb-2 mb-2">
//               <h3 className="text-lg font-bold text-[#5C5346]">AI Chatbot</h3>
//               <button onClick={() => setIsChatOpen(false)} className="text-[#5C5346]">✖</button>
//             </div>
//             <div className="h-64 overflow-y-auto bg-gray-100 p-2 rounded-md">
//               {messages.map((msg, index) => (
//                 <div key={index} className={`p-2 my-1 rounded-md ${msg.role === "user" ? "bg-blue-200 self-end" : "bg-gray-300 self-start"}`}>
//                   {msg.content}
//                 </div>
//               ))}
//             </div>
//             <form onSubmit={handleChatSubmit} className="flex mt-2">
//               <input
//                 type="text"
//                 className="flex-grow p-2 border rounded-md"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 placeholder="Type your message..."
//               />
//               <button type="submit" className="ml-2 p-2 bg-[#8C826D] text-white rounded-md">Send</button>
//             </form>
//           </div>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Contact;


import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { database } from "/src/firebaseConfig";
import { ref, push } from "firebase/database";
import Navbar from "../navBar/NavBar";
import Footer from "../footer/Footer";

// جلب مفتاح Google Gemini API من متغيرات البيئة
const genAI = new GoogleGenerativeAI("AIzaSyBJyntscA6thfETnoWWvcpdQtpuf3nOeJ4");

const Contact = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: "system", content: "Hello! How can I assist you today?" }]);
  const [input, setInput] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await push(ref(database, "contactMessages"), formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleChatSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(input);

      const aiReply = result.response.candidates[0].content.parts[0].text;
      setMessages([...newMessages, { role: "assistant", content: aiReply }]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
    }
  };

  return (
    <div className="bg-[#EDEADE] min-h-screen">
      <Navbar />
      <div className="min-h-screen flex flex-col items-center py-20 px-5">
        {/* نموذج الاتصال */}
        <div className="w-full max-w-4xl space-y-8">
          <div className="bg-[#C2B8A3] p-6 rounded-lg shadow-md text-[#FAF9F6]">
            <h2 className="text-2xl font-bold text-center mb-4">📩 Contact Us</h2>
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              <label className="text-lg font-semibold">Name</label>
              <input
                type="text"
                name="name"
                placeholder="✍️ Your Name"
                value={formData.name}
                onChange={handleChange}
                className="p-3 border-2 border-[#B3A890] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A49B89] text-black"
                required
              />
              <label className="text-lg font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="📧 Your Email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 border-2 border-[#B3A890] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A49B89] text-black"
                required
              />
              <label className="text-lg font-semibold">Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="📝 Write your message..."
                value={formData.message}
                onChange={handleChange}
                className="p-3 border-2 border-[#B3A890] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A49B89] text-black"
                required
              ></textarea>
              <button className="bg-[#B3A890] text-white py-3 rounded-lg text-lg font-bold hover:bg-[#9C9278] transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* خريطة الموقع */}
        <div className="w-full mt-8">
          <iframe
            src="https://maps.google.com/maps?q=your-location&output=embed"
            className="w-full h-96 rounded-lg shadow-lg"
            title="Our Location"
          ></iframe>
        </div>
      </div>

      {/* زر فتح الشات بوت */}
      <div onClick={() => setIsChatOpen(!isChatOpen)} className="fixed bottom-10 right-10 bg-[#A59B87] p-4 rounded-full shadow-lg cursor-pointer transition duration-300 hover:bg-[#7C7363]">
        <span className="text-[#F5F1E8] text-xl">🤖</span>
      </div>

      {/* صندوق الشات بوت */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-10 w-96 bg-[#EAE6DA] rounded-lg shadow-md z-50 p-4">
          <div className="flex justify-between items-center border-b pb-2 mb-2">
            <h3 className="text-lg font-bold text-[#5C5346]">AI Chatbot</h3>
            <button onClick={() => setIsChatOpen(false)} className="text-[#5C5346] text-2xl font-bold p-2 transition duration-300 hover:text-[#3F3A32]">
              ✖
            </button>
          </div>
          <div className="h-64 overflow-y-auto bg-gray-100 p-2 rounded-md">
            {messages.map((msg, index) => (
              <div key={index} className={`p-2 my-1 rounded-md ${msg.role === "user" ? "bg-blue-200 self-end" : "bg-gray-300 self-start"}`}>
                {msg.content}
              </div>
            ))}
          </div>
          <form onSubmit={handleChatSubmit} className="flex mt-2">
            <input
              type="text"
              className="flex-grow p-2 border rounded-md"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button type="submit" className="ml-2 p-2 bg-[#A59B87] text-white rounded-md">Send</button>
          </form>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Contact;
