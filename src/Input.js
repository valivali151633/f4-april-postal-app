import axios  from "axios";


const Input = ({setSearchPAram , setloader , setResponse})=>{
    const search = ((event) =>{
        event.perventdefault();
        const pincode = event.target.input.value;
        if (!/^\d{6}$/.test(pincode)) {
            alert("Please enter a 6-digit number for the pincode.");
        }else{
            setloader(true);
            setSearchPAram(pincode)
           const getData = async ()=>{
            try {
                const response = await axios ({url:`https://api.postalpincode.in/pincode/${pincode}`})
                
                setResponse(response);
                console.log(response.data[0]);
                setloader(false);
                
            } catch (error) {
                alert(error)
            }

           }
           getData();
        }

        
    });

    return(
        <div>
            <h3>Enter PinCode</h3>
            <form onSubmit={search}>
                <input name = "input" type = "number" placeholder="Enter Pincode" required/>
                <button type="submit">Lookup</button>
            </form>
        </div>
    )
}

export default Input;
