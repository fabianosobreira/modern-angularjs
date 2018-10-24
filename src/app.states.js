export const root = {
  name: 'app',
  redirectTo: 'app.posts'
};

export const posts = {
  name: 'app.posts',
  url: '/posts',
  component: 'cPosts'
};

export const posts_details = {
  name: 'app.posts.userPosts',
  url: '/:userId',
  component: 'cUserPosts',
  params: {
    userId: {
      dynamic: true,
      type: 'int'
    }
  }
};
