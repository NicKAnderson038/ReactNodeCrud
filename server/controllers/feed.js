exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      { 
        _id: '1',
        title: 'First Post', 
        content: 'This is the first post!', 
        imageUrl: 'images/meowing.jpg',
        creator:{
          name: 'Nick'
        },
        createdAt: new Date()
      }
    ]
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  // Create post in db
  res.status(201).json({
    message: 'Post created successfully!',
    post: { 
      _id: new Date().toISOString(), 
      title, 
      content,
      creator:{
        name: 'Nick'
      },
      createdAt: new Date()
    }
  });
};
