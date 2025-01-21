// page.tsx
import { api } from '../lib/api';
import { useEffect, useState } from 'react';
import Image from "next/image";
import Footer from './Components/footer';
import Navbar from './Components/Navbar';
import Topone from './Components/Topone';
import TopTwoVersace from './Components/Toptwoversace';
import TopThreeBrowse from './Components/TopthreeBrowse';
import TopFourHappy from './Components/TopfourHappy';

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace '/your-endpoint' with your actual API endpoint
        const result = await api.get('/your-endpoint');
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />
      <Topone />
      <TopTwoVersace />
      <TopThreeBrowse />
      <TopFourHappy />
      <Footer />
    </div>
  );
}