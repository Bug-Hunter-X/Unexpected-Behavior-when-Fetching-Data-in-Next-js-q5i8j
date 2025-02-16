```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>My Next.js App</h1>
      <p>This is a simple Next.js app.</p>
      <MyComponent />
    </div>
  );
}

// components/MyComponent.js

import { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data');
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2>Data from API</h2>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}
```