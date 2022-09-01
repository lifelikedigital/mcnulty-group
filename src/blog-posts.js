import SocialShare from './components/SocialShare/SocialShare';

// Imported into the Blog Posts head

const BlogPosts = () => {
  SocialShare();
};

const init = () => {
  BlogPosts();
};

$(function () {
  init();
});
