import React, {Component} from 'react';

class ListMenuUtama extends Component {
  render() {
    return (
      <div>
        <h2>
          <center>Selamat Datang Di Warung Nusantara</center>
        </h2>
        <center>
        <img
        src={this.props.linkgambar} alt="gambar-makanan" width={this.props.lebar} />
        </center>
      </div>
    );
  }
}

export default ListMenuUtama;
