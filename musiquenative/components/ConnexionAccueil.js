export default function ConnexionAccueil() {

    // const url = `https://sae301.alwaysdata.net/api/connexion`;

    //     let myHeaders = new Headers();
    //     myHeaders.append("Content-Type", "application/json");

    //     const fetchOptions = {
    //         method: "POST",
    //         headers: myHeaders,
    //         body: JSON.stringify(data.toJSON()) // les nvelles valeurs du produit
    //     };
    //     fetch(url, fetchOptions)
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((dataJSON) => {
    //             setUtilisateur(dataJSON[0])
    //             console.log(dataJSON[0].pseudo)
    //             value.pseudo = dataJSON[0].pseudo
    //             value.admin = dataJSON[0].admin
    //             console.log(value)

    //         })
    //         .catch((error) => console.log(error));

            // window.location.replace(
            //     "/"
            //   );
        

    return (
        <View>
            <FormConnexion></FormConnexion>
        </View>
    )
}

// const styles = StyleSheet.create({
//     albumContainer: {
//         display: 'flex',
//         flexDirection: 'row',
//         width: '100%',
//         height: '80%',
//         justifyContent: 'space-evenly',
//     },
// });




