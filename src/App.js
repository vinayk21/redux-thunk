import "./App.css";
import { comicdata, charactersdata } from "./Reduxfile/Actions/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
function App() {
  const [Apidata, setApidata] = useState();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state?.apicomicdata);
  const { loading, resdata } = selector;
  let xyz = selector.stat?.data?.data?.results;
  useEffect(() => {
    setApidata(xyz);
  }, [xyz]);
  useEffect(() => {
    dispatch(charactersdata());
  }, [dispatch]);
  // console.log(Apidata);
  console.log("length",Apidata?.length);
  return (
    <div className="App">
      <nav class="navbar navbar-dark bg-primary"> 
        <div class="container-fluid">
          <a class="navbar-brand">MarvelComic</a>
          <a class="navbar-brand">Category</a>
          <a class="navbar-brand">MyCart</a>
          <a class="navbar-brand">About</a>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-danger" type="submit">
              LogOut
            </button>
          </form>
        </div>
      </nav>
      {loading ? (
        <>
          <div class="d-flex justify-content-center mt-5">
            <div class="spinner-border text-success" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </>
      ) : (
        <> 
        <h2 style={{color:"green",alignItems:"center"}}>{`TOTAL-ITEM-FOUND :${Apidata?.length}`}</h2>
        <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"center"}}>
          {Apidata?.map((ele) =>{
          const { thumbnail,title,variantDescription} = ele
          // console.log("ele",ele)

          const imageSrc = `${thumbnail.path}.${thumbnail.extension}`
          return (
              <>
                <div
                  class="card mt-2 m-lg-5"
                  style={{ width: "25%", height: "500px" }}
                >
                  <img
                    src={imageSrc}
                    class="card-img-top"
                    alt="..."
                    style={{ width: "auto", height: "300px" }}
                  />
                  <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">
                     {variantDescription}
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </>
          )
            }
            )}
           </div>
        </>
      )}
    </div>
  );
}

export default App;
