import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";

export default function App() {
  return (
    <div className="flex md:container mx-auto my-0">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}
