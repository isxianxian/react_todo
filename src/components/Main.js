import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';


class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div className='main' >
      <div className='bg'></div>
      <div className='content' style={{ width: '600px', margin: '0 auto', paddingTop: '20px' }}>
        <Header></Header >
        <Body></Body>
        <Footer></Footer>
      </div>
    </div >
  }

}

export default Main;