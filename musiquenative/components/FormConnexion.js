import * as React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";
import Utilisateurs from "../classes/Utilisateurs"
//  import { userAdmin } from "../../App"




export default function FormConnexion(props) {

  // let date = new Date();
  // let date_inscription = date.toJSON().slice(0, 10);


  const [pseudo, setPseudo] = useState("");
  const [mdp, setMdp] = useState("");
  // const [pp, setPp] = useState("");


  const HandleChangePseudo = (event) => setPseudo(event.target.value);
  const HandleChangeMdp = (event) => setMdp(event.target.value);
  // const HandleChangePp = (event) => setPp(event.target.value);



  const handleSubmit = (event) => {
     event.preventDefault();
    console.log(pseudo);
    let data = new Utilisateurs(pseudo, null, mdp);
    console.log(data);
    props.handlerUtilisateur(data);
  }





  return (
    <View>
      <TextInput
        style={styles.input}
        required
        fullWidth
        id="pseudo"
        placeholder="Pseudo"
        name="pseudo"
        autoComplete="family-name"
        value={pseudo}
        onChange={HandleChangePseudo}
        onChangeText={setPseudo}
      />
      <TextInput
        style={styles.input}
        required
        fullWidth
        name="password"
        placeholder="Mot de passe"
        type="password"
        id="password"
        secureTextEntry={true}
        value={mdp}
        onChange={HandleChangeMdp}
        onChangeText={setMdp}
      />
      <Button
        fullWidth
        variant="contained"
        title="Valider"
        sx={{ mt: 3, mb: 2 }}
        onPress={handleSubmit}
      >
      </Button>
      <Text>Vous n'avez pas de compte ? Inscription</Text>
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
  selectLabel: {
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
});