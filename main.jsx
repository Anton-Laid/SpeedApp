import React from "react";
import ReactDOM from "react-dom/client";

import App from "./src/App";
import "./src/app/styles/index.css";

/**
 *  Поскольку React — это сочетание JS и HTML, все файлы должны иметь префикс .jsx.
 *
 *  Этот файл должен находиться в корне проекта.
 *
 *  Скорее всего, проект не был создан с помощью npx create-next-app@latest,
 *  так как эта команда автоматически настраивает базовые параметры для дальнейшей работы.
 *  ознакомиться можно здесь https://react.dev/learn/creating-a-react-app
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
