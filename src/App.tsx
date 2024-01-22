import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Table from "./components/table";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Header>
        <Table></Table>
      </Header>
    </div>
  );
}

export default App;
