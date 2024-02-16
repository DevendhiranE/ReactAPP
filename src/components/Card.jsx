import { useEffect, useState } from "react";

const Card = () => {
  const [post, setPost] = useState([]);
  const [character, setCharacter] = useState(90);

  useEffect(() => {
    const postFetching = async () => {
      const fetchPost = await fetch("https://dummyjson.com/posts");
      const postData = await fetchPost.json();
      setPost(postData.posts);
    };
    postFetching();
  }, []);

  const blogPostTemplate = post.map((post, index) => {
    return (
      <>
        <div className="mb-2 ">
          <div className="p-2">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhzLW9wF-MC65SDwg7wO4ejvu37LemjcCqJDGl-Y80vTeLQDVJWjKsQdzlgLbDcAFHFyanideegE0gWY4E1cXBrOSZGg34YBY1dA3i4QuAXvUnDCP6uJUUlDCZ0-kJ9r9RDlFWZNKq7H9w-Vg_4x1Rd44XlQTb2jGW0ilWDcSZJtoud31XxHsgUlxa6WA/s1600/pbt2.webp"
              alt="Image-1"
              className="rounded hover:opacity-90 mb-2 cursor-pointer"
            />
            <div className=" min-h-[230px]">
              <p className="text-red-500 font-semibold">Editors Picks</p>
              <h1
                key={index}
                className="text-xl font-bold mb-2 cursor-pointer hover:text-pink-500"
              >
                {post.title}
              </h1>
              <div className=" ">
                <p key={index} className="text-gray-500 mb-2">
                  {`${post.body.substring(0, 100)}... `}
                </p>
              </div>
              <p>
                <span className="font-semibold">John Doe</span> -April 12, 2024
              </p>
              <div className="flex space-x-2 mt-2">
                {post.tags.map((tag, index) => (
                  <div
                    key={`${tag}-${index}`}
                    className="bg-green-500 px-2 py-1 rounded text-white font-semibold"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });
  return (
    <div className="">
      <div className="bg-white flex justify-between items-center p-2 my-2 font-semibold">
        <h3 className="text-xl">Latest Posts</h3>
        <a href="#" className="text-red-500">
          View All
        </a>
      </div>
      <div className="bg-white grid sm:grid-cols-2 md:grid-cols-3 md:gap-3">
        {blogPostTemplate}
      </div>
    </div>
  );
};
export default Card;
