import TopBar from './components/TopBar'
import DateView from './components/DateView'

function App() {
  return (
    <>
    <TopBar></TopBar>
    <div className='flex inline flex-col items-center m-1 bg-blue-400'>
      <h1>Hello!</h1>
      <DateView></DateView>
    </div>
    </>
  )
}

export default App
