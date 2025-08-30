import React, { useState, useRef, useEffect } from 'react';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! 👋 I'm Akash's virtual assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [inputText, setInputText] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showContactForm, setShowContactForm] = useState(false);
  const messagesEndRef = useRef(null);
  
  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const startContactForm = () => {
    setShowContactForm(true);
    setMessages(prev => [
      ...prev,
      { text: "Great! Please enter your name:", sender: 'bot' }
    ]);
  };

  const handleNameSubmit = () => {
    if (!inputText.trim()) return;
    
    setName(inputText);
    setMessages(prev => [
      ...prev,
      { text: inputText, sender: 'user' },
      { text: "Thanks! Now please enter your email (optional):", sender: 'bot' }
    ]);
    setInputText('');
  };

  const handleEmailSubmit = () => {
    setEmail(inputText);
    setMessages(prev => [
      ...prev,
      { text: inputText || "(No email provided)", sender: 'user' },
      { text: "Now, what would you like to discuss with Akash?", sender: 'bot' }
    ]);
    setInputText('');
  };

  const sendMessage = async () => {
    if (!inputText.trim()) return;
    
    // Add user message to chat
    const userMessage = { text: inputText, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    
    // Handle contact form flow
    if (showContactForm) {
      if (!name) {
        handleNameSubmit();
        return;
      } else if (email === '') {
        handleEmailSubmit();
        return;
      }
    }
    
    const messageToSend = inputText;
    setInputText('');
    
    try {
      // Send message to backend
      const response = await fetch('/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: messageToSend,
          name,
          email 
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      // Add automated response
      setTimeout(() => {
        setMessages(prev => [
          ...prev, 
          { 
            text: "Thanks for your message! Akash will get back to you soon via Telegram.", 
            sender: 'bot' 
          }
        ]);
        // Reset the form
        setShowContactForm(false);
        setName('');
        setEmail('');
      }, 1000);
      
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [
        ...prev, 
        { 
          text: "Sorry, there was an error sending your message. Please try again later.", 
          sender: 'bot' 
        }
      ]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-button" onClick={toggleChat}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="white"/>
        </svg>
      </div>
      
      <div className={`chatbot-window ${isOpen ? 'active' : ''}`}>
        <div className="chatbot-header">
          <h3>Chat with Akash</h3>
          <button className="chatbot-close" onClick={toggleChat}>×</button>
        </div>
        
        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          {!showContactForm && messages.length === 1 && (
            <div className="quick-actions">
              <button onClick={startContactForm}>Contact Akash</button>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="chatbot-input">
          <input 
            type="text" 
            placeholder="Type your message..." 
            value={inputText}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <button onClick={sendMessage}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.01 21L23 12 2.01 3 2 10L17 12 2 14L2.01 21Z" fill="white"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;