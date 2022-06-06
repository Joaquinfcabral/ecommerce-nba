
let condition = true

const customFetch = (tiempo, tarea) =>{
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (condition) {
                resolve (tarea);
            } else {
                reject ("Tenemos problemas para mostrar esta sección");            }
        }, tiempo);
    });
}

export default customFetch; 