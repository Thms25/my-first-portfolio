export default function SectionTitles({ back_title, front_title }) {
  return (
    <div className="text-center m-auto grid place-items-center relative my-12">
      <h1 className="uppercase text-6xl sm:text-7xl md:text-8xl text-white font-semibold">
        {back_title}
      </h1>
      <h2 className="absolute text-dark font-bold text-lg sm:text-xl md:text-2xl uppercase">
        {front_title}
      </h2>
    </div>
  )
}
