import User from "../models/User.js";
import comparePassword from '../helpers/comparePassword.js';


//registro
const registerUser = async (req, res) => {
  const { email, name, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ msg: "El usuario ya existe" });
  }

  if (password.length < 8) {
    return res
      .status(400)
      .json({ msg: "La contraseña debe tener al menos 8 caracteres" });
  }

  try {
    const user = new User({ email, name, password });
    const savedUser = await user.save();

    res.status(201).json({
      id: savedUser._id,
      name: savedUser.name,
      email: savedUser.email,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Ocurrió un error al registrar al usuario" });
  }
};

//ver perfil
const userProfile = async (req, res) => {
  try {
    const profile = await User.findById(req.params.id).lean();
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//confirmar usuario
const confirmUser = async (req, res) => {
  const { token } = req.params;
  const userConfirm = await User.findOne({ token });

  if (!userConfirm) {
    const error = new Error("Token no válido");
    res.status(400).json({ msg: error.message });
  }
  try {
    userConfirm.token = null;
    userConfirm.confirmed = true;
    await userConfirm.save();
    res.json({ msg: "Usuario confirmado correctamente" });
  } catch (error) {
    console.log(error);
  }
};

//autenticar usuario
const authenticateUser = async (req, res) => {
  const { email, password } = req.body;
  const result = await comparePassword({ email, password });
  if (!result) {
    const error = new Error("El usuario no existe");
    res.status(403).json({ msg: error.message });
  }
  if (result.isValid) {
    const { name, id, email } = result.user;
    const userData = { name, email, id };
    const token = generateJWT(userData);
    userData.token = token;
    res.json(userData);
  } else {
    const error = new Error("La contraseña es incorrecta");
    res.status(403).json({ msg: error.message });
  }
};

//seguir usuario
const followUser = async (req, res) => {
  try {
    const { userId, userToFollowId } = req.body;

    if (!userId || !userToFollowId) {
      return res
        .status(400)
        .json({ message: "Debe proporcionar los IDs de usuario" });
    }

    if (userId === userToFollowId) {
      return res.status(400).json({ message: "No puedes seguirte a ti mismo" });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    if (user.following.includes(userToFollowId)) {
      return res.status(400).json({ message: "Ya sigues a este usuario" });
    }

    user.following.push(userToFollowId);
    await user.save();
    return res
      .status(200)
      .json({ message: "Has comenzado a seguir a este usuario" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error en el servidor" });
  }
};

//dejar de seguir
const unfollowUser = async (req, res) => {
  try {
    const { userId, userToUnfollowId } = req.body;

    if (!userId || !userToUnfollowId) {
      return res
        .status(400)
        .json({ message: "Debe proporcionar los IDs de usuario" });
    }

    if (userId === userToUnfollowId) {
      return res
        .status(400)
        .json({ message: "No puedes dejar de seguirte a ti mismo" });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    if (!user.following.includes(userToUnfollowId)) {
      return res.status(400).json({ message: "No sigues a este usuario" });
    }

    user.following = user.following.filter(
      (followedUserId) => followedUserId !== userToUnfollowId
    );

    await user.save();

    return res
      .status(200)
      .json({ message: "Has dejado de seguir a este usuario" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error en el servidor" });
  }
};

//traer seguidos
const getFollowing = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId).populate(
      "following",
      "name email"
    );

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    return res.status(200).json(user.following);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error en el servidor" });
  }
};

export {
  registerUser,
  userProfile,
  confirmUser,
  authenticateUser,
  followUser,
  unfollowUser,
  getFollowing,
};
