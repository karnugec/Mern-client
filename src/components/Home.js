import React, {useEffect, useState} from 'react';

const Home = () => {

  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(false);

  const userHomePage = async () => {
    try{
      const res = await fetch('/getdata', {
        method: "GET",
        headers: {
          "Content-Type" : "application/json"
        },
      });

      const data = await res.json();
      console.log(data);
      setUserName(data.name);
      setShow(true);

      if(!(await res).status === 200){
        const error = new Error(res.error);
        throw error;
      }

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    userHomePage();
  }, []);

  return (
    <>
      <div className='flex justify-center items-center bg-slate-100 h-[46vw]'>
        <div className='flex flex-col items-center justify-center'>
          <div className=' text-3xl font-bold'>WELCOME</div>
          {show ? <h1>{userName}</h1> : '' }
          <div className=' text-4xl font-extrabold text-red-500'>{ show ? "Happy, to see you back" : "We Are The MERN Developer"}</div>
        </div>
      </div>
    </>
    
  )
}

export default Home