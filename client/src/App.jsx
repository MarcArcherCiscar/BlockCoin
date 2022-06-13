import { Navbar, Welcome, Footer, Services, Transactions, MessageShow } from './components';

const App = () => {
  return (
    <div className="min-h-screen">
      <div className='gradient-bg-welcome'>
        <MessageShow />
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}

export default App;
