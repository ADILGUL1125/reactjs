import React from "react";
import { useState, useEffect } from "react";
const Fetchdata = () => {
  let [user, setuser] = useState([]);
  let fetchuser = async () => {
    try {
      let data = await fetch("https://dummyjson.com/users").then((res) =>
        res.json()
      );
      setuser(data.users);
      // console.log(data)
    //   console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchuser();
  });

  return (
    <div       style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        padding: "20px",
      }}
>
      
        {user.map((items) => (
          <div onClick={()=>{
            console.log(items.id)
          }} key={items.id}
          
          style={{
            width: "200px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "15px",
            display:'flex',alignItems:'center',
            justifyContent:'center',
            flexDirection:'column',
        
            transition: "0.3s",
            
          }}
          
           onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.05)")
            
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "scale(1)")
          }
>
            <img src={items.image} alt={items.title} />
            <h1>{items.firstName}</h1>
            <span>{items.gender}</span>
            <span> age: {items.age} years</span>
            <span> role: {items.role} </span>
            <span> id: {items.id} </span>
          </div>
          
        ))}
      
    </div>
  );
};

export default Fetchdata;
