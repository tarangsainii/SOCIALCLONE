import { Input } from "@chakra-ui/react"

const GoogleAuth = () => {
  return < >
  <Input placeholder='Email' fontSize={14} type='email'
     value={inputs.email}
    onChange={(e) => setInputs({...inputs,email:e.target.value})} 
    />

   <Input placeholder='Password'  fontSize={14} type='password'
   value={inputs.password}
   onChange={(e) => setInputs({...inputs,password:e.target.value})} 
   
   />
  
  
  </>
    
  
};

export default GoogleAuth