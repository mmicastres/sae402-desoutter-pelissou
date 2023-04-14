import * as React from "react";
import { useState, useEffect } from 'react';

import { TextInput } from "react-native-gesture-handler";
import { View, Button, StyleSheet, Picker } from "react-native";
import { useNavigation } from '@react-navigation/native';

import Commentaires from '../classes/Commentaires';
import { UserContext } from '../App';




    export default function FormAjoutCom(props) {

        // Instancing all needed variables to create a new Comment

        let pseudo = "Poulet";
        let id_album = props.id_album;
        let date = new Date();
        let date_ajout_com = date.toJSON().slice(0, 10);

        const [commentaire, setCommentaire] = useState("");
        const [note, setSelectedValue] = useState("");


        const HandleChangeCommentaire = (event) => setCommentaire(event.target.value);

        const handleSubmit = (event) => {
            event.preventDefault();
            let data = new Commentaires(commentaire, date_ajout_com, note, pseudo, id_album);
            console.log(commentaire);
            console.log(note);
            console.log(date_ajout_com);
            console.log(pseudo);
            console.log(id_album);
            props.handlerUtilisateur(data);

        }


        return (
            <View>
                <Picker
                            selectedValue={note}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >   
                                <Picker.Item value="1" label={1}>/</Picker.Item>
                                <Picker.Item value="2" label={2}>/</Picker.Item>
                                <Picker.Item value="3" label={3}>/</Picker.Item>
                                <Picker.Item value="4" label={4}>/</Picker.Item>
                                <Picker.Item value="5" label={5}>/</Picker.Item>

                        </Picker>

                <TextInput
                    required
                    style={styles.input}
                    fullWidth
                    id="commentaire"
                    placeholder="Commenter l'Album"
                    name="commentaire"
                    autoComplete="family-name"
                    value={commentaire}
                    onChange={HandleChangeCommentaire}
                    onChangeText={setCommentaire}
                />
                <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    title='Valider'
                    sx={{ mt: 3, mb: 2 }}
                    onPress={handleSubmit}
                >
                </Button>
            </View>
        );
    }

    const styles = StyleSheet.create({
        container: {
            width: '80%',
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
            padding: 20,
            alignItems: 'center',
        },
        title: {
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 20,
            color: '#333333',
        },
        inputContainer: {
            width: '100%',
            marginBottom: 20,
        },
        input: {
            height: 50,
            backgroundColor: '#F0F0F0',
            borderRadius: 10,
            padding: 10,
            marginBottom: 10,
            color: '#444444',
        },
        buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
        },
        button: {
            backgroundColor: '#FFFFFF',
            borderColor: '#333333',
            borderWidth: 2,
            borderRadius: 10,
            padding: 10,
            alignItems: 'center',
            flex: 1,
            marginLeft: 10,
        },
        registerButton: {
            backgroundColor: '#333333',
            borderColor: '#333333',
            borderWidth: 2,
            marginLeft: 0,
        },
        buttonText: {
            color: '#333333',
            fontSize: 18,
            fontWeight: 'bold',
        },
        registerButtonText: {
            color: '#FFFFFF',
        },
        selectContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
        },
        selectplaceholder: {
            fontSize: 16,
            fontWeight: 'bold',
            marginRight: 10,
        },
        selectButton: {
            backgroundColor: '#FFF',
            borderRadius: 10,
            paddingVertical: 8,
            paddingHorizontal: 12,
            borderWidth: 1,
            borderColor: '#000',
            marginRight: 10,
        },
        selectButtonSelected: {
            backgroundColor: '#F0FFF0',
            borderRadius: 10,
            paddingVertical: 8,
            paddingHorizontal: 12,
            marginRight: 10,
        },
        selectButtonText: {
            color: '#000',
            fontSize: 16,
            fontWeight: 'bold',
        },
        selectButtonTextSelected: {
            color: '#FFF',
            fontSize: 16,
            fontWeight: 'bold',
        },
    })
