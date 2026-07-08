import Image from "next/image";

const ProjectCustomisation = () => {
  return (
    <div className="mt-20 text-white relative">
      <h1 className="font-bold text-4xl text-center mb-6">
        Secret Customisation
      </h1>

      <div className="flex gap-4 px-6 max-w-6xl mx-auto mb-4">
        <div className="basis-[50%] h-[300px] mt-10 mb-8 bg-white rounded-xl shadow-md overflow-hidden">
          <Image
            src="/images/pc1.png"
            alt="Image 1"
            className="w-full h-full object-cover"
            width={400}
            height={100}
          />
        </div>

        <div className="basis-[30%] h-[380px] mb-20 bg-white rounded-xl shadow-md overflow-hidden">
          <Image
            src="/images/pc2.png"
            alt="Image 2"
            className="w-full h-full object-cover"
            width={400}
            height={120}
          />
        </div>

        <div className="basis-[20%] h-[500px] -mt-10 bg-white rounded-xl shadow-md overflow-hidden">
          <Image
            src="/images/pc3.png"
            alt="Image 3"
            className="w-full h-full object-cover"
            width={400}
            height={140}
          />
        </div>
      </div>

      <div className="flex gap-4 px-6 max-w-6xl mx-auto">
        <div className="basis-1/2 h-[360px] -mt-20 bg-white rounded-xl shadow-md overflow-hidden">
          <Image
            src="/images/pc3.png"
            alt="Image 4"
            className="w-full h-full object-cover"
            width={400}
            height={160}
          />
        </div>
        <div className="basis-1/2 h-[280px] bg-white rounded-xl shadow-md overflow-hidden">
          <Image
            src="/images/pc3.png"
            alt="Image 5"
            className="w-full h-full object-cover"
            width={400}
            height={160}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCustomisation;
