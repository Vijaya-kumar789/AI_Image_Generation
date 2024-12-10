import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Cards from "./Cards";
import { BACKEND_API } from "../utils/config";
import { toast } from "react-toastify";

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Cards key={post._id} {...post} />);
  }

  return <h2 className="mt-5 font-bold h2_title">{title}</h2>;
};

const Home = () => {


  const [loading, setLoading] = useState(false);
  const [allPosts, SetAllPosts] = useState(null);

  const [searchText, setSearchText] = useState("");
  const [searchedResults, setSearchedResults] = useState(null);
  const [searchTimeout, setSearchTimeout] = useState(null);

  const fetchPost = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BACKEND_API}/post`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      if (response.ok) {
        const result = await response.json();

        SetAllPosts(result.data.reverse());
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = allPosts.filter(
          (item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase()) ||
            item.prompt.toLowerCase().includes(searchText.toLowerCase())
        );
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="my-5">
              <h1 className="my-2">The Community Showcase</h1>
              <p>
                Browse through a collection of imaginative and visually stunning
                images generating by HUGGING-FACE AI
              </p>
            </div>
            <div>
              <label>Search posts </label>
              <br />
              <input
                className="search_input"
                placeholder="search posts"
                type="text"
                name="text"
                value={searchText}
                onChange={handleSearchChange}
              />
            </div>

            <div className="mt-5">
              {loading ? (
                <div className="d-flex justify-content-center align-items-center ">
                  <div className="loader " style={{width:'150px',height:'150px'}}></div>
                </div>
              ) : (
                <>
                  {searchText && (
                    <h2 className="search-text mb-3">
                      Showing Results for{" "}
                      <span className="text-dark">{searchText}</span>:
                    </h2>
                  )}
                  <div className="d_cards">
                    {searchText ? (
                      <RenderCards
                        data={searchedResults}
                        title="No Search Results Found"
                      />
                    ) : (
                      <RenderCards data={allPosts} title="No Posts Yet" />
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
