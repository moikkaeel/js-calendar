import TopBar from './components/TopBar'
import DateView from './components/DateView'
import Feed from './components/Feed'

function App() {
  return (
    <>
    <TopBar></TopBar>
    <div className='flex flex-col items-center m-1 mt-5'>
      <DateView></DateView>
      <Feed></Feed>
    </div>
    </>
  )
}

export default App
