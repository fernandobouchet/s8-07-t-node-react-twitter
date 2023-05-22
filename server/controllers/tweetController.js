import Tweet from '../models/Tweet.js';

//crear tweet
const createTweet = async (req, res) => {
  const { id } = req.user;
  const { content, hashtags } = req.body;

  try {
    let tweet = new Tweet({
      author: id,
      content,
      hashtags,
    });

    await tweet.save();

    //await User.findByIdAndUpdate(userId, { $push: { tweets: tweet._id } });
    tweet = await tweet.populate('author', 'name image username email confirmed');

    res.send(tweet);
  } catch (error) {
    console.log(error.message);
  }
};

const getAllTweets = async (_req, res) => {
  try {
    const allTweets = await Tweet.find().populate(
      'author',
      'name image username email confirmed'
    );
    res.status(200).send(allTweets);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Error getting all tweets' });
  }
};

//traer tweets por usuario
const getTweetsByUserId = async (req, res) => {
  const userId = req.params.userId;
  try {
    const tweets = await Tweet.find({ author: userId }).populate('author');
    res.json(tweets);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: 'Error al obtener los tweets del usuario' });
  }
};

//editar tweet
const updateTweet = async (req, res) => {
  const { id } = req.params;
  const { content, hashtags } = req.body;

  try {
    let modifiedTweet = await Tweet.findOneAndUpdate(
      { _id: id },
      { content, hashtags },
      { new: true }
    );

    if (!modifiedTweet) {
      return res.send({ message: 'Este tweet no existe.' });
    }

    res.send(modifiedTweet);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: 'Error al actualizar el tweet.' });
  }
};

//like a tweet
const likeTweet = async (req, res) => {
  const tweetId = req.params.id;
  const userId = req.params.userId; // Obtener el ID del usuario desde los parámetros de la URL

  try {
    const tweet = await Tweet.findById(tweetId);

    if (!tweet) {
      return res.status(404).json({ message: 'Tweet no encontrado' });
    }

    // Verificar si el usuario ya dio like al tweet
    const alreadyLiked =
      tweet.likes &&
      tweet.likes.some((like) => like.user.toString() === userId);

    if (alreadyLiked) {
      return res.status(400).json({ message: 'Tweet ya tiene me gusta' });
    }

    // Agregar el like al tweet
    tweet.likes.push({ user: userId });
    await tweet.save();

    res.json(tweet.likes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

//unlike a tweet
const unlikeTweet = async (req, res) => {
  const tweetId = req.params.id;
  const {id} = req.user; // Obtener el ID del usuario desde los parámetros de la URL

  try {
    const tweet = await Tweet.findById(tweetId);

    if (!tweet) {
      return res.status(404).json({ message: 'Tweet no encontrado' });
    }

    const likeIndex = tweet.likes.findIndex((like) => like.user === id);

    if (likeIndex === -1) {
      return res
        .status(400)
        .json({ message: 'El tweet no tiene me gusta del usuario' });
    }

    tweet.likes.splice(likeIndex, 1);
    await tweet.save();

    res.json(tweet.likes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

export {
  createTweet,
  getTweetsByUserId,
  updateTweet,
  likeTweet,
  unlikeTweet,
  getAllTweets,
};
