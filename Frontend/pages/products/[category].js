function getPostDataByName(category) {
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].id === parseInt(id)) {
        return posts[i];
      }
    }
  }
  
  export default function products({ category }) {
    const postData = getPostDataByName(category);
  
    return (
      <div>
        <h2>{postData.name}</h2>
       
      </div>
    );
  }
  
  Post.getInitialProps = async ({ query }) => {
    const { category } = query;
  
    return { category };
  };