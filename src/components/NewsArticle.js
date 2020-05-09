import React from 'react'

const NewsArticle = ({ item }) => {
  const { title, image, description } = item;
  return (
    <div className="my-5 mx-lg-4">
      <h5 className="text-uppercase my-2">{title}</h5>
      <img className="img-fluid mb-3" src={image} alt="news" />
      <p>{description}</p>
    </div>
  );
}

export default NewsArticle
