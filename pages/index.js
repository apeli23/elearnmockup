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
    ],

    light: [
      {
        id: 1,
        src: "https://res.cloudinary.com/dlt0f5pvq/image/upload/v1668171529/Screenshot_2022-11-11_at_15.57.54_yx7eve.png",
        name: "Light - authentecation"
      },
      {
        id: 2,
        src: "https://res.cloudinary.com/dlt0f5pvq/image/upload/v1668176173/Light_-_Dashboard_pb1bhm.png",
        name: "Light - dashboard"
      },
      {
        id: 3,
        src: "https://res.cloudinary.com/dlt0f5pvq/image/upload/v1668176173/Light_-_Search_Course_w4pepi.png",
        name: "Light - search course"
      },
      {
        id: 4,
        src: "https://res.cloudinary.com/dlt0f5pvq/image/upload/v1668176169/Light_-_Course_Result_hmbjum.png",
        name: "Light - course result"
      },
      {
        id: 5,
        src: "https://res.cloudinary.com/dlt0f5pvq/image/upload/v1668176170/Light_-_Courses_Cart_rwcxef.png",
        name: "Light - course cart"
      },
      {
        id: 6,
        src: "https://res.cloudinary.com/dlt0f5pvq/image/upload/v1668171530/Screenshot_2022-11-11_at_15.58.10_efyepv.png",
        name: "author detail"
      },
      {
        id: 7,
        src: "https://res.cloudinary.com/dlt0f5pvq/image/upload/v1668176167/Light_-_Course_Detail_qbmtqx.png",
        name: "Light - course detail"
      },
      {
        id: 8,
        src: "https://res.cloudinary.com/dlt0f5pvq/image/upload/v1668176167/Light_-_Course_Playlist_f78v8j.png",
        name: "Light - course playlist"
      },
      {
        id: 9,
        src: "https://res.cloudinary.com/dlt0f5pvq/image/upload/v1668176168/Light_-_Course_Comments_kqbz0k.png",
        name: "Light - course comments"
      },
    ]
  }

  return (
    <Layout>
      <h1 className="text-5xl font-bold">Dark Mode</h1><br />
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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.light.map((img) => (
          <div className="card">
            <Image
              title={img.name}
              width={300}
              height={200}
              src={img.src}
              alt={img.name}
              className="rounded shadow"
            />
          </div>
        ))}
      </div>
    </Layout>
  )
}
