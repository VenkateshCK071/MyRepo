// // // // import './App.css';
// // // // import Navbar from './Components/Navbar';
// // // // import TextForms from './Components/TextForms';
// // // // import './App.css';
// // // // import { useState } from 'react';
// // // // //import About from './Components/About';

// // // // function App() {
// // // //   const [Mode,setMode]=useState('light');
// // // //  const toggleMode=()=>{
// // // //     if(Mode==='light')
// // // //     {
// // // //       setMode('dark')
// // // //       document.body.style.background="grey"
// // // //     }
// // // //     else{
// // // //        setMode('light')
// // // //        document.body.style.background="white"
// // // //     }
// // // //   }
// // // //   return (
// // // //     <>
    
// // // //     <Navbar title="TextHelper" Mode={Mode} toggleMode={toggleMode}/>
// // // //     <div className="container">
// // // //    <TextForms Mode={Mode} /> 
// // // //     {/* <About/> */}
// // // //     </div>
   
  
  

// // // //    </>
  
    
   
// // // //   );
// // // // }

// // // // export default App;
// // // // App.js
// // // import './App.css';
// // // import Navbar from './Components/Navbar';
// // // import TextForms from './Components/TextForms';
// // // import { useState } from 'react';

// // // function App() {
// // //   const [Mode, setMode] = useState('light');

// // //   const toggleMode = () => {
// // //     setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
// // //   };

// // //   return (
// // //     <>
// // //       <Navbar title="TextHelper" Mode={Mode} toggleMode={toggleMode} />
// // //       <div className={`container ${Mode === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
// // //         <TextForms Mode={Mode} />
// // //       </div>
// // //     </>
// // //   );
// // // }

// // // export default App;
// // // App.js
// // import './App.css';
// // import Navbar from './Components/Navbar';
// // import TextForms from './Components/TextForms';
// // import { useState, useEffect } from 'react';
// // import Alert from './Components/Alert';

// // function App() {
// //   const [Mode, setMode] = useState('light');

// //   useEffect(() => {
// //     document.body.className = Mode; // Apply mode class to body
// //   }, [Mode]);

// //   const toggleMode = () => {
// //     setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
// //   };
// //   const[alert,setalert]=useState('null');
// //   const showalert=(messege, type)=>{
// //     setalert({
// //       msg:messege,
// //       type:type
// //     })

// //   }

// //   return (
// //     <>
// //       <Navbar title="TextHelper" Mode={Mode} toggleMode={toggleMode} />
// //       <Alert alert={alert}/>
// //       <div className="container">
// //         <TextForms Mode={Mode} />
// //       </div>
// //     </>
// //   );
// // }

// // export default App;
// import './App.css';
// import Navbar from './Components/Navbar';
// import TextForms from './Components/TextForms';
// import { useState, useEffect } from 'react';
// import Alert from './Components/Alert';

// function App() {
//   const [Mode, setMode] = useState('light');
//   const [alert, setAlert] = useState(null);

//   useEffect(() => {
//     document.body.className = Mode; // Apply mode class to body
//   }, [Mode]);

//   const toggleMode = () => {
//     if (Mode === 'light') {
//       setMode('dark');
//       showAlert('Success! Dark mode is enabled.', 'success');
//     } else {
//       setMode('light');
//       showAlert('Success! Light mode is enabled.', 'success');
//     }
//   };

//   const showAlert = (message, type) => {
//     setAlert({ msg: message, type: type });

//     // Automatically dismiss the alert after 3 seconds
//     setTimeout(() => setAlert(null), 3000);
//   };

//   return (
//     <>
//       <Navbar title="TextHelper" Mode={Mode} toggleMode={toggleMode} />
//       <Alert alert={alert} />
//       <div className={`container ${Mode === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
//         <TextForms Mode={Mode} />
//       </div>
//     </>
//   );
// }

// export default App;
// import './App.css';
// import Navbar from './Components/Navbar';
// import TextForms from './Components/TextForms';
// import { useState, useEffect } from 'react';
// import Alert from './Components/Alert';


// function App() {
//   const [Mode, setMode] = useState('light');
//   const [alert, setAlert] = useState(null);

//   useEffect(() => {
//     document.body.className = Mode; // Apply mode class to body
//   }, [Mode]);

//   const toggleMode = () => {
//     if (Mode === 'light') {
//       setMode('dark');
//       showAlert('Success! Dark mode is enabled.', 'success');
//       document.title='TextUtils- Dark Mode'
//     } else {
//       setMode('light');
//       showAlert('Success! Light mode is enabled.', 'success');
//       document.title='TextUtils- Light Mode'
//     }
//   };

//   const showAlert = (message, type) => {
//     setAlert({ msg: message, type: type });

//     // Automatically dismiss the alert after 3 seconds
//     setTimeout(() => setAlert(null), 3000);
//   };

//   return (
//     <>
    
//       <Navbar title="TextHelper" Mode={Mode} toggleMode={toggleMode} />
//       <Alert alert={alert} />
//       <div className={`container ${Mode === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
//         <TextForms Mode={Mode}  />
//       </div>
//     </>
//   );
// }

// export default App;
import './App.css';
import Navbar from './Components/Navbar';
import TextForms from './Components/TextForms';
import { useState, useEffect } from 'react';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/About'; // Import the About component

function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    document.body.className = Mode; // Apply mode class to body
  }, [Mode]);

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      showAlert('Success! Dark mode is enabled.', 'success');
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      showAlert('Success! Light mode is enabled.', 'success');
      document.title = 'TextUtils - Light Mode';
    }
  };

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });

    // Automatically dismiss the alert after 3 seconds
    setTimeout(() => setAlert(null), 3000);
  };

  return (
    <Router>
      <Navbar title="TextHelper" Mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className={`container ${Mode === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
        <Routes>
          <Route path="/" element={<TextForms Mode={Mode} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
