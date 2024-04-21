import React ,{ useState } from "react";
import Card from "./Card";


function PostalData ({searchParam , response}) {
    const[filteredData , setFilteredData] = useState(response.data[0].PostOffice);

    const myFilter = (e) =>{
        const param = e.target.value.trim().toLowerCase();
        if(!param){
            setFilteredData(response.data[0].PostOffice);
        } else {
            setFilteredData(()=> {
                return response.data[0].PostOffice.filter((item) =>
                item.Name.toLowerCase().includes(param)

            );
            });
        }
    };
    return (
        <div>
            <div className="wrapper">
                <p className="label">PinCode :{searchParam}</p>
                <p className="label">Message :{response.data[0].Message}</p>
                <div>
                    <input
                        className="myFilter"
                        type="text"
                        placeholder="Filter"
                        onChange={myFilter}/>
                    
                </div>

            </div>

            <div className="card-wrapper">
                {filteredData.map((item , index)=>{
                    return <Card key={index} item={item}/>
                })}

            </div>
        </div>
    );
}


export default PostalData;