const baseUrl = process.env.REACT_APP_API_URL;




const fetchBebida = (  endpoint, data, method  )=>{

    const url = `${baseUrl}/${endpoint}`;

    if( method==="GET" ){
        return fetch( url );
    }else{
        console.log("falta el post para fetch bebida");
    }


}








export {
    fetchBebida
}