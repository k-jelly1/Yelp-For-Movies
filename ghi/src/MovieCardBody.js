import { Link } from 'react-router-dom';
function MovieCardBody(column, col_idx) {
  return (
    <div key={col_idx} className="col">
      {column.map(movie => {
        const title = movie.title.toLowerCase().split(/[-:\s,]+/).join("-")
        return (
          <div key={movie.id} className="card mb-3 border-0" style={{ height: '475px', backgroundColor: "black" }}>
            <Link to={`/${title}-${movie.id}`}>
              {movie.poster_path === null
                ? <>
                  <div style={{ height: '353px', backgroundColor: "lightgrey" }}>
                    <img src={"https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"} alt="poster placeholder" className="card-img-top" />
                  </div>
                </>
                : <>
                  <div style={{ height: '350px' }}>
                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt={`${movie.title} poster`} className="card-img-top" />
                  </div>
                </>
              }
            </Link>
            <div className="card-body">
              <Link style={{ textDecoration: "none" }} to={`/${title}-${movie.id}`}>
                <span style={{ fontSize: "20px", fontWeight: "bold" }} className="text-white card-title">{movie.title}</span><br />
              </Link>
              <span className="text-muted" style={{ fontWeight: "bold" }}>
                {(movie.release_date === "" || !movie.release_date)
                  ? "Unknown"
                  : new Date(movie.release_date).getFullYear()}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MovieCardBody;