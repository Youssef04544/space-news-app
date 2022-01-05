const Article = ({ article }) => {
  return (
    <div
      className='flex flex-col max-w-screen-md w-5/6 border-solid border-2 border-black mb-32 p-10 items-center text-center gap-4 cursor-pointer'
      onClick={() => (window.location.href = article.url)}
    >
      <h3 className='text-xl font-bold'>{article.title}</h3>
      <img src={article.imageUrl} alt='Some space news' />
      <p className='text-lg'>{article.summary}</p>
      <div>{article.publishedAt}</div>
    </div>
  );
};

export default Article;
