export default function Vision({
  heading,
  content,
  image,
  aspect,
}) {
  return (
    <>
      <section className=" mt-8 my-8 py-4 px-4 rounded-md bg-stone-200  grid gap-4 md:grid-cols-2 lg:grid-cols-4 ">
        <div className="col-span-1 mx-8 md:col-span-2 lg-col-span-1 flex flex-col justify-center md:mx-36 lg:mx-24">
          <h1 className="text-4xl mt-4 my-4 text-center font-bold tracking-tighter rounded-lg bg-muted px-3 py-1 lg:mb-8 ">
            {heading}
          </h1>

          <p className="text-muted-foreground  lg:text-xl text-center">
            {content}
          </p>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-2 ">
          <img
            src={image}
            alt="two dogs playing"
            className={`rounded-md ${aspect}`}
          />
        </div>
      </section>
    </>
  );
}
