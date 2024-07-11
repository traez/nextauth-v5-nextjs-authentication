const userlist = [
    {
      email: "trae@gmail.com",
      password: "password"
    },
    {
      email: "zeeofor@gmail.com",
      password: "password"
    },
    {
      email: "deeds@gmail.com",
      password: "password"
    }
  ]
  
  export const getUserByEmail = (email) => {
    const found = userlist.find(user => user.email === email);
    return found;
  }