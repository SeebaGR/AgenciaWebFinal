import React from 'react'
import "./Pagination.scss"
import PropType from "prop-types";
import { Link } from "gatsby"

export default function Pagination(props) {



  const { pageContext } = props;
  const { numberOfPages, humanPageNumber, currentPages } = pageContext;





  if (humanPageNumber === 1) {

    return (
      <div id="current-hover" style={{ marginTop: "20px", paddingBottom: "50px" }} className="pagination2" >

        {
          Array.from({ length: numberOfPages }).slice(0, 2).map((_, i) => (

            <Link

              className={currentPages === 1 && i === 0 ? "current" : "paginacionNumeros"}
              to={`/blog/${i === 0 ? "" : i + 1}`}
            >
              {i + 1}

            </Link>

          ))


        }

        {

          <Link className="numPagination"


          >
            ...

          </Link>




        }

        {


          <Link

            className="paginacionNumeros"
            to={`/blog/7`}
            activeStyle={{
              backgroundColor: "#0100ff",
              color: "white",
              fontWeight: "600",

            }}
          >
            7

          </Link>




        }



      </div>
    )


  } else if (humanPageNumber === 2) {


    return (
      <div id="current-hover" style={{ marginTop: "20px", paddingBottom: "50px" }} className="pagination2" >

        {
          Array.from({ length: numberOfPages }).slice(0, 3).map((_, i) => (

            <Link

              className={currentPages === 1 && i === 0 ? "current" : "paginacionNumeros"}
              to={`/blog/${i === 0 ? "" : i + 1}`}
            >
              {i + 1}

            </Link>

          ))


        }

        {

          <Link className="numPagination"


          >
            ...

          </Link>




        }

        {


          <Link

            className="paginacionNumeros"
            to={`/blog/7`}
            activeStyle={{
              backgroundColor: "#0100ff",
              color: "white",
              fontWeight: "600",

            }}
          >
            7

          </Link>




        }



      </div>
    )





  } else if (humanPageNumber === 3) {

    return (
      <div id="current-hover" style={{ marginTop: "20px", paddingBottom: "50px" }} className="pagination2" >

        {
          Array.from({ length: numberOfPages }).slice(0, 4).map((_, i) => (

            <Link

              className={currentPages === 1 && i === 0 ? "current" : "paginacionNumeros"}
              to={`/blog/${i === 0 ? "" : i + 1}`}
            >
              {i + 1}

            </Link>

          ))


        }

        {

          <Link className="numPagination"


          >
            ...

          </Link>




        }

        {


          <Link

            className="paginacionNumeros"
            to={`/blog/7`}
            activeStyle={{
              backgroundColor: "#0100ff",
              color: "white",
              fontWeight: "600",

            }}
          >
            7

          </Link>




        }



      </div>
    )

  } else if (humanPageNumber === 4) {



    return (
      <div id="current-hover" style={{ marginTop: "20px", paddingBottom: "50px" }} className="pagination2" >


        {


          <Link

            className="paginacionNumeros"
            to={`/blog/`}
            activeStyle={{
              backgroundColor: "#0100ff",
              color: "white",
              fontWeight: "600",

            }}
          >
            1

          </Link>




        }

        {

          <Link className="numPagination"


          >
            ...

          </Link>




        }

        {


          <Link

            className="paginacionNumeros"
            to={`/blog/3`}
            activeStyle={{
              backgroundColor: "#0100ff",
              color: "white",
              fontWeight: "600",

            }}
          >
            3

          </Link>




        }
        {


          <Link

            className="paginacionNumeros"
            to={`/blog/4`}
            activeStyle={{
              backgroundColor: "#0100ff",
              color: "white",
              fontWeight: "600",

            }}
          >
            4

          </Link>




        }
        {


          <Link

            className="paginacionNumeros"
            to={`/blog/5`}
            activeStyle={{
              backgroundColor: "#0100ff",
              color: "white",
              fontWeight: "600",

            }}
          >
            5

          </Link>




        }

        {


          <Link className="numPagination"


          >
            ...

          </Link>




        }

        {


          <Link

            className="paginacionNumeros"
            to={`/blog/7`}
            activeStyle={{
              backgroundColor: "#0100ff",
              color: "white",
              fontWeight: "600",

            }}
          >
            7

          </Link>




        }



      </div>
    )



  } else if (humanPageNumber === 5) {



    return (
      <div id="current-hover" style={{ marginTop: "20px", paddingBottom: "50px" }} className="pagination2" >


        {


          <Link

            className="paginacionNumeros"
            to={`/blog/`}
            activeStyle={{
              backgroundColor: "#0100ff",
              color: "white",
              fontWeight: "600",

            }}
          >
            1

          </Link>




        }

        {

          <Link className="numPagination"


          >
            ...

          </Link>




        }

        {
          <Link

            className="paginacionNumeros"
            to={`/blog/4`}
            activeStyle={{
              backgroundColor: "#0100ff",
              color: "white",
              fontWeight: "600",

            }}
          >
            4

          </Link>

        }



        {


          <Link

            className="paginacionNumeros"
            to={`/blog/5`}
            activeStyle={{
              backgroundColor: "#0100ff",
              color: "white",
              fontWeight: "600",

            }}
          >
            5

          </Link>




        }
        {


          <Link

            className="paginacionNumeros"
            to={`/blog/6`}
            activeStyle={{
              backgroundColor: "#0100ff",
              color: "white",
              fontWeight: "600",

            }}
          >
            6

          </Link>




        }



        {


          <Link

            className="paginacionNumeros"
            to={`/blog/7`}
            activeStyle={{
              backgroundColor: "#0100ff",
              color: "white",
              fontWeight: "600",

            }}
          >
            7

          </Link>




        }



      </div>
    )



  } else if (humanPageNumber === 6) {



  return (
    <div id="current-hover" style={{ marginTop: "20px", paddingBottom: "50px" }} className="pagination2" >


      {


        <Link

          className="paginacionNumeros"
          to={`/blog/`}
          activeStyle={{
            backgroundColor: "#0100ff",
            color: "white",
            fontWeight: "600",

          }}
        >
          1

        </Link>




      }

      {

        <Link className="numPagination"


        >
          ...

        </Link>




      }

      {
        <Link

          className="paginacionNumeros"
          to={`/blog/5`}
          activeStyle={{
            backgroundColor: "#0100ff",
            color: "white",
            fontWeight: "600",

          }}
        >
          5

        </Link>

      }



      {


        <Link

          className="paginacionNumeros"
          to={`/blog/6`}
          activeStyle={{
            backgroundColor: "#0100ff",
            color: "white",
            fontWeight: "600",

          }}
        >
          6

        </Link>




      }
      {


        <Link

          className="paginacionNumeros"
          to={`/blog/7`}
          activeStyle={{
            backgroundColor: "#0100ff",
            color: "white",
            fontWeight: "600",

          }}
        >
          7

        </Link>




      }



  



    </div>
  )



} else if (humanPageNumber === 7) {



  return (
    <div id="current-hover" style={{ marginTop: "20px", paddingBottom: "50px" }} className="pagination2" >


      {


        <Link

          className="paginacionNumeros"
          to={`/blog/`}
          activeStyle={{
            backgroundColor: "#0100ff",
            color: "white",
            fontWeight: "600",

          }}
        >
          1

        </Link>




      }

      {

        <Link
        className="numPagination"

        >
          ...

        </Link>




      }

   



      {


        <Link

          className="paginacionNumeros"
          to={`/blog/6`}
          activeStyle={{
            backgroundColor: "#0100ff",
            color: "white",
            fontWeight: "600",

          }}
        >
          6

        </Link>




      }
      {


        <Link

          className="paginacionNumeros"
          to={`/blog/7`}
          activeStyle={{
            backgroundColor: "#0100ff",
            color: "white",
            fontWeight: "600",

          }}
        >
          7

        </Link>




      }



  



    </div>
  )



}

}









Pagination.propType = {
  pageContext: PropType.object.isRequired,
}
