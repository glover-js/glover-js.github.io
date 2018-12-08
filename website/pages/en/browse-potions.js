const React = require('react');
const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class PotionBrowser extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Container className="mainContainer documentContainer postContainer">
        <p>PotionBrowser</p>
      </Container>
    );
  }
}

module.exports = PotionBrowser;
