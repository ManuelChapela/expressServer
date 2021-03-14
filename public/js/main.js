document
    .querySelector("#infoMasterBtn")
    .addEventListener("click", () => {
        fetch("/sendInfo") // fetch nos permite cambiar el método en un segundo parámetro , {method: "post"}
            .then(response => response.json())
            .then(data => {
                data.map(data => {

                    const seleccionarBtn = document.querySelector("#infoMaster");

                    let escribirNombre = document.createElement("p");
                    escribirNombre.setAttribute("id", "escribirNombre");
                    escribirNombre.textContent = data.name;
                    seleccionarBtn.appendChild(escribirNombre);

                    let escribirEmail = document.createElement("p");
                    escribirEmail.setAttribute("id", "escribirNombre");
                    escribirEmail.textContent =  data.email;
                    seleccionarBtn.appendChild(escribirEmail);

                    let escribirContraseña = document.createElement("p");
                    escribirContraseña.setAttribute("id", "escribirNombre");
                    escribirContraseña.textContent = data.contraseña; 
                    seleccionarBtn.appendChild(escribirContraseña);
            //     document
            //         .querySelector("#infoMaster")
            //         .innerHTML += data.name + "<br/>" + data.email +  "<br/>" + data.contraseña +  "<br/>"
            // })
            
        })
    })
})