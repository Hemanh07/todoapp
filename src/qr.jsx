import React, { Fragment, useState } from 'react'



const Qr = () => {
    const handleSubmit = (event,url)=>{
        event.preventDefault();
    setUrl(url);
    }

    const baseUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=';
    const [url,setUrl]=useState('');
    const [input,setInput] = useState('');
  return (
    < div
    style={{
        display:"flex",
        height:'100vh',
        flexDirection:'column',
        justifyContent:"spaceEvenly",
        alignItems:"center"
    }}>
    <form 
    onSubmit={()=>handleSubmit(event,input)}
    style={{
      margin:0,
      padding:0,
      display:"flex",
      flexDirection:'column',
      justifyContent:"spaceAround",
      alignItems:"center"
  }}
    >
<label
 htmlFor="urlInput">

 </label>
 <input
 id="urlInput"
  type="text" 
  value={input}
  onChange={()=>setInput(document.querySelector('#urlInput').value)}
  />

  <button
   type='submit'>
    create
  </button>
    </form>
   { url &&
        
            <img 
      src={baseUrl + 200 + 'x' + 200 + '&data=' + url} 
      id="img" 
      alt=" " 
      /> || <div
      style={{        height:'200px',
        width:'200px'
      }}></div>
        
    }
    </div >
  )
}

export default Qr