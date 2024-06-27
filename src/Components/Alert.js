// // import React from 'react'

// // export default function Alert(props) {
// //   return (
// //     <div>
// //       <div className="alert alert-warning alert-dismissible fade show" role="alert">
// //       <strong>{props.alert.msg}</strong>:{props.alert.msg}
// //   <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
// // </div>
// //     </div>
// //   )
// // }
// import React from 'react';
// import PropTypes from 'prop-types';

// export default function Alert({ alert }) {
//   if (!alert) return null; // Do not render anything if alert is null

//   const alertClass = `alert alert-${alert.type || 'warning'} alert-dismissible fade show`;

//   return (
//     <div>
//       <div className={alertClass} role="alert">
//         <strong>{alert.msg}</strong>
//         <button 
//           type="button" 
//           className="btn-close" 
//           data-bs-dismiss="alert" 
//           aria-label="Close" 
//           onClick={() => setAlert(null)}>
//         </button>
//       </div>
//     </div>
//   );
// }

// Alert.propTypes = {
//   alert: PropTypes.shape({
//     type: PropTypes.string,
//     msg: PropTypes.string.isRequired
//   })
// };
import React from 'react';
import PropTypes from 'prop-types';

export default function Alert({ alert }) {
  if (!alert) return null; // Do not render anything if alert is null

  const alertClass = `alert alert-${alert.type || 'warning'} alert-dismissible fade show`;

  return (
    <div>
      <div className={alertClass} role="alert">
        <strong>{alert.msg}</strong>
        <button 
          type="button" 
          className="btn-close" 
          data-bs-dismiss="alert" 
          aria-label="Close">
        </button>
      </div>
    </div>
  );
}

Alert.propTypes = {
  alert: PropTypes.shape({
    type: PropTypes.string,
    msg: PropTypes.string.isRequired
  })
};
