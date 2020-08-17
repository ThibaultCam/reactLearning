// Components/Favorites.js

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'

import FilmList from './FilmList'

class Favorites extends React.Component {

    render() {
        return (
            <FilmList
                films={this.props.favoritesFilm}
                navigation={this.props.navigation}
                favorite={true}
            />
        )
    }
}

const styles = StyleSheet.create({})

const mapStateToProps = state => {
    return {
        favoritesFilm: state.favoritesFilm
    }
}

export default connect(mapStateToProps)(Favorites)