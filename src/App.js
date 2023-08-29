// import './App.css';
// import React, { Component } from 'react'
// import NavBar from './components/NavBar';
// import News from './components/News';
// import NewsItem from './components/NewsItem';
// import {
//   BrowserRouter,
//   Route,
//   Routes,
// } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'


// export default class App extends Component {
//   pageSize = 12;
//   // apiKey = process.env.RAEACT_APP_NEWS_API
//   state = {
//     progress:0
//   }
//   setProgress = (progress)=>{
//     this.setState({progress: progress})
//   }

//   render() {
//     return (
//       <div>
//         <BrowserRouter>
//         <NavBar/>
//         <LoadingBar
//         color='#f11946'
//         progress={this.state.progress}
//         height={'5px'}
//       />
//         <Routes>
//           <Route exact path="/" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general"/>}></Route>
//           <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" category="business"/>}></Route>
//           <Route exact path="/entertainment" element={<News setProgress={this.setProgress}  key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>}></Route>
//           <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="sports"/>}></Route>
//           <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="in" category="health"/>}></Route>
//           <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general"/>}></Route>
//           <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="technology"/>}></Route>
//           <Route exact path="/science" element={<News setProgress={this.setProgress}  key="science" pageSize={this.pageSize} country="in" category="science"/>}></Route>
//         </Routes>
//         </BrowserRouter>
//       </div>
//     )
//   }
// }


//functional components

import './App.css';
import React, {useState} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
// import NewsItem from './components/NewsItem';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = ()=>{
  const pageSize=12;
  const [progress, setProgress] = useState(0)

    return (
      <div>
        <BrowserRouter>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        height={'5px'}
      />
        <Routes>
          <Route exact path="/NewsPool" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general"/>}></Route>
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={pageSize} country="in" category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress}  key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}></Route>
          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category="sports"/>}></Route>
          <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} country="in" category="health"/>}></Route>
          <Route exact path="/general" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general"/>}></Route>
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology"/>}></Route>
          <Route exact path="/science" element={<News setProgress={setProgress}  key="science" pageSize={pageSize} country="in" category="science"/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    )
}

export default App