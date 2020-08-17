// Components/FilmDetail.js

import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text, ActivityIndicator, ScrollView, Image, Button } from 'react-native'
import { getFilmDetailFromApi, getImageFromApi } from '../API/TMDBApi'
import moment from 'moment';
import numeral from 'numeral';
import { connect } from 'react-redux'


class FilmDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      film: undefined,
      isLoading: false
    }
  }

  componentDidMount() {
    const favoriteFilmIndex = this.props.favoritesFilm.findIndex(item => item.id === this.props.navigation.state.params.idFilm)
    if (favoriteFilmIndex !== -1) { 
      this.setState({
        film: this.props.favoritesFilm[favoriteFilmIndex]
      })
      return
    }
    this.setState({ isLoading: true })
    getFilmDetailFromApi(this.props.navigation.state.params.idFilm).then(data => {
      this.setState({
        film: data,
        isLoading: false
      })
    })
  }

  _toggleFavorite() {
    const action = { type: 'TOGGLE_FAVORITE', value: this.state.film }
    this.props.dispatch(action);
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }

  _displayFavoriteImage() {
    var sourceImage = require('../Assets/ic_favorite_border.png')
    if (this.props.favoritesFilm.findIndex(item => item.id === this.state.film.id) !== -1) {
      sourceImage = require('../Assets/ic_favorite.png')
    }
    return (
      <Image
        style={styles.favorite_image}
        source={sourceImage}
      />
    )
  }

  _calculDate(date) {
    return moment(date).format('DD-MM-YYYY');
  }

  _calculateBudget(rev) {
    return numeral(rev).format('0,0[.]00 $');
  }

  _separateList(list) {
    let string = '';
    for (const child of list) {
      string += child.name + ' / ';
    }
    return string.substring(0, string.length - 2);
  }

  _displayFilm() {
    if (this.state.film != undefined) {
      return (
        <ScrollView style={styles.scrollview_container}>
          <Image style={styles.image}
            source={{ uri: getImageFromApi(this.state.film.backdrop_path) }}
          />
          <Text style={styles.title}>{this.state.film.title}</Text>
          <TouchableOpacity
            style={styles.favorite_container}
            onPress={() => this._toggleFavorite()}>
            {this._displayFavoriteImage()}
          </TouchableOpacity>
          <Text style={styles.description}>{this.state.film.overview}</Text>
          <Text style={styles.info}>Sorti le {this._calculDate(this.state.film.release_date)}</Text>
          <Text style={styles.info}>Note : {this.state.film.vote_average}</Text>
          <Text style={styles.info}>Nombre de vote :{this.state.film.vote_count}</Text>
          <Text style={styles.info}>Budget : {this._calculateBudget(this.state.film.budget)}</Text>
          <Text style={styles.info}>Genre(s) : {this._separateList(this.state.film.genres)}</Text>
          <Text style={styles.info}>Companie(s) : {this._separateList(this.state.film.production_countries)}</Text>
        </ScrollView>
      )
    }
  }

  render() {
    return (
      <View style={styles.main_container}>
        {this._displayLoading()}
        {this._displayFilm()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  favorite_container: {
    alignItems: 'center',
  },
  scrollview_container: {
    flex: 1
  },
  image: {
    height: 169,
    margin: 5
  },
  title: {
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
    padding: 5
  },
  description: {
    padding: 5
  },
  info: {
    fontWeight: "bold",
    padding: 5
  },
  favorite_image: {
    width: 40,
    height: 40
  }
})

const mapStateToProps = (state) => {
  return {
    favoritesFilm: state.favoritesFilm
  }
}

export default connect(mapStateToProps)(FilmDetail)