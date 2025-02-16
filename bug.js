```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>My Next.js App</h1>
      <p>This is a simple Next.js app.</p>
      {/* This is where the unexpected behavior might occur */}
      <MyComponent />
    </div>
  );
}

// components/MyComponent.js

function MyComponent() {
  const [data, setData] = useState(null);
  useEffect(() => {
    // Fetch data from an API or other data source
    fetch('/api/data')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  if (data === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Data from API</h2>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}
```