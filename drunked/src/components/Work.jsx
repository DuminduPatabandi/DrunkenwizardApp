import { products } from '../constants'
import styles from '../style'

export default function Example() {
  return (
    <section id='work'>
      <div className="">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className={`${styles.paddingNew} font-shadows text-[#939393] text-[54px] tracking-[24px] text-center`}>Work</h2>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-w-1 group-hover:grayscale duration-700  aspect-h-1 w-full overflow-hidden  bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center "
                  />
                </div>
                <h3 className="mt-4  font-shadows text-center font-bold text-[#939393] text-[1rem] text-gray-700">{product.mywork}</h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
