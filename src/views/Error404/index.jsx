import { useRouteError } from "react-router-dom";

import style from "./Error404.module.css";
const Error404 = () => {
  const error = useRouteError();

  return (
    <div className={style.container}>
      <h3 className={style.title}>La pagina no existe ({error.status})</h3>
      <p className={style.description}>
        No hemos encontrado la ruta que buscas 😥
        <p>{error.data}</p>
      </p>
    </div>
  );
};

export default Error404;
