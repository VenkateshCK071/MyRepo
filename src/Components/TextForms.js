
// // //     import React, { useState, useRef } from 'react';

// // // export default function TextForms() {
// // //     const [text, setText] = useState('');
// // //     const textAreaRef = useRef(null);

// // //     const handleUpclick = () => {
// // //         let newText = text.toUpperCase();
// // //         setText(newText);
// // //     };

// // //     const handleLoclick = () => {
// // //         let newText = text.toLowerCase();
// // //         setText(newText);
// // //     };

// // //     const handleClear = () => {
// // //         setText('');
// // //     };

// // //     const handleCopy = () => {
// // //         if (textAreaRef.current) {
// // //             textAreaRef.current.select();
// // //             navigator.clipboard.writeText(textAreaRef.current.value);
// // //         }
// // //     };

// // //     const handleOnchange = (event) => {
// // //         setText(event.target.value);
// // //     };
// // //     const handleExtraSpaces=()=>{
// // //         let newText=text.split(/[ ]+/);
// // //         setText(newText.join(''));
// // //     }

// // //     return (
// // //         <>
// // //             <div className="container">
// // //                 <h1 id="demo">Enter the text to analyze below</h1>
// // //                 <div className="form-floating">
// // //                     <center>
// // //                         <textarea
// // //                             className="form-control"
// // //                             onChange={handleOnchange}
// // //                             value={text}
// // //                             style={{backgroundcolor:props.Mode==='light'?'dark':'light' , padding: "4px"}}
// // //                             id="Mybox"
// // //                             rows="8"
// // //                             ref={textAreaRef}
                            
// // //                          ></textarea>
// // //                         <label className="Mybox"></label>
// // //                     </center>
// // //                 </div>
// // //                 <button className='btn btn-primary mx-1 p-1' onClick={handleUpclick}>Convert to Uppercase</button>
// // //                 <button className='btn btn-primary mx-1 p-1' onClick={handleLoclick}>Convert to Lowercase</button>
// // //                 <button className='btn btn-primary mx-1 p-1' onClick={handleClear}>Clear Text</button>
// // //                 <button className='btn btn-primary mx-1 p-1' onClick={handleCopy}>Copy Text</button>
// // //                 <button className='btn btn-primary mx-1 p-1' onClick={handleExtraSpaces}>Handle Extra Space</button>
// // //             </div>
// // //             <div className="container my-3">
// // //                 <h1 >Text Counter</h1>
// // //                 <p>{text.split(/\s+/).filter((word) => word.length > 0).length} words and {text.length} characters</p>
// // //                 <p>{(0.008 * text.split(/\s+/).filter((word) => word.length > 0).length).toFixed(2)} minutes read</p>
// // //                 <h2>Preview</h2>
// // //                 <p>{text}</p>
// // //             </div>
// // //         </>
// // //     );
// // // }
// // import React, { useState, useRef } from 'react';

// // export default function TextForms(props) {
// //     const [text, setText] = useState('');
// //     const textAreaRef = useRef(null);

// //     const handleUpclick = () => {
// //         let newText = text.toUpperCase();
// //         setText(newText);
// //     };

// //     const handleLoclick = () => {
// //         let newText = text.toLowerCase();
// //         setText(newText);
// //     };

// //     const handleClear = () => {
// //         setText('');
// //     };

// //     const handleCopy = () => {
// //         if (textAreaRef.current) {
// //             textAreaRef.current.select();
// //             navigator.clipboard.writeText(textAreaRef.current.value);
// //         }
// //     };

// //     const handleOnchange = (event) => {
// //         setText(event.target.value);
// //     };

// //     const handleExtraSpaces = () => {
// //         let newText = text.split(/[ ]+/).join(' ');
// //         setText(newText);
// //     };

// //     return (
// //         <>
// //             <div className="container">
// //                 <h1 id="demo">Enter the text to analyze below</h1>
// //                 <div className="form-floating">
// //                     <center>
// //                         <textarea
// //                             className="form-control"
// //                             onChange={handleOnchange}
// //                             value={text}
// //                             style={{
// //                                 backgroundColor: props.Mode === 'dark' ? '#333' : '#fff',
// //                                 color: props.Mode === 'dark' ? '#fff' : '#000',
// //                                 padding: "4px"
// //                             }}
// //                             id="Mybox"
// //                             rows="8"
// //                             ref={textAreaRef}
// //                         ></textarea>
// //                         <label className="Mybox"></label>
// //                     </center>
// //                 </div>
// //                 <button className='btn btn-primary mx-1 p-1' onClick={handleUpclick}>Convert to Uppercase</button>
// //                 <button className='btn btn-primary mx-1 p-1' onClick={handleLoclick}>Convert to Lowercase</button>
// //                 <button className='btn btn-primary mx-1 p-1' onClick={handleClear}>Clear Text</button>
// //                 <button className='btn btn-primary mx-1 p-1' onClick={handleCopy}>Copy Text</button>
// //                 <button className='btn btn-primary mx-1 p-1' onClick={handleExtraSpaces}>Handle Extra Space</button>
// //             </div>
// //             <div className="container my-3">
// //                 <h1>Text Counter</h1>
// //                 <p>{text.split(/\s+/).filter((word) => word.length > 0).length} words and {text.length} characters</p>
// //                 <p>{(0.008 * text.split(/\s+/).filter((word) => word.length > 0).length).toFixed(2)} minutes read</p>
// //                 <h2>Preview</h2>
// //                 <p>{text}</p>
// //             </div>
// //         </>
// //     );
// // }
// // TextForms.js
// import React, { useState, useRef } from 'react';

