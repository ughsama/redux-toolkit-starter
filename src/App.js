import logo from "./logo.svg";
import "./App.css";
import Counter from "./features/counter/Counter";
import PostList from "./features/post/PostList";
import AddPostForm from "./features/post/AddpostForm";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <AddPostForm />
      <PostList />
    </div>
  );
}

export default App;
