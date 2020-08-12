// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class FilmItem extends React.Component {
    render() {
        const film = this.props.film
        return (
            <View style={styles.main_container}>
                <Image
                    style={styles.image}
                    source={{ uri: "image" }}
                />
                <View style={styles.content_container}>
                    <View style={styles.title}>
                        <Text style={styles.title_text}>{film.title}</Text>
                        <Text style={styles.title_note}>{film.vote_average}</Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
                    </View>
                    <View style={styles.sorti_container}>
                        <Text style={styles.sorti_text}>{film.release_date}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 190,
        flexDirection: 'row'
    },
    content_container: {
        flex: 1,
        margin: 5
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    title_note: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#666666',
        flex: 0.2
    },
    title: {
        flex: 3,
        flexDirection: 'row'
    },
    image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: 'gray'
    },
    sorti_container: {
        flex: 1
    },
    description_container: {
        flex: 7
    },
    description_text: {
        fontStyle: 'italic',
        color: '#666666'
    },
    sorti_text: {
        textAlign: 'right',
        fontSize: 14
    }
})

export default FilmItem