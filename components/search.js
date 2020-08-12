// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'
import films from '../helpers/filmsData'
import FilmItem from './filmItem'

class Search extends React.Component {

    constructor(props) {
        super(props);
        this._films = [];
        console.log('ehthtrezrrrrrrrrrrrrrrrrrrrreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaezaeaee')
    }

    _loadFilms() {
        getFilmsFromApiWithSearchedText("star").then(data => console.log(data));
    }

    render() {
        return (
            <View style={styles.main_container}>
                <TextInput style={styles.textinput} placeholder='Titre du film' />
                <Button title='Rechercher' onPress={() => this._loadFilms()} />
                <FlatList
                    data={films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <FilmItem film={item} />}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
})

export default Search