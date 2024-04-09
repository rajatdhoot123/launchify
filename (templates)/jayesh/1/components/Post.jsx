import React from 'react';
import Posts from './Posts';
import img1 from '../images/post-1.svg';
import img2 from '../images/post-2.svg';
import img3 from '../images/post-3.svg';

const Post = () => {
  const posts = [
    {
      title: "First Post",
      author: "Jayesh Patil",
      date: "2023-01-15",
      image: img1,
      description: "Design Unraveled: Behind the Scenes of UI/UX Magic"
    },
    {
      title: "Second Post",
      author: "Jayesh Patil",
      date: "2023-02-20",
      image: img2,
      description: "Sugee: Loan Management System for Rural Sector."
    },
    {
      title: "Third Post",
      author: "Jayesh Patil",
      date: "2023-02-20",
      image: img3,
      description: "Cinetrade: Innovative way to invest in Digital Media"
    }
  ];

  return (
    <div className="w-full flex justify-between px-8 lg:px-16  ">
      <div className="w-full">
        <div className='flex flex-col gap-8 lg:gap-0 lg:flex-row items-center lg:items-start lg:justify-between'>
        <p className="font-bold text-5xl text-gray-700">From my <br />blog post</p>
        <button className="bg-orange-400  text-white w-36 h-16 px-10 py-2 rounded-full">See All</button>
        </div>
        <div className=" mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8">
          {/* Display each post */}
          {posts.map((post, index) => (
            <Posts
              key={index}
              img={post.image}
              maker={post.author}
              dateOfCreation={post.date}
              description={post.description}
              title={post.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
