import { mygallery } from '../constants'
import styles from '../style'
import { Sneek } from '../components'
import { useState, useEffect } from 'react'
import { getDownloadURL, listAll, ref } from 'firebase/storage'
import { storage } from '../firebase/firebase'


export default function Gallery() {
  const [imageList, setImageList] = useState([])

  const imageListRef = ref(storage, '/')

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url])
        })
      })
    })
  },[])
 
  return (
    <section id='work '>
      <div className="bg-[#f9f9f9]">
        <div className="mx-auto max-w-full py-6 px-20 sm:py-14">
          <h2 className={`${styles.paddingNew} font-shadows text-[#23221f] text-[54px] tracking-[19.2px] mt-6 mb-10 text-center`}>Gallery</h2>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-4  xl:gap-x-8">
            {imageList.map((url) => (
                <div className="aspect-w-1  duration-700  aspect-h-1 w-full overflow-hidden  xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={url}
                    className="h-full w-full object-cover object-center "
                    loading="lazy"
                  />
                </div>
            ))}
          </div>
        </div>
      </div>

      <Sneek/>
    </section>
  )
}