// export default function TextForms(props) {
//   const [text, setText] = useState('');
//   const textAreaRef = useRef(null);

//   const handleUpclick = () => {
//     let newText = text.toUpperCase();
//     setText(newText);
//   };

//   const handleLoclick = () => {
//     let newText = text.toLowerCase();
//     setText(newText);
//   };

//   const handleClear = () => {
//     setText('');
//   };

//   const handleCopy = () => {
//     if (textAreaRef.current) {
//       textAreaRef.current.select();
//       navigator.clipboard.writeText(textAreaRef.current.value);
//     }
//   };

//   const handleOnchange = (event) => {
//     setText(event.target.value);
//   };

//   const handleExtraSpaces = () => {
//     let newText = text.split(/[ ]+/).join(' ');
//     setText(newText);
//   };

//   return (
//     <>
//       <div className="container">
//         <h1 id="demo">Enter the text to analyze below</h1>
//         <div className="form-floating">
//           <center>
//             <textarea
//               className="form-control"
//               onChange={handleOnchange}
//               value={text}
//               style={{
//                 backgroundColor: props.Mode === 'dark' ? '#333' : '#fff',
//                 color: props.Mode === 'dark' ? '#fff' : '#000',
//                 padding: "10px",
//                 borderRadius: '5px',
//                 borderColor: props.Mode === 'dark' ? '#555' : '#ccc'
//               }}
//               id="Mybox"
//               rows="8"
//               ref={textAreaRef}
//             ></textarea>
//             <label className="Mybox"></label>
//           </center>
//         </div>
//         <button className='btn btn-primary mx-1 p-1' onClick={handleUpclick}>Convert to Uppercase</button>
//         <button className='btn btn-primary mx-1 p-1' onClick={handleLoclick}>Convert to Lowercase</button>
//         <button className='btn btn-primary mx-1 p-1' onClick={handleClear}>Clear Text</button>
//         <button className='btn btn-primary mx-1 p-1' onClick={handleCopy}>Copy Text</button>
//         <button className='btn btn-primary mx-1 p-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
//       </div>
//       <div className="container ">
//         <h1>Text Counter</h1>
//         <p>{text.split(/\s+/).filter((word) => word.length > 0).length} words and {text.length} characters</p>
//         <p>{(0.008 * text.split(/\s+/).filter((word) => word.length > 0).length).toFixed(2)} minutes read</p>
//         <h2>Preview</h2>
//         <p>{text}</p>
//       </div>
//     </>
//   );
// }
// TextForms.js
import React, { useState, useRef } from 'react';

export default function TextForms(props) {
  const [text, setText] = useState('');
  const textAreaRef = useRef(null);

  const handleUpclick = () => {
    setText(text.toUpperCase());
  };

  const handleLoclick = () => {
    setText(text.toLowerCase());
  };

  const handleClear = () => {
    setText('');
  };

  const handleCopy = () => {
    if (textAreaRef.current) {
      textAreaRef.current.select();
      navigator.clipboard.writeText(textAreaRef.current.value);
    }
  };

  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  const handleExtraSpaces = () => {
    setText(text.split(/[ ]+/).join(' '));
  };

  return (
    <>
      <div className="container">
        <h1 id="demo">Enter the text to analyze below</h1>
        <div className="form-floating">
          <textarea
            className="form-control"
            onChange={handleOnchange}
            value={text}
            style={{
              backgroundColor: props.Mode === 'dark' ? '#333' : '#fff',
              color: props.Mode === 'dark' ? '#fff' : '#000'
            }}
            id="Mybox"
            rows="8"
            ref={textAreaRef}
          ></textarea>
        </div>
        <div className="btn-container">
          <button className='btn btn-primary' onClick={handleUpclick}>Convert to Uppercase</button>
          <button className='btn btn-primary' onClick={handleLoclick}>Convert to Lowercase</button>
          <button className='btn btn-primary' onClick={handleClear}>Clear Text</button>
          <button className='btn btn-primary' onClick={handleCopy}>Copy Text</button>
          <button className='btn btn-primary' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
      </div>
      <div className="container my-3">
        <h1>Text Counter</h1>
        <p>{text.split(/\s+/).filter((word) => word.length > 0).length} words and {text.length} characters</p>
        <p>{(0.008 * text.split(/\s+/).filter((word) => word.length > 0).length).toFixed(2)} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
