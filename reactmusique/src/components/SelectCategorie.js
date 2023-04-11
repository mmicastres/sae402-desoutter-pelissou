export default function SelectCategorie(){
    
    const url = `https://sae301.alwaysdata.net/api/connexion`;

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const fetchOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(data.toJSON()) // les nvelles valeurs du produit
    };
    fetch(url, fetchOptions)
        .then((response) => {
            return response.json();
        })
        .then((dataJSON) => {
            const utilisateur = React.createContext(dataJSON.pseudo);
            const admin = React.createContext(dataJSON.admin);
            console.log(dataJSON);

        })
        .catch((error) => console.log(error));

        window.location.replace(
            "/"
          );

    return(
<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>
)
}
