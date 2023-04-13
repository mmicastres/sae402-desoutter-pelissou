import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function AlbumCommentaires(data) {
    console.log(data)
    return (

        <View style={styles.card}>
            <View style={styles.header}>
                <View style={styles.user}>
                    <Image source={{ uri: "https://static.750g.com/images/1200-630/0ed2e88c83811daea7c60e278de11b08/adobestock-28409562.jpeg" }} style={styles.avatar} />
                    <Text style={styles.username}>{data.pseudo}</Text>
                </View>
                <View style={styles.rating}>
                    <Text style={styles.ratingText}>{data.note}</Text>
                </View>
            </View>
            <View style={styles.content}>
                <Text style={styles.commentText}>{data.contenu}</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.date}>{data.date}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        backgroundColor: '#fff',
        padding: 15,
        margin: 10,
        width: '90%',
        maxWidth: 500,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    username: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    rating: {
        backgroundColor: '#f1c40f',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    ratingText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    content: {
        marginTop: 10,
        marginBottom: 20,
    },
    commentText: {
        fontSize: 14,
    },
    footer: {
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        marginTop: 10,
        paddingTop: 10,
    },
    date: {
        fontSize: 12,
        color: '#666',
    },
});



