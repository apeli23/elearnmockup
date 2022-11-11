import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  const data = {
    dark: [
      {
        id: 1,
        src: "https://res.cloudinary.com/dlt0f5pvq/image/upload/v1668172481/Screenshot_2022-11-11_at_16.14.18_injndz.png",
        name: "Dark - authentecation"
      },
      {
        id: 2,
        src: "https://res.cloudinary.com/dlt0f5pvq/image/upload/v1668163261/dashboard_j8wi1d.png",
        name: "Dark - dashboard"
      },
      {
        id: 3,
        src: "https://res.cloudinary.com/dlt0f5pvq/image/upload/v1668163262/search_e8ffzu.png",
        name: "Dark - search course"
      },
      {
        id: 4,
        src: "https://res.cloudinary.com/dlt0f5pvq/image/upload/v1668163262/result_eet8nh.png",
        name: "Dark - course result"
      },
      {
        id: 5,
        src: "https://res.cloudinary.com/dlt0f5pvq/image/upload/v1668163260/cart_pp8hbi.png",
        name: "Dark - course cart"
      },
      {
        id: 6,
        src: "https://res.cloudinary.com/dlt0f5pvq/image/upload/v1668175604/Screenshot_2022-11-11_at_17.06.22_s1jrkj.png",
        name: "author detail"
      },
      {
        id: 7,
        src: "https://res.cloudinary.com/dlt0f5pvq/image/upload/v1668163261/detail_r57rwo.png",
        name: "Dark - course detail"
      },
      {
        id: 8,
        src: "https://res.cloudinary.com/dlt0f5pvq/image/upload/v1668163261/playlist_eyje8y.png",
        name: "Dark - course playlist"
      },
      {
        id: 9,
        src: "https://res.cloudinary.com/dlt0f5pvq/image/upload/v1668163260/comments_abxqvo.png",
        name: "Dark - course comments"
      },
    ]
  }
  return (
    <Layout>
      <h1 className="text-5xl font-bold">Dark Mode</h1> <br />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.dark.map((image) => (
          <div className="card">
            <Image
              title={image.name}
              width={300}
              height={200}
              src={image.src}
              alt={image.name}
              className="rounded shadow"
            />
          </div>
        ))}
      </div><br />
      <h1 className="text-5xl font-bold">Light Mode</h1> <br />
    </Layout>
  )
}
