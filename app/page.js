"use client"
import React, { useState } from 'react'

const page = () => {
  const [contractFile, setContractFile] = useState('')
  const [metadata, setMetadata] = useState('')
  const runLs = async () => {
    console.log("button clicked");
    const data = await fetch("http://localhost:3000/api/runcommand?command=ls", { method: 'GET' })
    console.log(data);
  };
  return (
    <div className='h-96 min-w-fit bg-light_pink shadow-[rgba(0,_0,_0,_0.24)_0px_0px_5px] m-12 rounded-xl flex flex-col'>
      <div>

        <lable className='m-10 font-form'>
          Upload Contract File here
          <input type='File' className='m-10' onChange={(e) => { setContractFile(e.target.value) }} />
        </lable>
      </div>
      <div>

        <label>
          Enter Contract Address
          <input type='text' placeholder='0x000000000000000' onChange={(e) => { setMetadata({ ...metadata, contractaddress: e.target.value }) }} />
        </label>
      </div>
      <div>
        <div>

          <label>
            Select Network :
            <select className='' onChange={(e) => { setMetadata({ ...metadata, network: e.target.value }) }}>
              <option value='sepolia'>sepolia</option>
              <option value='polygonMumbai'>mumbai</option>
            </select>
          </label>
        </div>
        <div>
          <button className='rounded bg-pink p-4 m-10' onClick={runLs}>Verify</button>
        </div>
      </div>
    </div>
  )
}

export default page