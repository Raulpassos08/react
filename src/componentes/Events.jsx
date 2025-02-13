export const Events = () =>{
    function handleClick(event){
        alert("Botão funcionando")
    }

    return(
        <button onClick={handleClick }>Comprar</button>
    )
}