// import React from 'react';
// import Auth from '../modules/Auth';
//
// const AuthWrapper = (props) => (
//  const xhr = new XMLHttpRequest();
//     xhr.open('get', '/api/' + props.url);
//     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//     // set the authorization HTTP header
//     xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
//     xhr.responseType = 'json';
//     xhr.addEventListener('load', () => {
//       if (xhr.status === 200) {
//         console.log('component mounts with auth')
//         this.setState({
//           secretData: xhr.response.message
//         });
//       }
//     });
//     xhr.send();
//   }
//
// AuthWrapper.propTypes = {
//   url: PropTypes.string.isRequired
// };
//
//
//
// // class AuthWrapper extends React.Component {
//
//   /**
//    * Class constructor.
//    */
//   // constructor(props) {
//   //   super(props);
//   //
//   //   this.state = {
//   //     secretData: ''
//   //   };
//   //   console.log(this.state)
//   // }
//   //
//   // /**
//   //  * This method will be executed after initial rendering.
//   //  */
//   // componentDidMount() {
//   //   console.log(this.state)
//   //   // let url = props.url
//   //   // this.setState({ url });
//   //   const xhr = new XMLHttpRequest();
//   //   xhr.open('get', '/api/dashboard');
//   //   xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//   //   // set the authorization HTTP header
//   //   xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
//   //   xhr.responseType = 'json';
//   //   xhr.addEventListener('load', () => {
//   //     console.log(this.state)
//   //     if (xhr.status === 200) {
//   //       console.log('component mounts with auth')
//   //       this.setState({
//   //         secretData: xhr.response.message
//   //       });
//   //     }
//   //   });
//   //   xhr.send();
//   // }
//
//   /**
//    * Render the component.
//    */
// //   render() {
// //     return (
// //       <div>{!this.state.secretData ? undefined : this.props.children}</div>
// //     );
// //   }
// //
// // }
//
// export default AuthWrapper;
