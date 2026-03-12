import Image from "next/image";

interface User {
  name: string;
  company: string;
  image: string;
  rating: number;
  title: string;
}

const users = [
  {
    name: "Gemma Nolen",
    company: "Google",
    image: "/images/author_image_1.png",
    rating: 5,
    title:
      "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
  },
  {
    name: "Gemma Nolen",
    company: "Google",
    image: "/images/author_image_1.png",
    rating: 5,
    title:
      "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
  },
  {
    name: "Gemma Nolen",
    company: "Google",
    image: "/images/author_image_1.png",
    rating: 5,
    title:
      "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
  },
];

export default function Page() {
  return (
    <div>
      {/* Header */}
      <div className="flex justify-between px-[50px] py-[25px]">
        <div className="text-xl font-semibold">LOGO</div>
        <div className="xl:hidden">...</div>
        <div className="hidden gap-12 xl:flex">
          <div>About</div>
          <div>Work</div>
          <div>Contact</div>
        </div>
      </div>

      {/* Branding */}
      <div className="grid grid-cols-1 gap-[60px] px-8 py-12 xl:grid-cols-2 xl:gap-7">
        <div className="flex h-full flex-col items-center justify-center gap-5 xl:items-start">
          <h2 className="h-8 text-xl font-semibold">Branding | Image making</h2>
          <div className="text-center text-[48px] font-semibold xl:text-start xl:text-[80px]">
            My Awesome Portfolio
          </div>
          <p className="text-center text-base xl:text-start">
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com
          </p>
        </div>

        <div>
          <Image src="/images/Image.png" alt="anh" width={495} height={424} />
        </div>
      </div>

      {/* Client */}
      <div className="flex flex-col items-center">
        <div className="text-3xl font-semibold">Clients</div>
        <div className="grid w-full grid-cols-1 gap-16 p-7 xl:grid-cols-3 xl:px-24">
          {users.map((user, index) => (
            <div
              className="w-full border-2 border-[#FFD285] bg-[#FFFCF5] p-7"
              key={index}
            >
              <p className="text-xl font-semibold">{user.title}</p>

              <div className="mt-20 flex gap-5">
                <Image
                  src={user.image}
                  alt="anh"
                  width={50}
                  height={50}
                  className="h-12 w-12"
                />

                <div className="">
                  <div className="flex gap-1">
                    {Array(user.rating)
                      .fill(0)
                      .map((i) => (
                        <div key={i}>★</div>
                      ))}
                  </div>
                  <div>
                    {user.name}, <br />
                    {user.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
