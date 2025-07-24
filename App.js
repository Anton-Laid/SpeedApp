import SpeedTwoWays from './components/SpeedTwoWays';

const data = {
  id: 2,
  type: 'SpeedTwoWays',
  title: 'Предпочитаемый тип управления',
  data: [
    { label: 'Процесс', score: 80 },
    { label: 'Проект', score: 20 }
  ]
};

function App() {
  return (
    <div>
      <SpeedTwoWays title={data.title} data={data.data} />
    </div>
  );
}

export default App;