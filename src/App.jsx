// благодаря нашему инпорту, в строке не будет ./widgets/SpeedTwoWays
import { SpeedTwoWays } from "./widgets";

const data = {
  id: 2,
  type: "SpeedTwoWays",
  title: "Предпочитаемый тип управления",
  data: [
    { label: "Процесс", score: 80 },
    { label: "Проект", score: 20 },
  ],
};

function App() {
  return (
    //  лучше использовать Fragment
    // так как div это лишняя нагрузка на отрисовку станицы
    <>
      <SpeedTwoWays title={data.title} data={data.data} />
    </>
  );
}

export default App;
