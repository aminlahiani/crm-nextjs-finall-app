import axios from "axios";



export default  GerantLogin = async ({ email , password , router}) => {
    try {
      const response = await axios.post("/api/users/login", {
        email,
        password,
      });

      if (response.status === 200) {
        router.push("/gerant/dashboard");
      }
    } catch (error) {
      console.log(error);
      alert("Error sign up");
    }
  };

export default Login
