import { width } from "@mui/system";
import React from "react";
import Link from "next/link";

const ContactInfo = () => {
  const boxStyle = {
    background: " #184353",
  };
  return (
    <div className="bg-bgColor w-[100%] text-white ">
      <h1 className="text-2xl lg:text-3xl font-semibold md:tracking-wider text-center pt-8 pb-2">
        CONTACT AND INFO
      </h1>
      <div className="flex justify-center">
        <svg
          width="117"
          height="3"
          viewBox="0 0 117 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H117V3H0V0Z" fill="#184353" />
        </svg>
      </div>
      <div className="md:flex md:align-middle">
        <div className="px-5 pt-8 xl:ml-20 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6885.651819019208!2d84.89957687894!3d22.250107339616974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a201f72bbd561c3%3A0xab5c70e76a7b5a!2sNational%20Institute%20of%20Technology%2C%20Rourkela!5e0!3m2!1sen!2sin!4v1665677952037!5m2!1sen!2sin"
            className="rounded-2xl h-56 md:h-[20rem] w-full md:w-[24rem] xl:w-[32rem]"
          ></iframe>
        </div>
        <div className="px-4 pt-4">
          <div style={boxStyle} className="rounded-xl lg:w-[500px] h-24 m-4">
            <div className="flex pl-7 pt-3">
              <svg
                width="24"
                height="38"
                viewBox="0 0 24 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pt-1"
              >
                <path
                  d="M11.9999 0C5.53669 0 0.278564 5.65249 0.278564 12.6004C0.278564 14.4952 0.660356 16.3162 1.41303 18.0141C1.42818 18.0505 1.44409 18.0861 1.46106 18.1218L10.3171 36.555C10.6423 37.2316 11.2914 37.6566 11.9997 37.6566C12.7082 37.6566 13.3574 37.2317 13.6823 36.555L22.536 18.1268C22.5513 18.0951 22.5655 18.063 22.5792 18.0306C23.3368 16.3278 23.7209 14.5012 23.7209 12.6004C23.7212 5.65249 18.4631 0 11.9999 0ZM11.9999 19.1957C8.61694 19.1957 5.8647 16.2371 5.8647 12.6004C5.8647 8.96391 8.61694 6.00526 11.9999 6.00526C15.3828 6.00526 18.1351 8.96391 18.1351 12.6004C18.1351 16.2371 15.3828 19.1957 11.9999 19.1957Z"
                  fill="white"
                />
              </svg>
              <div className="ml-4">
                <h1 className="text-lg">Address</h1>
                <h1 className="text-lg">NIT Rourkela</h1>
              </div>
            </div>
          </div>
          <div
            style={boxStyle}
            className="rounded-xl md:w-[300px] lg:w-[500px] h-24 m-4"
          >
            <div className="flex pl-5 pt-3">
              <div>
                <svg
                  width="36"
                  height="15"
                  viewBox="0 0 36 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="-mb-3 mx-0.5 mt-1"
                >
                  <path
                    d="M17.9999 14.0764L35.5861 0.212288L0.41333 0.212158L17.9999 14.0764Z"
                    fill="white"
                  />
                </svg>
                <svg
                  width="40"
                  height="30"
                  viewBox="0 0 40 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.0752 15.0762C20.7551 15.3285 20.3775 15.4545 20.0001 15.4545C19.6224 15.4545 19.2449 15.3285 18.9248 15.0762L3.63635 3.02388L0.000121212 0.157357L0 27.8334C0.000121212 28.9128 0.814058 29.7879 1.81818 29.7879L38.1818 29.7878C39.1861 29.7878 40 28.9127 40 27.8334V0.157227L36.3635 3.02388L21.0752 15.0762Z"
                    fill="white"
                  />
                </svg>
              </div>

              <div className="ml-4">
                <h1 className="text-lg">Email</h1>
                <h1 className="text-lg">incofibs@nitrkl.ac.in</h1>
              </div>
            </div>
          </div>

          <div style={boxStyle} className="rounded-xl lg:w-[500px] h-24 m-4">
            <div className="flex pl-5 pt-3">
              <svg
                width="40"
                height="43"
                viewBox="0 0 40 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pt-1"
              >
                <path
                  d="M39.6141 29.3137C38.2756 26.5935 33.6281 23.644 33.4234 23.515C32.8261 23.1495 32.2029 22.9561 31.6196 22.9561C30.7523 22.9561 30.0424 23.3832 29.6125 24.1599C28.9325 25.0342 28.0893 26.0561 27.8846 26.2144C26.2995 27.3689 25.0603 27.2384 23.6884 25.7637L16.0318 17.5329C14.6686 16.0674 14.5433 14.7181 15.6112 13.0241C15.7605 12.8019 16.7104 11.8954 17.5237 11.1645C18.0423 10.8327 18.3983 10.3404 18.5536 9.7356C18.7615 8.93087 18.6082 7.98424 18.1189 7.06055C18.0036 6.84844 15.2599 1.85162 12.7295 0.413417C12.2575 0.144693 11.7263 0.00280762 11.1923 0.00280762C10.3137 0.00280762 9.48714 0.371137 8.86587 1.03829L7.17537 2.85629C4.49964 5.73127 3.53041 8.99106 4.295 12.5432C4.93227 15.5042 6.78941 18.6551 9.81578 21.9084L19.6181 32.4459C22.8805 35.9529 26.0122 37.9823 28.9525 38.5083C28.2359 40.3034 26.5761 41.5639 24.6463 41.5639C22.5618 41.5639 20.7587 40.1214 20.1601 37.9752L19.5575 35.8154C19.4381 35.389 19.0795 35.1031 18.6656 35.1031C18.2516 35.1031 17.893 35.389 17.7736 35.8161L16.6651 39.7867L15.5572 35.8161C15.4379 35.3897 15.0793 35.1038 14.6653 35.1038C14.2513 35.1038 13.8927 35.3897 13.7734 35.8168L12.6655 39.7867L11.5576 35.8161C11.4383 35.3897 11.0797 35.1038 10.6657 35.1038C10.2517 35.1038 9.8931 35.3897 9.77378 35.8168L8.66589 39.7867L7.558 35.8161C7.43868 35.3897 7.08005 35.1038 6.66609 35.1038C6.25213 35.1038 5.8935 35.3897 5.77418 35.8168L4.66629 39.7867L3.5584 35.8161C3.43908 35.3904 3.08045 35.1038 2.66649 35.1038C2.25253 35.1038 1.8939 35.3897 1.77458 35.8168L0.0280895 42.0748C-0.0772333 42.4532 0.122747 42.853 0.475378 42.967C0.539372 42.9878 0.604032 42.9978 0.666692 42.9978C0.953997 42.9978 1.21864 42.7979 1.30529 42.4869L2.66649 37.609L3.77438 41.5796C3.8937 42.006 4.25233 42.2919 4.66629 42.2919C5.08025 42.2919 5.43888 42.006 5.5582 41.5789L6.66609 37.609L7.77398 41.5796C7.8933 42.006 8.25193 42.2919 8.66589 42.2919C9.07985 42.2919 9.43848 42.006 9.5578 41.5789L10.6657 37.609L11.7736 41.5796C11.8929 42.006 12.2515 42.2919 12.6655 42.2919C13.0795 42.2919 13.4381 42.006 13.5574 41.5789L14.6653 37.609L15.7732 41.5796C15.8925 42.006 16.2511 42.2919 16.6651 42.2919C17.0791 42.2919 17.4377 42.006 17.557 41.5789L18.6649 37.6083L18.8822 38.3872C19.6515 41.1454 21.9679 42.9978 24.6456 42.9978C27.2734 42.9978 29.5071 41.1748 30.3257 38.6466C30.3737 38.6473 30.423 38.6524 30.471 38.6524C30.4717 38.6524 30.471 38.6524 30.4717 38.6524C32.9521 38.6524 35.2632 37.5194 37.3417 35.2851L39.0329 33.4678C40.0601 32.3621 40.2941 30.6931 39.6141 29.3137Z"
                  fill="white"
                />
              </svg>
              <div className="ml-4">
                <h1 className="text-lg">Phone</h1>
                <h1 className="text-lg">+91 1234567890</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-4 pb-12 px-4">
        <p>
          For membership of the Indian Immunology society and other details,
          please visit
        </p>
        <Link href="/">
          <a>www.xyz.org</a>
        </Link>
      </div>
    </div>
  );
};

export default ContactInfo;