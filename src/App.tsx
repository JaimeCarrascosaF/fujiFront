import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Table from "./components/table";

function App() {
  //<Sidebar />
  return (
    <div className="flex">
      <Header>
        <Table></Table>
      </Header>
    </div>
  );
}

export default App;
