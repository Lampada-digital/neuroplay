const NPAuth={
  async login(email,password){
    const user=NPStorage.getUserByEmail(email);
    if(!user)throw new Error('Usuário não encontrado');
    if(user.password!==btoa(password))throw new Error('Senha incorreta');
    NPStorage.setCurrent(user);
    NPStorage.addLog('LOGIN',user.id,{email});
    return user;
  },
  async register(data){
    if(NPStorage.getUserByEmail(data.email))throw new Error('E-mail já cadastrado');
    const user={...data,password:btoa(data.password),role:data.role||'student'};
    NPStorage.addUser(user);
    NPStorage.setCurrent(user);
    NPStorage.addLog('REGISTER',user.id,{email:user.email,role:user.role});
    return user;
  },
  logout(){const u=NPStorage.getCurrent();if(u)NPStorage.addLog('LOGOUT',u.id,{});NPStorage.clearCurrent()},
  isLoggedIn(){return !!NPStorage.getCurrent()},
  getCurrent(){return NPStorage.getCurrent()}
};
window.NPAuth=NPAuth;