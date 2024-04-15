import { useEffect, useState } from "react";
import { Author } from "./Author";
import axios from "axios";
import { Error } from "../Error";
import { Loading } from "../Loading";
import "./TableWrapper.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
TO DO
- need to show error when there is nothing present
- check if url path param is provided
 */

export function TableWrapper() {
  // get url param
  const queryParameters = new URLSearchParams(window.location.search);
  const author = queryParameters.get("author");

  const [authors, setAuthors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  // fetch the top performing authors
  useEffect(() => {
    async function fetch() {
      try {
        const url = "http://127.0.0.1:8000/";
        await axios
          .get(url, {
            params: {
              author_name: author,
            },
          })
          .then((res) => setAuthors(res.data));
      } catch {
        setError(true);
      }
    }
    fetch();
    setLoading(false);
  }, []);

  return (
    <div style={{margin:'auto'}}>
      <div className="top">
        <p>You have 10 team members</p>
      </div>
      <div className="box">
        {authors.map((item, index) => {
          return (
            <div key={index}>
              <Author
                name={item.name}
                email={item.email}
                revenue={item.revenue}
              />
              <hr className="solid"></hr>
            </div>
          );
        })}
      </div>
      {loading && <Loading />}
      {error && <Error />}
    </div>
  );
}
