import * as React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
//  import { userAdmin } from "../../App"




export default function FormConnexion(props) {

   const [pseudo, setPseudo] = useState("");
   const [mdp, setMdp] = useState("");


   const HandleChangePseudo = (event) => setPseudo(event.target.value);
   const HandleChangeMdp = (event) => setMdp(event.target.value);



   const handleSubmit = (event) => {
     event.preventDefault();
     let data = new Utilisateurs(pseudo,null, mdp);
     props.handler(data);
      console.log(data);
   }
  




  return (
    <View>
    
         <Text>
           Connexion
         </Text>
               <TextInput
                 required
                 fullWidth
                 id="pseudo"
                 label="Pseudo"
                 name="pseudo"
                 autoComplete="family-name"
                 value={pseudo}
                 onChange={HandleChangePseudo}
                 onChangeText={setPseudo}
               />
               <TextInput
                 required
                 fullWidth
                 name="password"
                 label="Mot de passe"
                 type="password"
                 id="password"
                 autoComplete="new-password"
                 value={mdp}
                 onChange={HandleChangeMdp}
                 onChangeText={setMdp}
               />
           <Button
             type="submit"
             fullWidth
             variant="contained"
             title="Valider"
             sx={{ mt: 3, mb: 2 }}
             onClick={handleSubmit}
           >
           </Button>
            <Text>Vous n'avez pas de compte ? Inscription</Text>
    </View>
  );
}
