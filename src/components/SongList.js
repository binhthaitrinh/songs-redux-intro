import React from 'react';
import { connect } from 'react-redux';
import { addSong, selectSong } from '../actions';

class SongList extends React.Component {
  onBtnClick = song => {
    // this.props.addSong({ title: 'asdasdasd', duration: '0:00' });
    this.props.selectSong(song);
  };
  renderList() {
    console.log(this.props);
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              onClick={() => this.onBtnClick(song)}
              className="ui button primary">
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    // console.log(this.props);

    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    songs: state.songs,
    selectedSong: state.selectedSong
  };
};
export default connect(
  mapStateToProps,
  { addSong, selectSong }
)(SongList);
