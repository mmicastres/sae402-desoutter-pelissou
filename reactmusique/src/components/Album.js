
// import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { useState, useEffect } from 'react';
import Titres from './Titres';
import Commentaires from './Commentaire';

export default function Albums(){
    const [lAlbums, setAlbums] = useState([])
    const idfrigo=1
    const url =
    `https://sae301.alwaysdata.net/api/albums/2`;

    function getAlbum(){
        
          const fetchOptions = {
            method: "GET" // --> DELETE = suppression
            };
            fetch(url, fetchOptions)
            .then((response) => {
            return response.json();
            })
            .then((dataJSON) => {
            console.log(dataJSON);
            setAlbums(dataJSON)

            })
            .catch((error) => console.log(error));
    }

    useEffect(()=> {
        getAlbum()
        }, [])


        return(
        
            <div className='Album'>
                   
                 <h2>Titre album : {lAlbums.titre}</h2>
                 <Titres></Titres>
                 <Commentaires></Commentaires>
                 
        
            </div>
        )

}



//         let handlerProduit = (produit) => {
          
//               let myHeaders = new Headers();
//               myHeaders.append("Content-Type", "application/json");
//               const fetchOptions = {
//                method: "POST", // --> PUT = modif
//                headers: myHeaders,
//                body: JSON.stringify(produit.toJSON()) // les nvelles valeurs du produit
//               };
//                 fetch(url, fetchOptions)
//                 .then((response) => {
//                 return response.json();
//                 })
//                 .then((dataJSON) => {
//                 console.log(dataJSON);
//                 // setLProduits(dataJSON)
//                 getProduits()
    
//                 })
//                 .catch((error) => console.log(error));
//           };

//           let handlerMoinsUn = (produit) => {
//             console.log(produit.qte);
//             produit.qte--
//             console.log(produit.qte);
           
           

//               let myHeaders = new Headers();
//               myHeaders.append("Content-Type", "application/json");
//               console.log(produit);
//               const fetchOptions = {
//                method: "PUT", // --> PUT = modif
//                headers: myHeaders,
//                body: JSON.stringify({"id": produit.id, "nom": produit.nom, "qte": produit.qte}) // les nvelles valeurs du produit
//               };
              
//               fetch(url, fetchOptions)
//                 .then((response) => {
//                 return response.json();
//                 })
//                 .then((dataJSON) => {
//                 console.log(dataJSON);
//                 // setLProduits(dataJSON)
//                 getProduits()
    
//                 })
//                 .catch((error) => console.log(error));

//           };

//           let handlerPlusUn = (produit) => {
//             console.log(produit.qte);
//             produit.qte++
//             console.log(produit.qte);
           
           

//               let myHeaders = new Headers();
//               myHeaders.append("Content-Type", "application/json");
//               console.log(produit);
//               const fetchOptions = {
//                method: "PUT", // --> PUT = modif
//                headers: myHeaders,
//                body: JSON.stringify({"id": produit.id, "nom": produit.nom, "qte": produit.qte}) // les nvelles valeurs du produit
//               };
              
//               fetch(url, fetchOptions)
//                 .then((response) => {
//                 return response.json();
//                 })
//                 .then((dataJSON) => {
//                 console.log(dataJSON);
//                 // setLProduits(dataJSON)
//                 getProduits()
    
//                 })
//                 .catch((error) => console.log(error));

//           };



//           let handlerDelete = (produit) => {
//             console.log(produit.id);
        
           
        
//             const fetchOptions = {
//                 method: "DELETE" // --> DELETE = suppression
//                 };
//                 fetch(url + "/" + produit.id, fetchOptions)
//                 .then((response) => {
//                 return response.json();
//                 })
//                 .then((dataJSON) => {
//                 console.log(dataJSON);
//                 getProduits();
//                 })
//                 .catch((error) => console.log(error));
//           };

// return(
//     <View style={styles.container} > 
//         <Text style={styles.title}>Contenu de mon frigo</Text>
//         <FlatList
//         data = {lProduits}
//         renderItem ={({item, index}) =>
//         <View style={styles.row} > 
//         <Text style={styles.title}>{item.nom} ({item.qte})</Text>
//         <Button title="-1" onPress={()=>handlerMoinsUn(item)} />
//         <Button title="+1" onPress={()=>handlerPlusUn(item)} />
//         <Button title="del" onPress={()=>handlerDelete(item)} />
//         </View>
//         }
//         keyExtractor={prod => prod.id}
//         ></FlatList>
//         <FrigoForm handler={handlerProduit}></FrigoForm>
//     </View>
        
    
// );
// }


//     const styles = StyleSheet.create({
//         container: {
//         flex: 1,
//         backgroundColor: '#bbb',
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingVertical: 50,
//         flexDirection: "column"
//         },
//         row: {
//             flex: 1,
//             padding: 10,
//             marginVertical: 8,
//             marginHorizontal: 8,
//             flexDirection: "row",
//             backgroundColor: '#fff',
//             width: '100%',
//             justifyContent: 'space-evenly'
//             // justifyContent: 'flex-center'
//             },
//         });
       
