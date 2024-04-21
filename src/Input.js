import axios  from "axios";


function InputText({setIsFetch ,setResponse ,setSearchParam ,setLoader})  {

  const search = ((event) =>{
        event.preventDefault();
        const pincode = event.target.inputText.value;
        if (!/^\d{6}$/.test(pincode)) {
            alert("Please enter a 6-digit number for the pincode.");
        } else{
            setLoader(true);
            setSearchParam(pincode)
           const getData = async () => {
            try {
                const response = await axios({
                    url: `https://api.postalpincode.in/pincode/${pincode}`,
                });                
                setResponse(response);
                console.log(response.data);
                setIsFetch(true);
                setLoader(false);
                } catch (error) {
                    console.error(error)
                }
           };
           getData();
        } 
    });
  return(
        <div>
            <h3 className="heading">Enter PinCode</h3>
            <form onSubmit={search} className="form">
                <input name = "inputText" type = "number" placeholder="Enter Pincode" required/>
                <button type="submit">Lookup</button>
            </form>
        </div>
    )
};

export default InputText;
