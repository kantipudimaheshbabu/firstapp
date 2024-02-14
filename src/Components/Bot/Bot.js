
import gptlogo from '../assets/chatgpt.svg';
import msgicon from '../assets/message.svg';
import add from '../assets/add-30.png';
import home from '../assets/home.svg';
import saved from '../assets/bookmark.svg';
import upgrade from '../assets/rocket.svg';
import send from '../assets/send.svg'
import user from '../assets/user-icon.png'
import gptimglogo from '../assets/chatgptLogo.svg'

// import {sendMsg} from './openai';

// import { useState } from 'react';


import './Bot.css';





function Bot() {
  
  /*

   const [input,setInput]=useState("");

   const handleSend=async () =>{
     const resp=await sendMsg(input);
     console.log(resp);
   }

   
   */
      


  return (
    <div className="App">
      <div className='sidebar'>
        

        <div className='upperside'>
          <div className='uppersidetop'>
            <div>
              <img src={gptlogo}  alt='logo' className='logo' />
              <span className='brand'>chatGpt</span>
            </div>
            <div>
              <button className='btn btn-primary p-2 m-2'><img src={add} alt='logo' className='w-25' /> new chat</button>
            </div>
            <div>
              <button className='btn btn-outline-primary p-2 m-2'><img src={msgicon} alt='logo'  /> what is programming</button>
              <button className='btn btn-outline-primary p-2 m-2'><img src={msgicon} alt='logo' /> how to use api</button>

            </div>

          </div>

        </div>
        <div className='lowerside'>
          <div className='listiems'><img src={home} alt='logo' className='listiemsimage' />home</div>
          <div className='listiems'><img src={saved} alt='logo' className='listiemsimage' />saved</div>
          <div className='listiems'><img src={upgrade} alt='logo' className='listiemsimage' />upgrade</div>

        </div>




      </div>

      <div className='mainbar'>

        <div className='chats'>
          <div className='chat'>
            <img src={user} alt='logo' className='chatimg' />
            <p>You can also add OPTION to the lorem command with an undor exammatted Lorem Ipsum text and a word wrap width of 40 characters. Using an unrecognized option will insert an error message into the document. Using more than one underscore character in a row (e.g. lorem__html___p3) will insert an error message into the document.

            </p>
          </div>

          
          

      



          <div className='chat bot'>
            <img src={gptimglogo} alt='logo' className='chatimg' />

            <p>ts a certain  of random Lorem Ipsum paragraphs into the current document. The count option indicates how many paragraphs to insert. For example, lorem_p3 will insert three paragraphs into the document. If the count option is not provided, one paragraph will be inserted. If the type of Lorem Ipsum text is not specified, the extension will generate paragraphs by default.
            </p>

          </div>

        </div>
        <div className='chatfooter'>
          <div className='inp'>
            { <input type='text' placeholder='search here' /* value={input} onChange={(e)=>{setInput(e.target.value)}}*/ /> }
            <button><img src={send} alt='logo' className='send' /*onClick={handleSend}*/ /></button>

          </div>

        </div>

      </div>




      
    </div>
  );
}

export default Bot;


