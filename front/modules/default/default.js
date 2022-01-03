const homepage = (req,res) => {
    // matches = res.payload.matches
    res.render('pages/home', {title: "Accueil"})
  };

const login = (req,res) => {}

const register = async (req,res) => {}

const logout = async (req,res) => {}

export {
  homepage,
  login,
  logout,
  register
}