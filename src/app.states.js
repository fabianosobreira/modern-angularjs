const root = {
  name: 'index',
  redirectTo: 'posts'
};

const login = {
  name: 'login',
  url: '/login',
  component: 'loginPage'
};

const posts = {
  name: 'posts',
  url: '/posts',
  component: 'postsPage',
  data: {
    requiresAuth: true
  }
};

const posts_details = {
  name: 'posts.userPosts',
  url: '/:userId',
  component: 'cUserPosts',
  params: {
    userId: {
      dynamic: true,
      type: 'int'
    }
  }
};

export default [root, login, posts, posts_details];
