import './App.css';
import { EthProvider, ClientProvider } from '~/providers';
import { Layout } from '~/layout';

function App() {
  return (
    <EthProvider>
      <ClientProvider>
        <Layout />
      </ClientProvider>
    </EthProvider>
  );
}

export default App;
