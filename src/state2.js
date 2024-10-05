// import React from "react";

// class Car extends React.Component {
//     constructor(props) { 
//         super(props); 
//         this.state = {
//             vis: true,
//             isdark:false, 
//         };
//     }

//     toggle = () => {
//         this.setState((prev) => ({
//             vis: !prev.vis, 
//         }));
//     };

//     togglemode = ()=>{
//         this.setState((prev) =>({
//             isdark:!prev.isdark,
//         }));
//     };

//     render() {
//         const backclo={
//             backgroundColor: this.state.isdark ? "balck":"yellow";
//         }
//         return (
//             <div style={this.backclo}>
//                 <button onClick={this.togglemode}> 
//                     switch to {isdark ?"light":"dark"}
//                     {this.state.vis ? "Hide" : "Show"} toggle
//                 </button>
//                 {this.state.vis && <p>para</p>} 
//             </div>
//         );
//     }
// }

// export default Car;
