import Blog from './pages/blog/BlogList';
import BlogPost from './pages/blog/BlogPost';
  const isBlog = location.pathname.startsWith('/blog');
const App = () => (
  <Layout>
    <Routes>
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogPost />} />
    </Routes>
  </Layout>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);